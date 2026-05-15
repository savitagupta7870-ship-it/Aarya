
export const playSound = (frequency: number, type: OscillatorType, duration: number, volume: number) => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    const audioCtx = new AudioContextClass();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

    gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio failed or blocked
  }
};

export const uiSounds = {
  hover: () => playSound(880, 'triangle', 0.1, 0.05),
  click: () => playSound(150, 'sine', 0.3, 0.1),
  success: () => {
    playSound(523.25, 'sine', 0.2, 0.1); // C5
    setTimeout(() => playSound(659.25, 'sine', 0.3, 0.1), 100); // E5
  }
};
