// Tiny WebAudio synth for kicks, whistles, tackles and crowd noise.
export class Sfx {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.master = null;
    this.crowdGain = null;
    this.noiseBuffer = null;
    this.cheerUntil = 0;
  }

  init() {
    if (this.ctx) return;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.75;
    this.master.connect(this.ctx.destination);
    this.noiseBuffer = this.makeNoise(2);
    this.startCrowd();
  }

  makeNoise(seconds) {
    const len = Math.floor(this.ctx.sampleRate * seconds);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.4;
    }
    return buf;
  }

  startCrowd() {
    if (!this.ctx || !this.noiseBuffer) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 420;
    filter.Q.value = 0.6;
    const gain = this.ctx.createGain();
    gain.gain.value = 0.055;
    src.connect(filter).connect(gain).connect(this.master);
    src.start();
    this.crowdGain = gain;

    // slow swell
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.value = 0.07;
    lfoGain.gain.value = 0.025;
    lfo.connect(lfoGain).connect(gain.gain);
    lfo.start();
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.value = m ? 0 : 0.75;
    return this.muted;
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  tone({ freq = 440, dur = 0.2, type = 'sine', gain = 0.14, slide = 0, delay = 0 }) {
    if (!this.ctx || this.muted) return;
    const t0 = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(this.master);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  burst({ dur = 0.18, gain = 0.2, freq = 900, q = 0.9, type = 'bandpass', delay = 0 }) {
    if (!this.ctx || this.muted || !this.noiseBuffer) return;
    const t0 = this.ctx.currentTime + delay;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const f = this.ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f).connect(g).connect(this.master);
    src.start(t0);
    src.stop(t0 + dur + 0.03);
  }

  kick(power = 0.7) {
    this.init();
    this.burst({ dur: 0.09, gain: 0.22 * power, freq: 1500, q: 0.8 });
    this.tone({ freq: 150, dur: 0.15, type: 'sine', gain: 0.22 * power, slide: -90 });
  }

  touch() {
    this.init();
    this.burst({ dur: 0.05, gain: 0.06, freq: 2100, q: 1 });
  }

  thud(power = 0.7) {
    this.init();
    this.tone({ freq: 110, dur: 0.16, type: 'triangle', gain: 0.16 * power, slide: -50 });
  }

  tackle() {
    this.init();
    this.burst({ dur: 0.16, gain: 0.16, freq: 800, q: 0.6 });
    this.tone({ freq: 90, dur: 0.2, type: 'triangle', gain: 0.18, slide: -30 });
  }

  slide() {
    this.init();
    this.burst({ dur: 0.3, gain: 0.1, freq: 2600, q: 0.4, type: 'highpass' });
  }

  catchBall() {
    this.init();
    this.burst({ dur: 0.07, gain: 0.12, freq: 1200, q: 1.2 });
  }

  whistle(long = false) {
    this.init();
    const dur = long ? 0.55 : 0.32;
    this.tone({ freq: 2400, dur, type: 'square', gain: 0.055, slide: 260 });
    this.tone({ freq: 2900, dur, type: 'square', gain: 0.03, slide: 180 });
  }

  goal() {
    this.init();
    this.tone({ freq: 392, dur: 0.5, type: 'sawtooth', gain: 0.1 });
    this.tone({ freq: 523, dur: 0.6, type: 'sawtooth', gain: 0.08, delay: 0.1 });
    this.tone({ freq: 659, dur: 0.7, type: 'sawtooth', gain: 0.075, delay: 0.2 });
    this.burst({ dur: 1.4, gain: 0.22, freq: 700, q: 0.4, delay: 0.1 });
    this.burst({ dur: 1.8, gain: 0.12, freq: 1600, q: 0.3, delay: 0.25 });
  }

  click() {
    this.init();
    this.tone({ freq: 660, dur: 0.05, type: 'square', gain: 0.04 });
  }
}
