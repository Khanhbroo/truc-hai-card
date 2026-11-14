// Romantic Web Audio Synthesizer playing an acoustic piano / music box melody
// Designed to be completely self-contained with zero network latency or broken links

class RomanticAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: number | null = null;
  private noteIndex = 0;

  // Gentle pentatonic / major romantic lullaby melody notes in Hz
  // Melody inspired by gentle romantic piano chords
  private melody = [
    { freq: 261.63, dur: 0.8 }, // C4
    { freq: 329.63, dur: 0.8 }, // E4
    { freq: 392.00, dur: 0.8 }, // G4
    { freq: 493.88, dur: 1.2 }, // B4
    { freq: 440.00, dur: 0.8 }, // A4
    { freq: 392.00, dur: 0.8 }, // G4
    { freq: 329.63, dur: 1.4 }, // E4

    { freq: 293.66, dur: 0.8 }, // D4
    { freq: 349.23, dur: 0.8 }, // F4
    { freq: 440.00, dur: 0.8 }, // A4
    { freq: 523.25, dur: 1.2 }, // C5
    { freq: 493.88, dur: 0.8 }, // B4
    { freq: 440.00, dur: 0.8 }, // A4
    { freq: 392.00, dur: 1.6 }, // G4

    { freq: 329.63, dur: 0.8 }, // E4
    { freq: 392.00, dur: 0.8 }, // G4
    { freq: 493.88, dur: 0.8 }, // B4
    { freq: 587.33, dur: 1.2 }, // D5
    { freq: 523.25, dur: 0.8 }, // C5
    { freq: 440.00, dur: 1.4 }, // A4

    { freq: 349.23, dur: 0.8 }, // F4
    { freq: 440.00, dur: 0.8 }, // A4
    { freq: 523.25, dur: 0.8 }, // C5
    { freq: 493.88, dur: 1.0 }, // B4
    { freq: 392.00, dur: 1.0 }, // G4
    { freq: 261.63, dur: 2.2 }, // C4
  ];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a soft bell-like piano chime note with warm harmonic decay
  private playNote(freq: number, duration: number) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Warm sub-harmonic
    subOsc.type = 'triangle';
    subOsc.frequency.setValueAtTime(freq / 2, now);

    // Soft attack, gentle exponential decay
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.5);

    osc.connect(gain);
    subOsc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    subOsc.start(now);
    osc.stop(now + duration + 0.6);
    subOsc.stop(now + duration + 0.6);
  }

  public play() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.noteIndex = 0;

    const step = () => {
      if (!this.isPlaying) return;
      const current = this.melody[this.noteIndex];
      this.playNote(current.freq, current.dur);
      this.noteIndex = (this.noteIndex + 1) % this.melody.length;
      this.intervalId = window.setTimeout(step, current.dur * 1000);
    };

    step();
  }

  public pause() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearTimeout(this.intervalId);
      this.intervalId = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const audioEngine = new RomanticAudioEngine();
