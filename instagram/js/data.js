/* Conteúdo da proposta de Instagram: perfil, destaques e os 12 primeiros posts.
   Cada post é uma imagem de projeto com uma legenda curta.
   Os posts estão na ordem de publicação (1 = primeiro a ser publicado). */
window.IG = {
  profile: {
    handle: 'cerezini.arquitetura',
    handles: [
      { h: 'cerezini.arquitetura', note: 'Recomendado. É o nome da marca, igual ao site.' },
      { h: 'cereziniarquitetura', note: 'Mesma ideia, sem o ponto.' },
      { h: 'cerezini.arq', note: 'Mais curto, bom para cartão e placa de obra.' },
      { h: 'arq.cerezini', note: 'Alternativa caso as anteriores estejam ocupadas.' }
    ],
    name: 'Cerezini Arquitetura',
    category: 'Arquiteto(a)',
    bio: 'Arquitetura que integra, ilumina e acolhe.\nProjetos · Laudos · Obras\nArq. Antônio Fernando F. Cerezini · CAU A7328-8\n📍 Santos/SP e região',
    link: 'victorcerezini.github.io/cerezini-arquitetura',
    linkUrl: 'https://victorcerezini.github.io/cerezini-arquitetura/',
    whatsapp: 'https://wa.me/5513997605033',
    avatar: 'perfil/perfil.png'
  },

  highlights: [
    { id: 'nova-cintra', label: 'Nova Cintra', text: 'Mais imagens e vídeos curtos da Residência Sustentável.' },
    { id: 'terrea', label: 'Térrea', text: 'Mais imagens da Residência Térrea Contemporânea.' },
    { id: 'boicucanga', label: 'Boiçucanga', text: 'Mais fotos da casa em São Sebastião.' },
    { id: 'sobre', label: 'Sobre', text: 'Quem é o arquiteto, os serviços e como pedir um orçamento.' }
  ],

  posts: [
    {
      n: 1, title: 'Boiçucanga · sacada', img: 'post-01.jpg', ratio: '4:5',
      alt: 'Sacada em madeira apoiada em pilares, sobre a varanda térrea de uma casa terracota',
      caption: 'Residência Boiçucanga · São Sebastião, SP\nPilares e vigas em madeira maçaranduba ficam aparentes e sustentam a sacada sobre a varanda térrea.',
      tags: ['arquitetura', 'casadepraia', 'litoralnorte', 'estruturademadeira', 'saosebastiao']
    },
    {
      n: 2, title: 'Térrea · fachada', img: 'post-02.jpg', ratio: '4:5',
      alt: 'Fachada contemporânea com platibandas, revestimento em madeira e palmeiras',
      caption: 'Residência Térrea Contemporânea\nPlatibandas altas escondem a cobertura e deixam a fachada em linhas horizontais. A madeira marca a entrada.\nImagem do projeto.',
      tags: ['arquitetura', 'fachada', 'casaterrea', 'arquiteturacontemporanea', 'projetoresidencial']
    },
    {
      n: 3, title: 'Nova Cintra · elevação', img: 'post-03.jpg', ratio: '1.91:1',
      alt: 'Elevação colorida da residência com amplo fechamento em vidro',
      caption: 'Residência Sustentável · Morro da Nova Cintra, Santos\nNa elevação, o amplo fechamento em vidro que leva luz natural e vista para dentro da casa.\nDesenho do projeto.',
      tags: ['arquitetura', 'projetoarquitetonico', 'arquiteturasustentavel', 'santossp', 'arquitetosantos']
    },
    {
      n: 4, title: 'Boiçucanga · varanda', img: 'post-04.jpg', ratio: '1.91:1',
      alt: 'Varanda coberta com pilares de madeira, iluminação quente e jardim tropical',
      caption: 'Residência Boiçucanga\nBeirais amplos protegem a varanda, com pilares de madeira, luz quente e jardim tropical em volta.',
      tags: ['varanda', 'casadepraia', 'litoralnorte', 'arquiteturaresidencial', 'arquitetura']
    },
    {
      n: 5, title: 'Térrea · integração', img: 'post-05.jpg', ratio: '1.91:1',
      alt: 'Sala, cozinha e jantar integrados, abertos para a piscina e o jardim',
      caption: 'Residência Térrea Contemporânea\nSala, cozinha e jantar integrados, abertos para a piscina e o jardim. O pé-direito elevado amplia o espaço.\nImagem do projeto.',
      tags: ['integracao', 'cozinhaintegrada', 'casaterrea', 'projetoresidencial', 'arquitetura']
    },
    {
      n: 6, title: 'Nova Cintra · vista', img: 'post-06.jpg', ratio: '1.91:1',
      alt: 'Residência com fachada curva de vidro ao entardecer, no alto de um morro com vista para Santos',
      caption: 'Residência Sustentável · Morro da Nova Cintra, Santos\nNo alto do morro, a fachada curva de vidro se abre para a vista de Santos.\nImagem do projeto.',
      tags: ['arquiteturasustentavel', 'casasustentavel', 'santossp', 'arquitetosantos', 'arquiteturacontemporanea']
    },
    {
      n: 7, title: 'Boiçucanga · área gourmet', img: 'post-07.jpg', ratio: '4:5',
      alt: 'Área gourmet com churrasqueira de tijolos, forno de pizza e mesa de madeira',
      caption: 'Área gourmet · Residência Boiçucanga\nChurrasqueira e forno de pizza em tijolos, mesa de madeira e luz quente para receber.',
      tags: ['areagourmet', 'espacogourmet', 'casadepraia', 'litoralnorte', 'arquitetura']
    },
    {
      n: 8, title: 'Térrea · lazer', img: 'post-08.jpg', ratio: '4:5',
      alt: 'Área gourmet coberta conectada à piscina',
      caption: 'Residência Térrea Contemporânea\nA área gourmet coberta se liga direto à piscina, e a casa toda se abre para o lazer.\nImagem do projeto.',
      tags: ['areadelazer', 'piscina', 'espacogourmet', 'casaterrea', 'arquitetura']
    },
    {
      n: 9, title: 'Nova Cintra · planta humanizada', img: 'post-09.jpg', ratio: '4:5',
      alt: 'Perspectiva 3D humanizada do pavimento térreo, com jardim curvo e caminhos de pedra',
      caption: 'Residência Sustentável · Nova Cintra, Santos\nA planta humanizada do térreo mostra o jardim curvo, os caminhos de pedra e os ambientes sociais.\nImagem do projeto.',
      tags: ['plantahumanizada', 'projetoarquitetonico', 'paisagismo', 'santossp', 'arquitetura']
    },
    {
      n: 10, title: 'Boiçucanga · fachada', img: 'post-10.jpg', ratio: '4:5',
      alt: 'Casa de fachada terracota com estrutura de madeira aparente e telhados inclinados',
      caption: 'Residência Boiçucanga · São Sebastião, Litoral Norte de SP\nFachada terracota, estrutura de madeira aparente e telhados inclinados, cercada pela Mata Atlântica.',
      tags: ['casadepraia', 'litoralnorte', 'saosebastiao', 'boicucanga', 'arquiteturaresidencial']
    },
    {
      n: 11, title: 'Térrea · à noite', img: 'post-11.jpg', ratio: '4:5',
      alt: 'Residência térrea iluminada à noite, com piscina e palmeiras',
      caption: 'Residência Térrea Contemporânea\nÀ noite, a iluminação destaca os volumes, a piscina e as palmeiras do jardim.\nImagem do projeto.',
      tags: ['iluminacao', 'paisagismo', 'piscina', 'casaterrea', 'arquiteturacontemporanea']
    },
    {
      n: 12, title: 'Nova Cintra · fachada', img: 'post-12.jpg', ratio: '4:5',
      alt: 'Fachada com grandes panos de vidro iluminados da Residência Sustentável',
      caption: 'Residência Sustentável · Morro da Nova Cintra, Santos\nGrandes panos de vidro levam luz natural à sala de pé-direito duplo. O projeto prevê captação de água da chuva e energia solar.\nImagem do projeto.',
      tags: ['arquiteturasustentavel', 'casasustentavel', 'energiasolar', 'santossp', 'arquitetosantos']
    }
  ]
};
