// Terra Firme — interações da landing page
(function () {
  // Cabeçalho muda de fundo ao rolar
  var header = document.querySelector('.site-header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 12);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Animações de entrada
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Ano atual no rodapé
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // Formulário: monta a mensagem e abre o WhatsApp
  var form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var nome = (d.get('nome') || '').toString().trim();
      var tel = (d.get('telefone') || '').toString().trim();
      if (!nome || !tel) {
        form.querySelector(!nome ? '[name=nome]' : '[name=telefone]').focus();
        return;
      }
      var texto = 'Olá! Meu nome é ' + nome + '.\n' +
        'Tenho interesse em: ' + d.get('tipo') + '.\n' +
        (d.get('mensagem') ? d.get('mensagem') + '\n' : '') +
        'Meu contato: ' + tel;
      window.open('https://wa.me/5513997605033?text=' + encodeURIComponent(texto), '_blank', 'noopener');
    });
  }
})();
