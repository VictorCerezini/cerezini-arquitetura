# Cerezini Arquitetura

Landing page do arquiteto Antônio Fernando Fadel Cerezini (CAU A7328-8). Ela está publicada no GitHub Pages.

Site estático: `index.html`, `css/styles.css`, `js/main.js` e as fotos em `img/`. Não precisa de build. Para ver localmente, é só abrir o `index.html` no navegador.

Sempre que mudar `css/styles.css` ou `js/main.js`, aumente o número `?v=` nos links do `index.html`. Sem isso, quem já abriu o site pode continuar vendo o CSS antigo, guardado no cache do navegador, junto com o HTML novo.

## Proposta de Instagram

A pasta `instagram/` tem a prévia do perfil (publicada em `/instagram/`): nome de usuário, bio, destaques e os 12 primeiros posts, cada um com uma imagem de projeto e uma legenda curta. As imagens dos posts, as capas de destaques e a foto de perfil estão em `instagram/posts/`, `instagram/destaques/` e `instagram/perfil/`. O kit para baixar tudo de uma vez é `instagram/kit/cerezini-instagram-kit.zip`. Os textos ficam em `instagram/js/data.js`.
