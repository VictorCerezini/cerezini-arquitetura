/* Conteúdo da proposta de Instagram: perfil, destaques e os 12 primeiros posts.
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
    { id: 'projetos', label: 'Projetos', text: 'Fotos e vídeos curtos de cada projeto: Nova Cintra, Térrea e Boiçucanga.' },
    { id: 'servicos', label: 'Serviços', text: 'O que o escritório faz. Dá para reaproveitar os slides do post 11.' },
    { id: 'laudos', label: 'Laudos', text: 'Vistoria, acessibilidade e AVCB, com as dúvidas mais comuns.' },
    { id: 'obras', label: 'Obras', text: 'Acompanhamento e bastidores de obra, visitas técnicas.' },
    { id: 'sobre', label: 'Sobre', text: 'Quem é o arquiteto, formação e registro no CAU.' },
    { id: 'contato', label: 'Contato', text: 'WhatsApp, e-mail e região de atendimento.' }
  ],

  pillars: [
    { name: 'Projetos', share: 40, text: 'Carrosséis e fotos de cada projeto, um ângulo por post: fachada, lazer, detalhes, planta.' },
    { name: 'Abordagem e dicas', share: 25, text: 'Luz, ventilação, integração e planejamento. É o conteúdo que as pessoas salvam e compartilham.' },
    { name: 'Serviços e laudos', share: 20, text: 'Laudos, AVCB, regularização e gestão de obra explicados de forma simples.' },
    { name: 'Bastidores e o arquiteto', share: 15, text: 'Pranchas, visitas de obra, rotina do escritório. Aproxima o cliente de quem assina o projeto.' }
  ],

  posts: [
    {
      n: 1, title: 'Apresentação', pillar: 'Bastidores e o arquiteto', slides: 3,
      alt: 'Logotipo Cerezini Arquitetura sobre fundo terracota, com a frase Projetos, Laudos e Obras',
      caption: 'Prazer, Cerezini Arquitetura.\n\nSomos um escritório de arquitetura e urbanismo em Santos/SP, conduzido pelo arquiteto Antônio Fernando Fadel Cerezini (CAU A7328-8).\n\nDesenvolvemos projetos residenciais e comerciais sob medida, unindo excelência técnica, qualidade estética e viabilidade construtiva. Também cuidamos de laudos técnicos, regularização e acompanhamento de obras.\n\nPor aqui você vai ver nossos projetos, a forma como pensamos cada espaço e os bastidores do trabalho.\n\n📍 Santos/SP e região\nOrçamentos pelo WhatsApp, no link da bio.',
      tags: ['arquitetura', 'arquiteturaeurbanismo', 'arquitetosantos', 'santossp', 'baixadasantista']
    },
    {
      n: 2, title: 'Residência Boiçucanga', pillar: 'Projetos', slides: 2,
      alt: 'Casa de fachada terracota com estrutura de madeira aparente e telhados inclinados, cercada pela Mata Atlântica',
      caption: 'Residência Boiçucanga · São Sebastião, Litoral Norte de SP\n\nUma casa que assume a linguagem do lugar: vigas e pilares em madeira maçaranduba, alvenaria, coberturas inclinadas e beirais amplos que protegem as varandas.\n\nConcebida inicialmente como duas casas geminadas, foi reformulada em uma única residência, com estar e jantar amplos integrados à cozinha.\n\nDeslize para ver a varanda →',
      tags: ['casadepraia', 'litoralnorte', 'saosebastiao', 'arquiteturaresidencial', 'madeira']
    },
    {
      n: 3, title: 'O arquiteto', pillar: 'Bastidores e o arquiteto', slides: 2,
      alt: 'Retrato em preto e branco do arquiteto Antônio Fernando Fadel Cerezini',
      caption: 'Quem assina os projetos.\n\nAntônio Fernando Fadel Cerezini é arquiteto e urbanista (CAU A7328-8), com sólida experiência em projetos residenciais e comerciais.\n\nO trabalho parte de quatro cuidados essenciais: circulação, ventilação, funcionalidade e conforto. O foco está na excelência técnica, na qualidade estética e na viabilidade construtiva, para que cada projeto atenda às necessidades de quem vai viver ou trabalhar ali.',
      tags: ['arquiteto', 'arquitetoeurbanista', 'arquitetosantos', 'santossp', 'arquitetura']
    },
    {
      n: 4, title: 'Térrea: fachada', pillar: 'Projetos', slides: 2,
      alt: 'Fachada contemporânea com platibandas, revestimento em madeira e palmeiras',
      caption: 'Residência Térrea Contemporânea\n\nPlatibandas altas escondem a cobertura e organizam a fachada em linhas horizontais e volumes puros. O revestimento em madeira aquece o conjunto e marca a entrada.\n\nUma linguagem limpa, que não depende de excessos para ter presença.\n\nImagens do projeto.',
      tags: ['fachada', 'casaterrea', 'arquiteturacontemporanea', 'projetoresidencial', 'arquitetura']
    },
    {
      n: 5, title: 'Cinco princípios', pillar: 'Abordagem e dicas', slides: 6,
      alt: 'Título Cinco princípios que guiam cada projeto, sobre fundo escuro',
      caption: 'Cinco princípios que guiam cada projeto do escritório:\n\n01 Integração: ambientes sociais conectados à cozinha, ao lazer e ao jardim.\n02 Luz natural: aberturas e orientação solar estudadas para iluminar e reduzir a luz artificial durante o dia.\n03 Ventilação e conforto: o conforto térmico como ponto de partida, e não como ajuste final.\n04 Linguagem limpa: proporção, materialidade e volumes puros.\n05 Viabilidade construtiva: soluções pensadas para sair do papel com qualidade e segurança.\n\nSalve este post para consultar quando for planejar a sua casa.',
      tags: ['dicasdearquitetura', 'iluminacaonatural', 'ventilacaonatural', 'confortotermico', 'arquitetura']
    },
    {
      n: 6, title: 'Boiçucanga: área gourmet', pillar: 'Projetos', slides: 1,
      alt: 'Área gourmet com churrasqueira de tijolos, forno de pizza e mesa de madeira',
      caption: 'Área gourmet · Residência Boiçucanga\n\nChurrasqueira e forno de pizza em tijolos, mesa de madeira e iluminação quente: um espaço feito para receber, no ritmo do Litoral Norte.\n\nA área de lazer da casa reúne ainda piscina e casa do caseiro.',
      tags: ['areagourmet', 'espacogourmet', 'casadepraia', 'litoralnorte', 'arquitetura']
    },
    {
      n: 7, title: 'Do papel à obra', pillar: 'Bastidores e o arquiteto', slides: 2,
      alt: 'Prancha do projeto arquitetônico com plantas, cortes e elevações da Residência Boiçucanga',
      caption: 'Do papel à obra.\n\nAntes do primeiro tijolo, cada casa passa por plantas, cortes e elevações. É nessa etapa que se resolvem a implantação no terreno, a circulação, a ventilação e a viabilidade construtiva, evitando surpresas durante a obra.\n\nNa imagem, a prancha do projeto da Residência Boiçucanga, em São Sebastião.',
      tags: ['projetoarquitetonico', 'plantabaixa', 'desenhotecnico', 'arquitetura', 'obra']
    },
    {
      n: 8, title: 'Térrea: lazer integrado', pillar: 'Projetos', slides: 2,
      alt: 'Área gourmet coberta conectada à piscina',
      caption: 'Lazer integrado · Residência Térrea Contemporânea\n\nSala, cozinha e espaço gourmet formam um conjunto contínuo, aberto à piscina. A casa valoriza a vida cotidiana pela integração entre os ambientes sociais e a área de lazer.\n\nO pé-direito elevado na sala amplia o espaço, e as suítes foram implantadas para favorecer a incidência solar.\n\nImagens do projeto.',
      tags: ['areadelazer', 'piscina', 'espacogourmet', 'casaterrea', 'projetoresidencial']
    },
    {
      n: 9, title: 'Boiçucanga: madeira', pillar: 'Projetos', slides: 1,
      alt: 'Sacada em madeira apoiada em pilares, sobre a varanda térrea',
      caption: 'Estrutura aparente em madeira maçaranduba.\n\nNa Residência Boiçucanga, pilares e vigas de madeira ficam à mostra: sustentam a sacada, desenham a fachada e conversam com a Mata Atlântica ao redor.',
      tags: ['estruturademadeira', 'madeira', 'casadepraia', 'litoralnorte', 'arquiteturaresidencial']
    },
    {
      n: 10, title: 'Térrea: à noite', pillar: 'Projetos', slides: 1,
      alt: 'Residência térrea iluminada à noite, com piscina e palmeiras',
      caption: 'Quando a noite cai, a casa muda de personalidade.\n\nA iluminação valoriza os volumes, a piscina e o paisagismo, e transforma a área externa em uma extensão da sala.\n\nResidência Térrea Contemporânea · imagens do projeto.',
      tags: ['iluminacao', 'paisagismo', 'arquiteturacontemporanea', 'casaterrea', 'piscina']
    },
    {
      n: 11, title: 'Serviços', pillar: 'Serviços e laudos', slides: 5,
      alt: 'Título Do projeto à obra, com responsabilidade técnica, sobre fundo terracota',
      caption: 'Do projeto à obra, com responsabilidade técnica. Conheça os serviços do escritório:\n\n• Projetos residenciais: residências novas, reformas de casas e apartamentos e móveis planejados.\n• Projetos comerciais: bares e restaurantes, salões de beleza, consultórios e centros médicos, oficinas mecânicas.\n• Laudos e regularização: vistoria, acessibilidade e assessoria para AVCB.\n• Gestão de obras: responsabilidade técnica (RRT), acompanhamento e fiscalização.\n\nAtendemos Santos e região. Fale com a gente pelo WhatsApp, no link da bio.',
      tags: ['arquitetosantos', 'laudotecnico', 'avcb', 'reforma', 'projetocomercial']
    },
    {
      n: 12, title: 'Residência Sustentável', pillar: 'Projetos', slides: 5,
      alt: 'Fachada com grandes panos de vidro iluminados da Residência Sustentável, no Morro da Nova Cintra',
      caption: 'Residência Sustentável · Morro da Nova Cintra, Santos/SP\n\nConcebida para valorizar a luz, as vistas e os recursos naturais do terreno. A fachada envidraçada e curva cria continuidade visual entre a sala de pé-direito duplo e o jardim.\n\nOs pavimentos acompanham a topografia: dormitórios e estar íntimo em cima, garagem e casa do caseiro no subsolo.\n\nSoluções do projeto: captação de água da chuva, energia solar, iluminação natural, eficiência energética, integração e ventilação.\n\nDeslize para ver a planta humanizada e a elevação →\nImagens do projeto.',
      tags: ['arquiteturasustentavel', 'casasustentavel', 'santossp', 'arquitetosantos', 'energiasolar']
    }
  ]
};
