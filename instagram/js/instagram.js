(function () {
  'use strict';

  var D = window.IG;
  var P = D.profile;
  var pad = function (n) { return n < 10 ? '0' + n : String(n); };
  var src = function (post) { return 'posts/' + post.img; };
  var isLand = function (post) { return post.ratio !== '4:5'; };
  var tagsText = function (post) { return post.tags.map(function (t) { return '#' + t; }).join(' '); };
  var fullCaption = function (post) { return post.caption + '\n\n' + tagsText(post); };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  };

  /* ---------- Dados do perfil ---------- */
  document.querySelectorAll('[data-bind]').forEach(function (el) { el.textContent = P[el.dataset.bind]; });
  document.querySelectorAll('[data-bind-src]').forEach(function (el) { el.src = P[el.dataset.bindSrc]; });
  document.querySelectorAll('[data-bind-href]').forEach(function (el) { el.href = P[el.dataset.bindHref]; });

  document.getElementById('bio-count').textContent = Array.from(P.bio).length + ' de 150 caracteres';

  document.getElementById('handles').innerHTML = P.handles.map(function (h) {
    return '<li><strong>@' + esc(h.h) + '</strong><span>' + esc(h.note) + '</span></li>';
  }).join('');

  /* ---------- Destaques ---------- */
  var cover = function (h) { return 'destaques/destaque-' + h.id + '.jpg'; };
  document.getElementById('ig-highlights').innerHTML = D.highlights.map(function (h) {
    return '<li><div class="ring"><img src="' + cover(h) + '" alt="" loading="lazy"></div>' + esc(h.label) + '</li>';
  }).join('');

  document.getElementById('hl-list').innerHTML = D.highlights.map(function (h) {
    return '<li><img src="' + cover(h) + '" alt="Capa do destaque ' + esc(h.label) + '" loading="lazy">' +
      '<div><strong>' + esc(h.label) + '</strong><span>' + esc(h.text) + '</span>' +
      '<a href="' + cover(h) + '" download>baixar capa</a></div></li>';
  }).join('');

  /* ---------- Grade (mais recente primeiro, como no Instagram) ---------- */
  var newestFirst = D.posts.slice().sort(function (a, b) { return b.n - a.n; });
  document.getElementById('ig-count').textContent = D.posts.length;
  document.getElementById('ig-grid').innerHTML = newestFirst.map(function (p) {
    return '<button type="button" class="ig-tile" data-post="' + p.n + '" aria-label="Post ' + p.n + ': ' + esc(p.title) + '">' +
      '<img src="' + src(p) + '" alt="' + esc(p.alt) + '" loading="lazy"></button>';
  }).join('');

  /* ---------- Lista de posts ---------- */
  document.getElementById('post-list').innerHTML = D.posts.map(function (p) {
    var size = isLand(p) ? 'Horizontal · 1080 × 566' : 'Vertical · 1080 × 1350';
    return '<li class="post" id="post-' + p.n + '">' +
      '<span class="post-n">' + pad(p.n) + '</span>' +
      '<div class="post-media"><button type="button" class="post-img' + (isLand(p) ? ' land' : '') + '" data-post="' + p.n + '" aria-label="Ampliar o post ' + p.n + '">' +
      '<img src="' + src(p) + '" alt="' + esc(p.alt) + '" loading="lazy"></button>' +
      '<p class="post-meta"><span>' + size + '</span><a href="' + src(p) + '" download>baixar imagem</a></p></div>' +
      '<div class="post-text"><h3>' + esc(p.title) + '</h3>' +
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
  function fallback(text) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) { /* sem suporte */ }
    document.body.removeChild(ta);
  }
  function copy(text, msg) {
    var done = function () { toast(msg); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(text); done(); });
    } else { fallback(text); done(); }
  }
  var byN = function (n) { return D.posts.filter(function (p) { return p.n === Number(n); })[0]; };

  document.addEventListener('click', function (e) {
    var c = e.target.closest('[data-copy-post]');
    if (c) { copy(fullCaption(byN(c.dataset.copyPost)), 'Legenda do post ' + c.dataset.copyPost + ' copiada'); return; }
    var b = e.target.closest('[data-copy="bio"]');
    if (b) { copy(P.bio, 'Bio copiada'); return; }
    var t = e.target.closest('[data-post]');
    if (t) { openViewer(byN(t.dataset.post), t); }
  });

  /* ---------- Visualizador ---------- */
  var viewer = document.getElementById('viewer');
  var media = viewer.querySelector('.viewer-media');
  var vimg = document.getElementById('viewer-img');
  var current = null, opener = null;

  function openViewer(post, from) {
    current = post; opener = from || null;
    vimg.src = src(post);
    vimg.alt = post.alt;
    media.classList.toggle('land', isLand(post));
    document.getElementById('viewer-title').textContent = post.title;
    document.getElementById('viewer-num').textContent = 'Post ' + post.n + ' de ' + D.posts.length;
    document.getElementById('viewer-caption').innerHTML =
      '<b>' + esc(P.handle) + '</b>' + esc(post.caption) + '<span class="tags">' + esc(tagsText(post)) + '</span>';
    viewer.hidden = false;
    document.body.style.overflow = 'hidden';
    viewer.querySelector('.viewer-close').focus();
  }
  function closeViewer() {
    viewer.hidden = true;
    document.body.style.overflow = '';
    if (opener) opener.focus();
  }
  function step(d) {
    if (!current) return;
    var next = byN(current.n + d);
    if (next) openViewer(next, opener);
  }

  document.getElementById('viewer-copy').addEventListener('click', function () {
    if (current) copy(fullCaption(current), 'Legenda do post ' + current.n + ' copiada');
  });
  viewer.addEventListener('click', function (e) { if (e.target.closest('[data-close]')) closeViewer(); });
  document.addEventListener('keydown', function (e) {
    if (viewer.hidden) return;
    if (e.key === 'Escape') closeViewer();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
})();
