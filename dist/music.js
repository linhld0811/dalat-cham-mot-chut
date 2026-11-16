'use strict';
// Match the Hòa Bình experience while respecting an explicit pause.
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
const musicLabel = document.getElementById('musicLabel');
const musicPreferenceKey = 'mot-chut-dalat-music';
let musicDisabled = false;
let musicPending = false;
try { musicDisabled = localStorage.getItem(musicPreferenceKey) === 'off'; } catch {}
backgroundMusic.volume = 0.45;
backgroundMusic.autoplay = !musicDisabled;

function updateMusicButton(isPlaying) {
  musicToggle.classList.toggle('is-playing', isPlaying);
  musicToggle.setAttribute('aria-pressed', String(isPlaying));
  musicToggle.setAttribute('aria-label', isPlaying ? 'Tắt nhạc' : 'Phát nhạc cho chuyến đi');
  musicLabel.textContent = isPlaying ? 'Tắt nhạc' : 'Bật nhạc';
}
function clearMusicInteraction() {
  document.removeEventListener('pointerdown', startMusicAfterInteraction);
  document.removeEventListener('keydown', startMusicAfterInteraction);
}
function rememberMusicPreference() {
  try { localStorage.setItem(musicPreferenceKey, musicDisabled ? 'off' : 'on'); } catch {}
}
async function playTripMusic() {
  if (musicPending || musicDisabled) return;
  musicPending = true;
  musicLabel.textContent = 'Đang tải…';
  try {
    await backgroundMusic.play();
    updateMusicButton(!backgroundMusic.paused);
    clearMusicInteraction();
  } catch (error) {
    updateMusicButton(false);
    if (error.name !== 'NotAllowedError' && error.name !== 'AbortError') {
      clearMusicInteraction();
      showToast('Không thể tải tệp nhạc. Bạn thử bật lại nhé.');
    }
  } finally {
    musicPending = false;
  }
}
function startMusicAfterInteraction(event) {
  if (musicDisabled || event.target.closest?.('#musicToggle')) return;
  if (event.type === 'keydown' && (event.repeat || event.ctrlKey || event.metaKey || event.altKey || !['Enter', ' '].includes(event.key))) return;
  void playTripMusic();
}
backgroundMusic.addEventListener('play', () => {
  updateMusicButton(true);
  clearMusicInteraction();
});
backgroundMusic.addEventListener('pause', () => updateMusicButton(false));
backgroundMusic.addEventListener('error', () => {
  updateMusicButton(false);
  clearMusicInteraction();
  showToast('Không thể tải tệp nhạc. Bạn thử bật lại nhé.');
});
musicToggle.addEventListener('click', () => {
  if (!backgroundMusic.paused || musicPending) {
    musicDisabled = true;
    clearMusicInteraction();
    backgroundMusic.pause();
    updateMusicButton(false);
  } else {
    musicDisabled = false;
    void playTripMusic();
  }
  rememberMusicPreference();
});
if (musicDisabled) {
  backgroundMusic.pause();
  updateMusicButton(false);
} else {
  document.addEventListener('pointerdown', startMusicAfterInteraction);
  document.addEventListener('keydown', startMusicAfterInteraction);
  void playTripMusic();
}

const siteHeader = document.getElementById('site-header');
function updateHeader() {
  const opening = document.querySelector('.opening-track');
  const pinnedOpening = opening && document.documentElement.classList.contains('has-opening-motion');
  const pastOpening = pinnedOpening ? opening.getBoundingClientRect().bottom <= window.innerHeight : true;
  siteHeader.classList.toggle('scrolled', window.scrollY > 35 && pastOpening);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
