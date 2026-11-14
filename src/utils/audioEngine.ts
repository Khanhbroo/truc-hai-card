// Audio Controller playing "Seven" by Jung Kook (feat. Latto)
// Uses HTML5 Audio API with loop, smooth volume control, and robust autoplay handling

class RomanticAudioEngine {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;
  private listeners: ((playing: boolean) => void)[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.audio = new Audio('/audio/seven.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.65;
      this.audio.preload = 'auto';

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });
    }
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isPlaying));
  }

  public subscribe(fn: (playing: boolean) => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }

  public play(): Promise<void> {
    if (!this.audio) return Promise.resolve();
    return this.audio.play().then(() => {
      this.isPlaying = true;
      this.notify();
    }).catch(() => {
      this.isPlaying = false;
      this.notify();
    });
  }

  public pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    this.notify();
  }

  public toggle(): boolean {
    if (!this.audio) return false;
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
