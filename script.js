(() => {
  const $ = (id) => document.getElementById(id);

  // Contagem desde a data do primeiro encontro (horário local).
  const start = new Date(2026, 5, 4, 0, 0, 0);
  function updateTimer() {
    const elapsed = Math.max(0, Date.now() - start.getTime());
    const seconds = Math.floor(elapsed / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    $('days').textContent = days.toLocaleString('pt-BR');
    $('hours').textContent = String(hours).padStart(2, '0');
    $('minutes').textContent = String(minutes).padStart(2, '0');
    $('seconds').textContent = String(secs).padStart(2, '0');
  }
  updateTimer();
  setInterval(updateTimer, 1000);

  // Entrada suave dos elementos quando aparecem na tela.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // Galeria com ampliação das fotos originais.
  const lightbox = $('lightbox');
  const lightboxImage = $('lightboxImage');
  document.querySelectorAll('.photo-card').forEach((card) => {
    card.addEventListener('click', () => {
      lightboxImage.src = card.dataset.full;
      lightboxImage.alt = card.querySelector('img').alt;
      lightbox.showModal();
    });
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  // Surpresa final e uma pequena chuva de corações.
  $('surpriseButton').addEventListener('click', () => {
    const message = $('surpriseMessage');
    message.hidden = false;
    $('surpriseButton').hidden = true;
    for (let i = 0; i < 18; i++) {
      const heart = document.createElement('span');
      heart.textContent = i % 3 === 0 ? '♥' : '✦';
      heart.className = 'burst';
      heart.style.left = `${8 + Math.random() * 84}%`;
      heart.style.setProperty('--drift', `${(Math.random() - .5) * 150}px`);
      heart.style.animationDelay = `${Math.random() * .7}s`;
      $('surpriseMessage').appendChild(heart);
      setTimeout(() => heart.remove(), 2600);
    }
  });

  // Música MP3 enviada pelo usuário; reproduz somente após clique.
  const music = $('backgroundMusic');
  const soundButton = $('soundToggle');
  const soundLabel = $('soundLabel');
  music.volume = 0.65;

  function syncMusicButton() {
    const playing = !music.paused;
    soundButton.setAttribute('aria-pressed', String(playing));
    soundLabel.textContent = playing ? 'Pausar música' : 'Tocar nossa música';
  }

  soundButton.addEventListener('click', async () => {
    if (!music.paused) {
      music.pause();
      return;
    }
    try {
      await music.play();
    } catch (error) {
      soundLabel.textContent = 'Não foi possível tocar';
      console.error('Erro ao reproduzir o MP3:', error);
    }
  });
  music.addEventListener('play', syncMusicButton);
  music.addEventListener('pause', syncMusicButton);
  music.addEventListener('ended', syncMusicButton);
  music.addEventListener('error', () => {
    soundLabel.textContent = 'Áudio indisponível';
  });
})();
