(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const total = slides.length;
  const $ = (id) => document.getElementById(id);
  const prev = $('prev'), next = $('next'), bar = $('progressBar'), controls = document.querySelector('.controls');
  const romajiBtn = $('romajiBtn'), fsBtn = $('fsBtn');
  const pad = (n) => String(n).padStart(2, '0');
  let index = 0;

  const load = (i) => slides[i]?.querySelectorAll('img[data-src]').forEach((img) => {
    img.src = img.dataset.src; img.removeAttribute('data-src');
  });

  function go(i, { updateHash = true } = {}) {
    index = Math.max(0, Math.min(total - 1, i));
    slides.forEach((s, k) => {
      s.classList.toggle('active', k === index);
      s.toggleAttribute('inert', k !== index);
      s.setAttribute('aria-hidden', k === index ? 'false' : 'true');
    });
    load(index); load(index + 1); load(index - 1);
    $('cur').textContent = pad(index + 1);
    $('tot').textContent = pad(total);
    bar.style.width = ((index + 1) / total) * 100 + '%';
    prev.disabled = index === 0;
    next.disabled = index === total - 1;
    if (updateHash) history.replaceState(null, '', '#' + (index + 1));
    document.title = 'ネパールの地形、自然災害、旅行 — ' + pad(index + 1) + '/' + pad(total);
  }

  const setRomaji = (on) => {
    document.body.classList.toggle('show-romaji', on);
    romajiBtn.setAttribute('aria-pressed', on);
    romajiBtn.textContent = on ? 'ローマ字を隠す / Hide Romaji' : 'ローマ字を表示';
    try { localStorage.setItem('romaji', on ? '1' : '0'); } catch (e) {}
  };
  const toggleFs = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.().catch(() => {});
  };

  prev.onclick = () => go(index - 1);
  next.onclick = () => go(index + 1);
  romajiBtn.onclick = () => setRomaji(!document.body.classList.contains('show-romaji'));
  fsBtn.onclick = toggleFs;
  if (!document.documentElement.requestFullscreen) fsBtn.hidden = true;

  document.addEventListener('keydown', (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    switch (e.key) {
      case 'ArrowRight': case 'PageDown': case ' ':
        if (e.target.closest?.('button') && e.key === ' ') return; // let focused buttons activate
        e.preventDefault(); go(index + 1); break;
      case 'ArrowLeft': case 'PageUp': e.preventDefault(); go(index - 1); break;
      case 'Home': e.preventDefault(); go(0); break;
      case 'End': e.preventDefault(); go(total - 1); break;
      case 'r': case 'R': romajiBtn.click(); break;
      case 'f': case 'F': toggleFs(); break;
    }
  });

  // swipe
  let sx = null, sy = 0;
  document.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  document.addEventListener('touchend', (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(index + (dx < 0 ? 1 : -1));
    sx = null;
  }, { passive: true });

  // hide controls when idle (always on pointer devices once the mouse stops)
  let idleTimer;
  const wake = () => {
    controls.classList.remove('hidden'); document.body.classList.remove('idle');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      if (controls.contains(document.activeElement) && document.activeElement.matches(':focus-visible')) return;
      controls.classList.add('hidden'); document.body.classList.add('idle');
    }, 3500);
  };
  ['mousemove', 'pointerdown', 'keydown', 'touchstart'].forEach((ev) => document.addEventListener(ev, wake, { passive: true }));

  window.addEventListener('hashchange', () => go((parseInt(location.hash.slice(1), 10) || 1) - 1, { updateHash: false }));

  try { if (localStorage.getItem('romaji') === '1') setRomaji(true); } catch (e) {}
  go((parseInt(location.hash.slice(1), 10) || 1) - 1, { updateHash: false });
  wake();
})();
