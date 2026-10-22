(() => {
  const data = window.PRESENTATION_SCRIPT;
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };

  // Show hiragana readings in parentheses a little smaller; text content stays identical.
  const jpNode = (tag, text, cls) => {
    const n = el(tag, cls); n.lang = 'ja';
    text.split(/(（[ぁ-ゟー]+）)/).forEach((part) => {
      if (!part) return;
      if (/^（[ぁ-ゟー]+）$/.test(part)) n.appendChild(el('span', 'yomi', part)); else n.append(part);
    });
    return n;
  };

  document.getElementById('docTitleJp').replaceWith(Object.assign(jpNode('h1', data.title.jp), { id: 'docTitleJp' }));
  document.getElementById('docTitleRo').textContent = data.title.ro;

  const jump = document.getElementById('jump');
  const root = document.getElementById('sections');
  const thumbs = [];

  data.sections.forEach((s, i) => {
    const label = s.id === 'opening' ? 'Opening' : s.id === 'closing' ? 'Conclusion' : 'Slide ' + s.id.split('-')[1];
    const chip = el('a', 'chip', label); chip.href = '#' + s.id; jump.appendChild(chip);

    const sec = el('section', 'block'); sec.id = s.id; sec.setAttribute('aria-labelledby', s.id + '-h');

    const head = el('div', 'block-head');
    const h = el('h2', null, s.heading); h.id = s.id + '-h'; head.appendChild(h);
    const deckText = s.deck.length > 1 ? `Deck slides ${s.deck[0]}–${s.deck[s.deck.length - 1]}` : `Deck slide ${s.deck[0]}`;
    head.appendChild(el('p', 'meta', (s.sub ? s.sub + ' · ' : '') + deckText));
    sec.appendChild(head);

    const th = el('div', 'thumbs');
    s.deck.forEach((n) => {
      const fig = el('figure', 'thumb');
      const frame = el('div', 'frame');
      const iframe = document.createElement('iframe');
      iframe.src = `index.html?thumb#${n}`;
      iframe.title = `Preview of deck slide ${n}`;
      iframe.loading = i < 2 ? 'eager' : 'lazy';
      iframe.tabIndex = -1; iframe.setAttribute('aria-hidden', 'true');
      frame.appendChild(iframe); fig.appendChild(frame);
      fig.appendChild(el('figcaption', null, 'Slide ' + String(n).padStart(2, '0')));
      th.appendChild(fig); thumbs.push(frame);
    });
    sec.appendChild(th);

    const body = el('div', 'lines');
    s.lines.forEach((l) => {
      const line = el('div', 'line' + (l.lead ? ' lead' : ''));
      line.appendChild(jpNode('p', l.jp, 'jp'));
      const ro = el('p', 'ro', l.ro); ro.lang = 'ja-Latn'; line.appendChild(ro);
      body.appendChild(line);
    });
    sec.appendChild(body);
    root.appendChild(sec);
  });

  // Scale each 1280×720 iframe to fit its frame so the thumbnail is the real slide.
  const ro = new ResizeObserver((entries) => entries.forEach((e) => {
    e.target.firstElementChild.style.transform = `scale(${e.contentRect.width / 1280})`;
  }));
  thumbs.forEach((f) => ro.observe(f));

  // Text size (stored only on this device).
  const root$ = document.documentElement;
  let scale = 1;
  try { scale = parseFloat(localStorage.getItem('guideScale')) || 1; } catch (e) {}
  const apply = () => { root$.style.setProperty('--scale', scale); try { localStorage.setItem('guideScale', scale); } catch (e) {} };
  document.getElementById('smaller').onclick = () => { scale = Math.max(.8, +(scale - .1).toFixed(2)); apply(); };
  document.getElementById('larger').onclick = () => { scale = Math.min(1.6, +(scale + .1).toFixed(2)); apply(); };
  apply();
})();
