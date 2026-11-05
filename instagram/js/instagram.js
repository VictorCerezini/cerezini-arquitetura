(function () {
  'use strict';

  var D = window.IG;
  var P = D.profile;
  var pad = function (n) { return n < 10 ? '0' + n : String(n); };
  var slideSrc = function (post, i) { return 'posts/post-' + pad(post.n) + '-' + (i + 1) + '.jpg'; };
  var tagsText = function (post) { return post.tags.map(function (t) { return '#' + t; }).join(' '); };
  var fullCaption = function (post) { return post.caption + '\n\n' + tagsText(post); };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  };

  /* ---------- Dados do perfil ---------- */
  document.querySelectorAll('[data-bind]').forEach(function (el) { el.textContent = P[el.dataset.bind]; });
  document.querySelectorAll('[data-bind-src]').forEach(function (el) { el.src = P[el.dataset.bindSrc]; });
  document.querySelectorAll('[data-bind-href]').forEach(function (el) { el.href = P[el.dataset.bindHref]; });

  var bioLen = Array.from(P.bio).length;
  document.getElementById('bio-count').textContent = bioLen + ' de 150 caracteres';

  document.getElementById('handles').innerHTML = P.handles.map(function (h) {
    return '<li><strong>@' + esc(h.h) + '</strong><span>' + esc(h.note) + '</span></li>';
  }).join('');

  /* ---------- Destaques ---------- */
  document.getElementById('ig-highlights').innerHTML = D.highlights.map(function (h) {
    return '<li><div class="ring"><img src="destaques/destaque-' + h.id + '.png" alt="" loading="lazy"></div>' + esc(h.label) + '</li>';
  }).join('');

  document.getElementById('hl-list').innerHTML = D.highlights.map(function (h) {
    return '<li><img src="destaques/destaque-' + h.id + '.png" alt="Capa do destaque ' + esc(h.label) + '" loading="lazy">' +
      '<div><strong>' + esc(h.label) + '</strong><span>' + esc(h.text) + '</span>' +
      '<a href="destaques/destaque-' + h.id + '.png" download>baixar capa</a></div></li>';
  }).join('');

  /* ---------- Linha editorial ---------- */
  document.getElementById('pillars').innerHTML = D.pillars.map(function (p) {
    return '<li><strong>' + esc(p.name) + '</strong><em>' + p.share + '%</em>' +
      '<span class="bar"><i style="width:' + p.share + '%"></i></span><p>' + esc(p.text) + '</p></li>';
  }).join('');

  /* ---------- Grade (mais recente primeiro, como no Instagram) ---------- */
  var multiIcon = '<svg class="multi" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h11a3 3 0 0 1 3 3v11a1 1 0 0 1-1 1h-1V6a1 1 0 0 0-1-1H6V4a1 1 0 0 1 1-1z"/><rect x="3" y="7" width="14" height="14" rx="2.5"/></svg>';
  var newestFirst = D.posts.slice().sort(function (a, b) { return b.n - a.n; });
  document.getElementById('ig-count').textContent = D.posts.length;
  document.getElementById('ig-grid').innerHTML = newestFirst.map(function (p) {
    return '<button type="button" class="ig-tile" data-post="' + p.n + '" aria-label="Post ' + p.n + ': ' + esc(p.title) + '">' +
      '<img src="' + slideSrc(p, 0) + '" alt="' + esc(p.alt) + '" loading="lazy" width="1080" height="1350">' +
      (p.slides > 1 ? multiIcon : '') + '</button>';
  }).join('');

  /* ---------- Lista de posts ---------- */
  document.getElementById('post-list').innerHTML = D.posts.map(function (p) {
    var thumbs = '';
    for (var i = 0; i < p.slides; i++) {
      thumbs += '<button type="button" data-post="' + p.n + '" data-slide="' + i + '" aria-label="Ver imagem ' + (i + 1) + ' do post ' + p.n + '">' +
        '<img src="' + slideSrc(p, i) + '" alt="' + (i === 0 ? esc(p.alt) : '') + '" loading="lazy" width="1080" height="1350"></button>';
    }
    var files = [];
    for (var j = 0; j < p.slides; j++) files.push('<a href="' + slideSrc(p, j) + '" download>' + (p.slides > 1 ? 'imagem ' + (j + 1) : 'baixar imagem') + '</a>');
    return '<li class="post" id="post-' + p.n + '">' +
      '<span class="post-n">' + pad(p.n) + '</span>' +
      '<div class="post-media"><div class="post-strip">' + thumbs + '</div>' +
      '<p class="post-meta"><span>' + (p.slides > 1 ? 'Carrossel · ' + p.slides + ' imagens' : 'Imagem única') + '</span><span>' + files.join(' · ') + '</span></p></div>' +
      '<div class="post-text"><h3>' + esc(p.title) + '</h3><span class="post-pillar">' + esc(p.pillar) + '</span>' +
      '<p class="post-caption">' + esc(p.caption) + '</p><p class="post-tags">' + esc(tagsText(p)) + '</p>' +
      '<button type="button" class="link-btn" data-copy-post="' + p.n + '">Copiar legenda</button></div></li>';
  }).join('');

  /* ---------- Copiar ---------- */
  var toastEl = document.getElementById('toast');
  var toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  }
  function copy(text, msg) {
    var done = function () { toast(msg); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(text); done(); });
    } else { fallback(text); done(); }
  }
  function fallback(text) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) { /* sem suporte */ }
    document.body.removeChild(ta);
  }
  var byN = function (n) { return D.posts.filter(function (p) { return p.n === Number(n); })[0]; };

  document.addEventListener('click', function (e) {
    var c = e.target.closest('[data-copy-post]');
    if (c) { copy(fullCaption(byN(c.dataset.copyPost)), 'Legenda do post ' + c.dataset.copyPost + ' copiada'); return; }
    var b = e.target.closest('[data-copy="bio"]');
    if (b) { copy(P.bio, 'Bio copiada'); return; }
    var t = e.target.closest('[data-post]');
    if (t) { openViewer(byN(t.dataset.post), Number(t.dataset.slide || 0), t); }
  });

  /* ---------- Visualizador ---------- */
  var viewer = document.getElementById('viewer');
  var track = document.getElementById('viewer-track');
  var dots = document.getElementById('viewer-dots');
  var prev = document.getElementById('viewer-prev');
  var next = document.getElementById('viewer-next');
  var current = null, idx = 0, opener = null;

  function openViewer(post, start, from) {
    current = post; idx = start || 0; opener = from || null;
    var imgs = '', d = '';
    for (var i = 0; i < post.slides; i++) {
      imgs += '<img src="' + slideSrc(post, i) + '" alt="' + (i === 0 ? esc(post.alt) : 'Imagem ' + (i + 1) + ' do post') + '">';
      d += '<i></i>';
    }
    track.innerHTML = imgs;
    dots.innerHTML = post.slides > 1 ? d : '';
    document.getElementById('viewer-title').textContent = post.title;
    document.getElementById('viewer-num').textContent = 'Post ' + post.n + ' de ' + D.posts.length;
    document.getElementById('viewer-caption').innerHTML =
      '<b>' + esc(P.handle) + '</b>' + esc(post.caption) + '<span class="tags">' + esc(tagsText(post)) + '</span>';
    viewer.hidden = false;
    document.body.style.overflow = 'hidden';
    go(idx);
    viewer.querySelector('.viewer-close').focus();
  }
  function closeViewer() {
    viewer.hidden = true;
    document.body.style.overflow = '';
    if (opener) opener.focus();
  }
  function go(i) {
    if (!current) return;
    idx = Math.max(0, Math.min(current.slides - 1, i));
    track.style.transform = 'translateX(' + (-100 * idx) + '%)';
    prev.hidden = idx === 0;
    next.hidden = idx >= current.slides - 1;
    Array.prototype.forEach.call(dots.children, function (el, k) { el.classList.toggle('on', k === idx); });
  }

  prev.addEventListener('click', function () { go(idx - 1); });
  next.addEventListener('click', function () { go(idx + 1); });
  document.getElementById('viewer-copy').addEventListener('click', function () {
    if (current) copy(fullCaption(current), 'Legenda do post ' + current.n + ' copiada');
  });
  viewer.addEventListener('click', function (e) { if (e.target.closest('[data-close]')) closeViewer(); });
  document.addEventListener('keydown', function (e) {
    if (viewer.hidden) return;
    if (e.key === 'Escape') closeViewer();
    if (e.key === 'ArrowLeft') go(idx - 1);
    if (e.key === 'ArrowRight') go(idx + 1);
  });

  // deslizar no celular
  var x0 = null;
  track.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1));
    x0 = null;
  });
})();
