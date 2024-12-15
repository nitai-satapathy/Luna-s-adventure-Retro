document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    const muteButton = document.getElementById('mute-button');
    let isMuted = false;
  
    muteButton.addEventListener('click', () => {
      isMuted = !isMuted;
      audio.muted = isMuted;
      muteButton.innerHTML = isMuted ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
    });
  });
  