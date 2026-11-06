const MOVE_KEYS = {
  KeyW: 'up', ArrowUp: 'up',
  KeyS: 'down', ArrowDown: 'down',
  KeyA: 'left', ArrowLeft: 'left',
  KeyD: 'right', ArrowRight: 'right',
};

const ACTION_KEYS = {
  KeyJ: 'pass',
  KeyK: 'through',
  Space: 'shoot',
  KeyL: 'skill',
  KeyE: 'tackle',
  KeyQ: 'switch',
  ShiftLeft: 'sprint',
  ShiftRight: 'sprint',
  KeyX: 'shoot',
  KeyC: 'pass',
  KeyV: 'through',
};

export class Input {
  constructor({ onPause, onMute, onAny } = {}) {
    this.pressed = new Set();
    this.released = new Set();
    this.held = new Set();
    this.keys = new Set();
    this.move = { x: 0, y: 0 };
    this.touch = { x: 0, y: 0 };
    this.joyActive = false;
    this.onPause = onPause;
    this.onMute = onMute;
    this.onAny = onAny;
    this.domMove = { x: 0, y: 0 };

    this.bindKeyboard();
    this.bindStick();
    this.bindButtons();
  }

  bindKeyboard() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Tab' || e.code === 'Space') e.preventDefault();
      if (e.code === 'Escape' || e.code === 'KeyP') {
        if (!e.repeat && this.onPause) this.onPause();
        return;
      }
      if (e.code === 'KeyM') {
        if (!e.repeat && this.onMute) this.onMute();
        return;
      }
      if (e.repeat) return;
      if (MOVE_KEYS[e.code]) {
        this.keys.add(e.code);
        this.onAny?.();
      }
      const a = ACTION_KEYS[e.code];
      if (a) {
        this.pressed.add(a);
        this.held.add(a);
        this.onAny?.();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (MOVE_KEYS[e.code]) this.keys.delete(e.code);
      const a = ACTION_KEYS[e.code];
      if (a) {
        this.held.delete(a);
        this.released.add(a);
      }
    });

    window.addEventListener('blur', () => {
      this.keys.clear();
      this.held.clear();
      this.joyActive = false;
      this.touch.x = 0;
      this.touch.y = 0;
      this.domMove.x = 0;
      this.domMove.y = 0;
      const stick = document.getElementById('stick');
      if (stick) stick.style.transform = 'translate(0px, 0px)';
    });
  }

  bindStick() {
    const base = document.getElementById('joystick');
    const knob = document.getElementById('stick');
    if (!base || !knob) return;
    let pid = null;

    const setFrom = (clientX, clientY) => {
      const r = base.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const max = r.width * 0.32;
      let dx = clientX - cx;
      let dy = clientY - cy;
      const len = Math.hypot(dx, dy);
      if (len > max) {
        dx = (dx / len) * max;
        dy = (dy / len) * max;
      }
      knob.style.transform = `translate(${dx}px, ${dy}px)`;
      const nx = dx / max;
      const ny = dy / max;
      this.touch.x = Math.abs(nx) < 0.08 ? 0 : nx;
      this.touch.y = Math.abs(ny) < 0.08 ? 0 : -ny;
      this.joyActive = true;
    };

    const reset = () => {
      pid = null;
      this.joyActive = false;
      this.touch.x = 0;
      this.touch.y = 0;
      knob.style.transform = 'translate(0px, 0px)';
    };

    base.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      pid = e.pointerId;
      base.setPointerCapture(pid);
      setFrom(e.clientX, e.clientY);
      this.onAny?.();
    });
    base.addEventListener('pointermove', (e) => {
      if (pid !== e.pointerId) return;
      setFrom(e.clientX, e.clientY);
    });
    const up = (e) => {
      if (pid !== e.pointerId) return;
      base.releasePointerCapture?.(pid);
      reset();
    };
    base.addEventListener('pointerup', up);
    base.addEventListener('pointercancel', up);
    base.addEventListener('lostpointercapture', reset);
  }

  bindButtons() {
    document.querySelectorAll('.abtn').forEach((btn) => {
      const act = btn.dataset.act;
      if (!act) return;
      let pid = null;

      btn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        pid = e.pointerId;
        btn.setPointerCapture?.(pid);
        btn.classList.add('down');
        this.pressed.add(act);
        this.held.add(act);
        this.onAny?.();
      });

      const release = (e) => {
        if (pid !== null && e.pointerId !== undefined && pid !== e.pointerId) return;
        pid = null;
        btn.classList.remove('down');
        if (this.held.has(act)) {
          this.held.delete(act);
          this.released.add(act);
        }
      };
      btn.addEventListener('pointerup', release);
      btn.addEventListener('pointercancel', release);
      btn.addEventListener('lostpointercapture', release);
      // no context menu on long presses
      btn.addEventListener('contextmenu', (e) => e.preventDefault());
    });
  }

  /** combine keyboard + virtual stick */
  sample() {
    let x = 0;
    let y = 0;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) y += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) y -= 1;
    if (x === 0 && y === 0) {
      x = this.touch.x;
      y = this.touch.y;
    }
    this.move.x = x;
    this.move.y = y;
  }

  consume(action) {
    if (this.pressed.has(action)) {
      this.pressed.delete(action);
      return true;
    }
    return false;
  }

  consumeRelease(action) {
    if (this.released.has(action)) {
      this.released.delete(action);
      return true;
    }
    return false;
  }

  has(action) {
    return this.held.has(action);
  }

  endFrame() {
    this.pressed.clear();
    this.released.clear();
  }
}
