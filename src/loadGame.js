// src/loadGame.js
import mainJsUrl from './main.js?url';

export async function loadPhaserGame() {
  const script = document.createElement('script');
  script.type = 'module';
  script.src = mainJsUrl;
  script.defer = true;

  script.onload = () => {
    console.log('Phaser game loaded successfully.');
  };

  script.onerror = (e) => {
    console.error('Failed to load Phaser game:', e);
  };

  document.head.appendChild(script);
}