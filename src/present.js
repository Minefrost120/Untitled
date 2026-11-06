import * as THREE from 'three';
import { clamp } from './config.js';
import { animatePlayer } from './entities.js';

export function installPresenter(Match) {
  Object.assign(Match.prototype, {
    updateVisuals(dt) {
      for (const p of this.players) {
        const v = p.visual;
        v.root.position.set(p.pos.x, 0, p.pos.z);
        v.root.rotation.y = p.facing;

        if (p.spinTime > 0) {
          p.spinTime = Math.max(0, p.spinTime - dt);
          v.body.rotation.y = (1 - p.spinTime / 0.5) * Math.PI * 2;
        } else if (v.body.rotation.y !== 0) {
          v.body.rotation.y = 0;
        }

        animatePlayer(v, p.runPhase, p.speedNow, p.slide > 0);
      }

      const b = this.ball;
      const bv = this.ballVisual;
      bv.root.position.set(b.x, 0, b.z);
      bv.ball.position.y = 0.32 + b.y;
      const shScale = clamp(1 - b.y * 0.08, 0.45, 1);
      bv.shadow.scale.setScalar(shScale);
      bv.shadow.material.opacity = 0.34 * shScale;

      const spd = Math.hypot(b.vx, b.vz);
      if (!b.owner && spd > 0.35) {
        this._spinAxis.set(b.vz / spd, 0, -b.vx / spd);
        bv.ball.rotateOnWorldAxis(this._spinAxis, (spd * dt) / 0.32);
      }

      const c = this.controlled;
      if (c) {
        this.ring.visible = this.state === 'play';
        this.ring.position.set(c.pos.x, 0.04, c.pos.z);
        const pulse = 0.9 + Math.sin(this.time * 7) * 0.1;
        this.ring.scale.setScalar(pulse);
        this.ring.material.opacity = 0.55 + Math.sin(this.time * 7) * 0.25;
      }
    },

    updateCamera(dt = 0.016) {
      const b = this.ball;
      const tx = clamp(b.x + b.vx * 0.07, -21, 21);
      const tz = clamp(b.z + b.vz * 0.07, -33, 33);
      const k = 1 - Math.exp(-3.6 * dt);
      this.focus.x += (tx - this.focus.x) * k;
      this.focus.y += (tz - this.focus.y) * k;

      const cam = this.camera;
      cam.position.set(this.focus.x * 0.9, 36, this.focus.y + 17.5);
      cam.lookAt(this.focus.x * 0.95, 0, this.focus.y - 7);
    },
  });
}
