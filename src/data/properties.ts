export type Property = {
  id: number;
  title: string;
  location: string;
  subtitle?: string;
  price: string;
  area: string;
  bedrooms: string;
  suites: string;
  garage: string;
  cardVideo?: string;
  heroMedia?: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
  images?: string[];
  image: string;
  pdf?: string;
  summary?: string;
  details?: {
    address?: string;
    description?: string;
    typologies?: string;
    beachDistance?: string;
    promotionalUnits?: { unit: string; area: string; price: string }[];
    seaAndLagoonViews?: { unit: string; area: string; price: string }[];
    corcovadoView?: { unit: string; area: string; price: string }[];
    frontalPrudente?: { unit: string; area: string; price: string }[];
    condominiumEstimate?: string;
    valuesValid?: string;
    developer?: string;
    characteristics?: string[];
    amenities?: string[];
    contactMessage?: string;
    highlights?: string[];
  };
};

const basePath = import.meta.env.BASE_URL;

export const properties: Property[] = [
  {
    id: 1,
    title: 'Symphony Flamengo',
    location: 'Flamengo',
    price: 'A partir de R$ 890.000,00',
    area: '40 - 190 m²',
    bedrooms: '1-3 quartos',
    suites: '1-3',
    garage: 'conforme unidade',
    cardVideo: 'https://youtube.com/shorts/MqjWjUuK5cw',
    heroMedia: {
      type: 'video',
      src: 'https://www.youtube.com/watch?v=Qj24v8MEFXc&t=281s',
      alt: 'Vídeo Symphony Flamengo',
    },
    image: `${basePath}images/symphony-flamengo.jpg`,
    summary:
      'Lançamento no antigo Colégio Bennett com localização histórica no Flamengo, alto padrão e forte potencial de valorização.',
    details: {
      address: 'Rua Marquês de Abrantes, 55 – Flamengo',
      description:
        'O Symphony Flamengo ocupa um dos últimos grandes terrenos do bairro, unindo sofisticação, história e potencial de valorização imobiliária em um produto raro na Zona Sul.',
      condominiumEstimate: 'Lazer completo, spa, coworking, academia, piscina de 25m, playground e infraestrutura de alto padrão.',
      valuesValid: 'Esta é uma oferta de alto padrão com informações de projeto e valorização.',
    },
  },
  {
    id: 2,
    title: 'Connect Square Centro',
    location: 'Centro',
    price: 'A partir de R$ 590.000,00',
    area: '24 - 60 m²',
    bedrooms: 'Studios, 1 e 2 quartos',
    suites: '1-2',
    garage: 'sob consulta',
    cardVideo: 'https://youtu.be/Ns989Fu-1ow',
    heroMedia: {
      type: 'video',
      src: 'https://youtu.be/Ns989Fu-1ow',
      alt: 'Vídeo Connect Square',
    },
    images: [
      `${basePath}images/id02/connect-00.jpg`,
      `${basePath}images/id02/connect-01.jpg`,
      `${basePath}images/id02/connect-02.jpg`,
      `${basePath}images/id02/connect-03.jpg`,
      `${basePath}images/id02/connect-04.jpg`,
      `${basePath}images/id02/connect-05.jpg`,
      `${basePath}images/id02/connect-06.jpg`,
      `${basePath}images/id02/connect-07.jpg`,
      `${basePath}images/id02/connect-08.jpg`,
      `${basePath}images/id02/connect-09.jpg`,
      `${basePath}images/id02/connect-10.jpg`,
    ],
    image: `${basePath}images/id02/connect-00.jpg`,
    summary:
      'Residencial da Patrimar no coração do Centro do Rio, com rooftop, studios e apartamentos de 1 e 2 quartos. Um projeto pensado para quem valoriza mobilidade, praticidade e a conveniência de viver perto de tudo.',
    details: {
      address: 'Av. Graça Aranha, 429 / em frente ao Terminal Menezes Cortes',
      description:
        'O Connect Square é um residencial da Patrimar pensado para quem busca praticidade, mobilidade e uma nova experiência de morar no Centro do Rio. Localizado na Av. Graça Aranha, 429, em frente ao Terminal Menezes Cortes, o empreendimento coloca importantes conexões da cidade ao seu alcance.',
      amenities: [
        'Piscina com deck integrado',
        'Academia e espaço wellness',
        'Coworking e lounge gourmet',
        'Segurança 24 horas',
        'Localização premium no Centro do Rio',
      ],
      condominiumEstimate:
        'Lobby com controle de acesso, áreas de convivência modernas, serviços compartilhados e soluções sustentáveis.',
      valuesValid:
        'Localizado em região estratégica do Centro com incentivos do programa Reviver Centro e alto potencial de valorização.',
    },
  },
  {
    id: 3,
    title: 'IPA Studios Design',
    location: 'Ipanema',
    price: 'A partir de R$ 2.890.000,00',
    area: '39 - 111 m²',
    bedrooms: 'Studios e Gardens',
    suites: 'conforme unidade',
    garage: 'conforme unidade',
    cardVideo: 'https://youtube.com/shorts/P-WRqFbzqvU?feature=share',
    heroMedia: {
      type: 'video',
      src: 'https://youtu.be/hTsf03t1ZwM',
      alt: 'Vídeo IPA Studios Design',
    },
    images: [
      `${basePath}images/id03/ipa-studios-00.jpg`,
      ...Array.from({ length: 14 }, (_, index) =>
        `${basePath}images/id03/ipa-studios-${String(index + 1).padStart(2, '0')}.jpg`,
      ),
    ],
    image: `${basePath}images/id03/ipa-studios-00.jpg`,
    summary:
      'No Quadrilátero do Charme de Ipanema, o IPA Studios Design reúne studios e gardens, rooftop com piscina de borda infinita, lazer premium e uma estrutura completa para viver com conforto, praticidade e sofisticação.',
    details: {
      address: 'Rua Prudente de Morais, 1.117 – Ipanema',
      typologies: 'Studios e Gardens',
      description:
        'No Quadrilátero do Charme de Ipanema, o IPA Studios Design combina localização privilegiada, arquitetura contemporânea e uma estrutura completa para uma experiência de viver 360°.',
      amenities: [
        '🏡 Studios de 39 a 85 m²',
        '🌿 Gardens de 49 a 111 m²',
        '🌊 Rooftop com piscina e vista panorâmica',
        '✨ Mais de 1.500 m² de convivência, lazer e estrutura',
        '💼 Coworking, espaços de trabalho e áreas de convivência',
        '🏋️ Academia panorâmica',
        '🧖 Sauna, hidromassagem e espaços de relaxamento',
        '🔐 Tecnologia, segurança e serviços para facilitar o dia a dia',
      ],
      promotionalUnits: [
        { unit: '109', area: '104 m²', price: 'R$ 2.890.000' },
        { unit: '110', area: '81.49 m²', price: 'R$ 3.435.438' },
        { unit: '410', area: '110.95 m²', price: 'R$ 3.435.438' },
        { unit: '509', area: '81.49 m²', price: 'R$ 3.435.438' },
        { unit: '510', area: '81.49 m²', price: 'R$ 3.435.438' },
      ],
      seaAndLagoonViews: [
        { unit: '1001', area: '85 m²', price: 'R$ 3.958.759' },
        { unit: '1102', area: '77 m²', price: 'R$ 3.924.994' },
        { unit: '1808', area: '47 m²', price: 'R$ 3.322.088' },
        { unit: '1907', area: '45 m²', price: 'R$ 3.228.432' },
      ],
      corcovadoView: [
        { unit: '802', area: '82 m²', price: 'R$ 3.636.203' },
        { unit: '902', area: '82 m²', price: 'R$ 3.727.584' },
      ],
      frontalPrudente: [
        { unit: '201', area: '85 m²', price: 'R$ 3.485.248' },
        { unit: '301', area: '85 m²', price: 'R$ 3.532.607' },
      ],
    },
  },
  {
    id: 4,
    title: 'ICONYC',
    location: 'Botafogo',
    price: 'A partir de R$ 1.475.477,00',
    area: '72,03–191,53 m²*',
    bedrooms: '2 Quartos ou Cobertura Duplex com Suítes',
    suites: 'Variável',
    garage: '3 vagas',
    cardVideo: 'https://youtube.com/shorts/2w8U1FGbD28',
    heroMedia: {
      type: 'video',
      src: 'https://youtu.be/SE7cXWUtRCE',
      alt: 'Vídeo ICONYC',
    },
    image: `${basePath}images/id04/iconyc-00.jpg`,
    summary: 'O ICONYC By Yoo Botafogo combina arquitetura contemporânea, design internacional e sofisticação em um dos endereços mais desejados da Zona Sul. Um projeto da RJZ Cyrela em parceria com a YOO, com diferentes tipologias e uma estrutura completa de lazer e serviços.',
  },
  {
    id: 5,
    title: 'Arte Wood Residences',
    location: 'Barra Olímpica',
    price: 'A partir de R$ 400.000,00',
    area: '30 - 182 m²',
    bedrooms: 'Studios, 2 e 3 quartos',
    suites: 'variável',
    garage: '1 vaga coberта',
    cardVideo: 'https://youtube.com/shorts/zViyyQv6pbw',
    heroMedia: {
      type: 'video',
      src: 'https://youtu.be/OIDdjA6Tf_4',
      alt: 'Vídeo Arte Wood Residences',
    },
    image: `${basePath}images/id05/arte-wood-00.jpg`,
    summary: 'Lançamento da Construtora Calper na Barra Olímpica, o Arte Wood Residences integra conforto, segurança e sustentabilidade em um ambiente cercado por natureza e infraestrutura moderna.',
    details: {
      address: 'Entrada da Barra, Barra Olímpica, lado do Shopping Metropolitano',
      description: 'O Arte Wood Residences é um lançamento da Construtora Calper localizado dentro do bairro planejado Cidade Arte, na Barra Olímpica. O projeto integra conforto, segurança e sustentabilidade em um ambiente cercado por natureza e infraestrutura moderna. Ideal para quem busca qualidade de vida e conveniência, o empreendimento oferece diversas opções de moradia e lazer em uma das regiões mais promissoras do Rio de Janeiro.',
      highlights: [
        '5 condomínios + 67 lojas',
        '+250.000 m² de área total',
        '+91.500 m² de lazer',
        'Paisagismo, arte e ruas com design único',
        'Ônibus até 300m, Jardim Oceânico',
        'Entrega prevista: Fevereiro/2030',
        '650 unidades',
        '4 blocos com 4 elevadores por bloco',
        'Financiamento direto (sem análise de crédito)',
        'Estrutura convencional nas Townhouses e Lojas',
        'Alvenaria estrutural nos apartamentos, up gardens e coberturas',
        'Previsão condomínio: R$ 1.400/mês',
      ],
      condominiumEstimate: 'R$ 1.400,00 (previsão)',
      valuesValid: 'Informações sujeitas a confirmação. Empreendimento com forte potencial de valorização.',
    },
  },
  {
    id: 6,
    title: 'GAVÍ',
    location: 'Gávea',
    price: 'R$ 2.250.000,00',
    area: '30,05m² - 106,07 m²',
    bedrooms: 'suítes',
    suites: 'Variável',
    garage: 'Vagas de garagem conforme unidade',
    cardVideo: 'https://youtube.com/shorts/xEyIXTbYLnk',
    heroMedia: {
      type: 'video',
      src: 'https://youtube.com/shorts/wHAj0JXVo8U',
      alt: 'Vídeo Gavi',
    },
    image: `${basePath}images/gavi-01.jpg`,
    pdf: `${basePath}docs/gavi-book.pdf`,
    summary: 'Viver na Gávea é muito mais do que escolher um endereço. É escolher um estilo de vida.',
  },
  {
    id: 7,
    title: 'Ilha Pura',
    location: 'Barra Olímpica, Barra da Tijuca - RJ',
    price: 'A partir de R$ 1.573.200,00',
    area: '—',
    bedrooms: '—',
    suites: '—',
    garage: 'sob consulta',
    cardVideo: 'https://youtu.be/nreJePAp2xw',
    heroMedia: {
      type: 'video',
      src: 'https://youtu.be/iKMVow1DP2U',
      alt: 'Vídeo Ilha Pura',
    },
    images: [
      `${basePath}images/id07/ilha-pura-01.jpg`,
      `${basePath}images/id07/ilha-pura-02.jpg`,
      `${basePath}images/id07/ilha-pura-03.jpg`,
      `${basePath}images/id07/ilha-pura-04.jpg`,
      `${basePath}images/id07/ilha-pura-05.jpg`,
      `${basePath}images/id07/ilha-pura-06.jpg`,
      `${basePath}images/id07/ilha-pura-07.jpg`,
      `${basePath}images/id07/ilha-pura-08.jpg`,
      `${basePath}images/id07/ilha-pura-09.jpg`,
      `${basePath}images/id07/ilha-pura-10.jpg`,
      `${basePath}images/id07/ilha-pura-11.jpg`,
      `${basePath}images/id07/ilha-pura-12.jpg`,
      `${basePath}images/id07/ilha-pura-13.jpg`,
      `${basePath}images/id07/ilha-pura-14.jpg`,
    ],
    image: `${basePath}images/id07/ilha-pura-01.jpg`,
    summary:
      'Ilha Pura — bairro planejado e empreendimento imobiliário na Barra Olímpica, com integração entre moradia e natureza.',
    details: {
      developer: 'BTG Pactual',
      highlights: [
        'Bairro planejado com condomínios residenciais e grande parque integrado',
        'Paisagismo com participação de Benedito Abbud e Burle Marx Escritório de Paisagismo',
        'Condomínios lançados: Astra, Elos, Saint Michel, Millenio, Viure e Oro by Ornare',
      ],
      valuesValid: 'Informações sujeitas a confirmação.',
      // informações sobre ofertas e localização
      promotionalUnits: undefined,
      condominiumEstimate: undefined,
      address: 'Avenida Salvador Allende, Barra Olímpica, Barra da Tijuca, Rio de Janeiro',
      // descrição detalhada do que oferece
      description:
        'As unidades variam geralmente de 2 a 4 quartos, com plantas entre aproximadamente 79 m² e 160 m², oferecendo áreas de lazer como piscinas, academias, salões de festa, quadras, playgrounds e soluções sustentáveis como reaproveitamento de água. Localizado próximo à Avenida das Américas e Linha Amarela, com acesso a BRT, shoppings, escolas e serviços.',
    },
  },
  {
    id: 8,
    title: 'Kronos by Tegra',
    location: 'Barra da Tijuca - RJ',
    price: 'Entre em contato com Ariana Nunes',
    area: '77 - 330 m²',
    bedrooms: '2 a 4 suítes',
    suites: 'variável',
    garage: 'sob consulta',
    cardVideo: 'https://youtu.be/AppauOqtxdk',
    heroMedia: {
      type: 'video',
      src: 'https://youtu.be/9Ro4SolqgEc',
      alt: 'Vídeo Kronos by Tegra',
    },
    images: [
      `${basePath}images/id08/kronos-01.jpg`,
      `${basePath}images/id08/kronos-02.jpg`,
      `${basePath}images/id08/kronos-03.jpg`,
      `${basePath}images/id08/kronos-04.jpg`,
      `${basePath}images/id08/kronos-05.jpg`,
      `${basePath}images/id08/kronos-06.jpg`,
      `${basePath}images/id08/kronos-07.jpg`,
      `${basePath}images/id08/kronos-08.jpg`,
      `${basePath}images/id08/kronos-09.jpg`,
      `${basePath}images/id08/kronos-10.jpg`,
      `${basePath}images/id08/kronos-11.jpg`,
    ],
    image: `${basePath}images/id08/kronos-01.jpg`,
    summary:
      'Kronos by Tegra redefine o significado de morar bem na Zona Oeste do Rio de Janeiro. Projetado para integrar sofisticação e conforto, com volumetria moderna e acabamentos de altíssimo padrão.',
    details: {
      address: 'Barra da Tijuca, Rio de Janeiro',
      description:
        'O Kronos by Tegra redefine o significado de morar bem na Zona Oeste do Rio de Janeiro. Projetado para integrar sofisticação e conforto, este projeto inovador destaca-se por sua volumetria moderna e acabamentos de altíssimo padrão. Localizado estrategicamente na região da Barra da Tijuca, oferece rápido acesso a shoppings de luxo, centros gastronômicos renomados e serviços de alta qualidade, garantindo toda a praticidade que sua rotina exige.',
      highlights: [
        'Proximidade com Praia da Barra da Tijuca',
        'Segurança de ponta com controle rigoroso 24h',
        'Lazer exclusivo com ambientes equipados',
        'Infraestrutura sustentável e ecológica',
        'Tomadas para carros elétricos',
        'Automação residencial e controle biométrico',
        'Arquitetura de autor com privacidade preservada',
        'Ciclovias modernas e orla com gastronomia',
      ],
      condominiumEstimate: 'Sob consulta',
      valuesValid: 'Entre em contato com a Ariana Nunes da Corretora Somma para informações atualizadas sobre preço, disponibilidade e condições de pagamento.',
    },
  },
  {
    id: 9,
    title: 'Barra Home Design',
    location: 'Barra da Tijuca – Rio de Janeiro/RJ',
    price: 'Entre em contato com Ariana Nunes',
    area: '296 - 516 m²',
    bedrooms: '5 suítes',
    suites: '5',
    garage: 'a partir de 2 vagas',
    cardVideo: 'https://www.youtube.com/shorts/ntlDVaEMZDY',
    heroMedia: {
      type: 'video',
      src: 'https://www.youtube.com/watch?v=5ygPLTUuAF4',
      alt: 'Vídeo Barra Home Design',
    },
    images: Array.from({ length: 26 }, (_, index) =>
      `${basePath}images/id09/Barra ${String(index + 1).padStart(2, '0')}.jpg`,
    ),
    image: `${basePath}images/id09/Barra 01.jpg`,
    summary: 'Arquitetura contemporânea, liberdade para personalizar e uma nova forma de viver na Barra.',
    details: {
      address: 'Barra da Tijuca, Rio de Janeiro/RJ',
      description:
        'O Barra Home Design apresenta casas triplex de arquitetura contemporânea, com plantas flexíveis e ambientes projetados para integrar conforto, sofisticação e funcionalidade. As residências contam com cozinha com ilha integrada ao living e à área gourmet, proporcionando ambientes amplos e conectados para receber a família e os amigos.',
      characteristics: [
        'Casas triplex',
        '5 suítes',
        'Plantas de 296 a 516 m²',
        'Plantas flexíveis',
        'Piscina privativa',
        'Área gourmet com churrasqueira',
        'Cozinha com ilha integrada ao living',
        'Lavabo',
        'Dependência completa',
        'A partir de 2 vagas de garagem',
      ],
      amenities: [
        '🏖️ Piscina natural com praia privativa',
        '🏋️ Academia',
        '⚽ Quadra de futebol',
        '🏐 Quadra de areia',
        '🐾 Espaço Pet',
        '🍽️ Espaço Gourmet',
        '🔥 Churrasqueira',
        '🌴 Deck Lounge',
        '👧 Espaço Kids',
        '🧸 Brinquedoteca',
        '🎮 Espaço Teen',
        '🍹 Bar da piscina',
      ],
      contactMessage: 'Para consultar preço, disponibilidade e condições de pagamento, entre em contato com Ariana Nunes, da SOMMA Imobiliária.',
    },
  },
  {
    id: 10,
    title: 'ARTi Leblon',
    location: 'LEBLON',
    price: 'Entre em contato com Ariana Nunes',
    area: '36 m² - 72 m²',
    bedrooms: 'Studios, 1 quarto e coberturas lineares',
    suites: '—',
    garage: 'sob consulta',
    cardVideo: 'https://www.youtube.com/shorts/jYqnzL0YLkg',
    heroMedia: {
      type: 'video',
      src: 'https://youtu.be/ztxtz7Sa_3k',
      alt: 'Vídeo ARTi Leblon',
    },
    images: [
      ...Array.from({ length: 16 }, (_, index) =>
        `${basePath}images/id10/arti-${String(index).padStart(2, '0')}.jpg`,
      ),
      ...Array.from({ length: 22 }, (_, index) =>
        `${basePath}images/id10/arti-page-${String(index + 2).padStart(4, '0')}.jpg`,
      ),
    ],
    image: `${basePath}images/id10/arti-00.jpg`,
    summary: 'Na quadríssima da praia, uma nova forma de viver o Leblon.',
    details: {
      address: 'Rua General Artigas, 119',
      typologies: 'Studios, 1 quarto e coberturas lineares',
      beachDistance: '150 m da orla',
      description:
        'Na quadríssima da praia, a apenas 150 m da orla, o ARTi Leblon combina arquitetura contemporânea, design e uma atmosfera de hotel boutique. Uma experiência pensada para desacelerar. Cada detalhe foi concebido para proporcionar momentos de relaxamento, bem-estar e exclusividade. Onde o exclusivo não é apenas um adjetivo, é uma experiência.',
      amenities: [
        'Piscina',
        'Lounge bar',
        'Academia',
        'Hidromassagem',
        'Sauna seca e úmida',
        'Sala de massagem',
        'Lounge de relaxamento',
        'Confort shower',
        'Lavanderia',
      ],
    },
  },
  {
    id: 11,
    title: 'Parque Studios | Balassiano',
    location: 'Ipanema',
    price: 'Entre em contato com Ariana Nunes',
    area: '35–66 m²',
    bedrooms: 'Studios, Lofts, Double Studios e Coberturas',
    suites: 'Conforme unidade',
    garage: 'Conforme unidade',
    cardVideo: 'https://youtu.be/1ACgFuoj1Y4',
    heroMedia: {
      type: 'video',
      src: 'https://youtu.be/YmSxOxpnflQ',
      alt: 'Vídeo Parque Studios | Balassiano',
    },
    images: Array.from({ length: 30 }, (_, index) => index)
      .filter((index) => index !== 2 && index !== 12)
      .map((index) => `${basePath}images/id11/balassiano-${String(index).padStart(2, '0')}.jpg`),
    image: `${basePath}images/id11/balassiano-00.jpg`,
    summary:
      'Entre Ipanema e Leblon, o Parque Studios traduz o estilo de vida carioca em um projeto contemporâneo, com lazer completo, conveniência 24 horas e uma localização privilegiada junto ao Jardim de Alah, ao mar e à Lagoa.',
    details: {
      address: 'Rua Visconde de Pirajá, 640 – Ipanema',
      typologies: 'Studios, Lofts, Double Studios e Coberturas',
      description:
        'Entre Ipanema e Leblon, o Parque Studios combina localização privilegiada, arquitetura contemporânea e praticidade em um dos endereços mais desejados do Rio. Um projeto pensado para quem valoriza mobilidade, lazer e a experiência de viver perto do mar, da Lagoa e do Jardim de Alah.',
      amenities: [
        '🏊 Rooftop com vista para a Lagoa e o Cristo Redentor',
        '🏋️ Academia',
        '🛋️ Lobby',
        '🚲 Bicicletário com compressor e tomada para bicicleta elétrica',
        '🧺 Lavanderia',
        '🎯 Espaço multiuso',
        '🌿 Terraço multiuso',
        '📦 Estrutura para recebimento de encomendas e food delivery',
        '🔐 Controle de acesso digital e circulações monitoradas',
        '❄️ Áreas comuns climatizadas e decoradas',
        '♿ Acessibilidade',
        '🔑 Fechadura eletrônica nas unidades',
        '🍳 Bancada para cooktop elétrico de 2 bocas',
        '❄️ Infraestrutura para ar-condicionado split',
        '🍖 Kit gourmet, churrasqueira e piscina nas coberturas',
      ],
    },
  },
  {
    id: 12,
    title: 'Mariano by Breton',
    location: 'Barra da Tijuca',
    price: 'Entre em contato com Ariana Nunes',
    area: '135–289 m²',
    bedrooms: 'Apartamentos e coberturas | 3 e 4 suítes',
    suites: '3 e 4 suítes',
    garage: '2–4 vagas',
    cardVideo: 'https://www.youtube.com/shorts/5ZiTvZnyG2M',
    heroMedia: {
      type: 'video',
      src: 'https://www.youtube.com/watch?v=z-W0OHRPf2U',
      alt: 'Vídeo Mariano by Breton',
    },
    images: Array.from({ length: 23 }, (_, index) =>
      `${basePath}images/id12/mariano-${String(index + 1).padStart(2, '0')}.jpg`,
    ),
    image: `${basePath}images/id12/mariano-01.jpg`,
    summary:
      'Na quadra da praia, no Posto 6 da Barra da Tijuca, o Mariano by Breton combina arquitetura autoral, design sofisticado e uma experiência residencial de alto padrão. Um projeto exclusivo com apenas 47 residências, pensado para quem valoriza espaço, privacidade e a proximidade com o mar.',
    details: {
      address: 'Avenida Sobral Pinto, 4225 – Posto 6, Barra da Tijuca',
      typologies: '3 suítes, 4 suítes e coberturas lineares',
      description:
        'O Mariano by Breton está localizado na Avenida Sobral Pinto, 4225, no Posto 6 da Barra da Tijuca, na quadra da praia e em frente ao Canal de Marapendi. O projeto reúne 47 residências em uma torre única, com apenas três apartamentos por pavimento, proporcionando uma proposta residencial marcada por privacidade, design e exclusividade.',
      amenities: [
        '🏊 Piscina adulto com deck molhado',
        '🏊 Piscina infantil',
        '🧖 Sauna',
        '💦 Spa, hidro e área de repouso',
        '💆 Sala de massagem',
        '🏋️ Espaço Fitness',
        '🍸 Espaço Gourmet',
        '👧 Espaço Kids',
        '🎮 Espaço Teen',
        '🐾 Pet Care',
        '💼 Meeting Room',
        '🎙️ Espaço Podcast',
        '🛒 Mini Market',
        '🚲 Smart Bike',
        '❄️ Gelo Health',
        '🌿 Áreas de convivência',
        '🏖️ Beach Point na praia',
      ],
    },
  },
  {
    id: 13,
    location: 'PONTAL OCEÂNICO',
    subtitle: 'RECREIO DOS BANDEIRANTES',
    title: 'KAUAI',
    price: 'Entre em contato com Ariana Nunes',
    area: '58–155 m²',
    bedrooms: '2, 3 e 4 quartos',
    suites: 'Coberturas duplex',
    garage: 'Mais de 20 itens de lazer',
    cardVideo: 'https://youtu.be/vhK3k9a-mec',
    heroMedia: {
      type: 'video',
      src: 'https://youtu.be/vhK3k9a-mec',
      alt: 'Vídeo KAUAI Pontal Oceânico',
    },
    images: Array.from({ length: 39 }, (_, index) => {
      const filename = index === 26
        ? 'kauai26.jpg'
        : `kauai-${String(index).padStart(2, '0')}.jpg`;
      return `${basePath}images/id13/${filename}`;
    }),
    image: `${basePath}images/id13/kauai-00.jpg`,
    summary:
      'No Pontal Oceânico, o KAUAI combina natureza, tranquilidade e uma estrutura completa de lazer para você viver seu lado oceânico. Um projeto cercado por montanhas, praias e tudo o que você precisa para aproveitar o melhor do Recreio.',
    details: {
      address: 'Pontal Oceânico – Recreio dos Bandeirantes',
      typologies: '2, 3 e 4 quartos',
      description:
        'O KAUAI Pontal Oceânico foi concebido para quem busca uma vida mais próxima da natureza, sem abrir mão de praticidade e infraestrutura. Localizado em um bairro planejado e cercado por montanhas, praias e áreas verdes, o empreendimento oferece diferentes opções de apartamentos e coberturas, além de uma ampla estrutura de lazer para toda a família.',
      amenities: [
        '🌴 Boulevard de lazer',
        '🌊 Piscina com raia',
        '💦 Deck molhado',
        '☀️ Solarium',
        '🧖 Sauna e espaço de repouso',
        '🏋️ Academia',
        '🎾 Quadra de Beach Tennis / Futvôlei',
        '⚽ Campo infantil gramado',
        '🍖 Churrasqueiras',
        '🍸 Espaço Gourmet',
        '🎉 Salão de festas adulto e infantil',
        '👶 Praça dos bebês',
        '🎠 Playground',
        '🧸 Brinquedoteca',
        '🎮 Espaço Teen',
        '💼 Coworking',
        '🤝 Sala de reunião',
        '🎙️ Espaço Podcast',
        '🐾 Pet Place',
        '📦 Espaço Delivery',
        '🛒 Minimarket',
        '🚲 Bicicletário',
        '🛠️ Sala de ferramentas',
        '🏢 Espaço Multiuso',
        '🔐 Segurança: controle de acessos, segurança perimetral, CFTV e monitoramento 24 horas.',
        '🌱 Sustentabilidade: iluminação LED com sensores, coleta seletiva e reutilização de águas pluviais.',
        '🏡 Conforto: porcelanato e preparação para ar-condicionado Multi Bi Split.',
      ],
    },
  },
  {
    id: 14,
    location: 'PONTAL OCEÂNICO',
    subtitle: 'RECREIO DOS BANDEIRANTES',
    title: 'LANAI',
    price: 'Entre em contato com Ariana Nunes',
    area: '52–87 m²',
    bedrooms: '2 e 3 quartos + Gardens',
    suites: '1',
    garage: '1 vaga por unidade',
    cardVideo: 'https://youtube.com/shorts/SJk4eiLK49s?feature=share',
    heroMedia: {
      type: 'video',
      src: 'https://youtu.be/aaiwVxVClnU',
      alt: 'Vídeo Lanai Pontal Oceânico',
    },
    images: Array.from({ length: 18 }, (_, index) =>
      `${basePath}images/id14/lanai-${String(index).padStart(2, '0')}.jpg`,
    ),
    image: `${basePath}images/id14/lanai-00.jpg`,
    summary:
      'No Pontal Oceânico, o Lanai combina conforto, lazer e qualidade de vida em um projeto contemporâneo pensado para viver o melhor do novo Recreio. Apartamentos de 2 e 3 quartos e gardens, cercados por natureza e uma estrutura completa para toda a família.',
    details: {
      address: 'Rua Luiz Carlos Sarolli, 1355 – Recreio dos Bandeirantes',
      typologies: '2 e 3 quartos + Gardens',
      description:
        'O Lanai Pontal Oceânico foi pensado para quem busca uma experiência de moradia que combine conforto, praticidade e contato com a natureza. Localizado no Pontal Oceânico, no Recreio dos Bandeirantes, o projeto reúne apartamentos de 2 e 3 quartos e gardens, com ambientes integrados e varandas com cortina de vidro. Com 272 unidades distribuídas em três blocos, o empreendimento oferece uma estrutura completa de lazer e convivência, além de recursos de segurança e soluções sustentáveis.',
      amenities: [
        '🏊 Piscina e Pool House',
        '⚽ Campo de futebol',
        '🏋️ Centro de recuperação',
        '🍽️ Espaço gourmet',
        '🎉 Salão de festas',
        '🎠 Parque infantil',
        '🌿 Áreas de convivência e lazer',
        '🔐 Controle de acesso com biometria facial',
        '📹 Câmeras de monitoramento',
        '🛡️ Portaria 24 horas',
        '💧 Sistema de reaproveitamento de água',
        '💡 Iluminação LED nas áreas comuns',
      ],
    },
  },
  {
    id: 15,
    location: 'PONTAL OCEÂNICO',
    subtitle: 'RECREIO DOS BANDEIRANTES',
    title: 'FEEL SUN',
    price: 'Entre em contato com Ariana Nunes',
    area: '30–83 m²',
    bedrooms: 'Studios Design, Garden Studios e Studios Dúplex',
    suites: 'Conforme unidade',
    garage: 'Lazer completo',
    cardVideo: 'https://youtu.be/v6DoF2XvuPM',
    heroMedia: {
      type: 'video',
      src: 'https://youtu.be/v6DoF2XvuPM',
      alt: 'Vídeo FEEL Pontal Oceânico',
    },
    images: [
      `${basePath}images/id15/feel-00-portico-diurno.jpg`,
      `${basePath}images/id15/feel-01-fachada-diurno.jpg`,
      `${basePath}images/id15/feel-02-APARTAMENTO-SALA-IA.jpg`,
      `${basePath}images/id15/feel-03-APARTAMENTO-QUARTO-IA.jpg`,
      `${basePath}images/id15/feel-04-LAVANDERIA-IA.jpg`,
      `${basePath}images/id15/feel-05-PETPLACE.jpg`,
      `${basePath}images/id15/feel-06-PLAYGROUND-E-REDARIO-IA.jpg`,
      `${basePath}images/id15/feel-07-GARDEN-TERRACO-IA.jpg`,
      `${basePath}images/id15/feel-08-CHURRASQUEIRA.jpg`,
      `${basePath}images/id15/feel-09-PISCINA.jpg`,
      `${basePath}images/id15/feel-10-COBERTURA IA.jpg`,
      `${basePath}images/id15/feel-11-PRANCHARIO-IA.jpg`,
      `${basePath}images/id15/feel-12-TAKE-IT-IA.jpg`,
      `${basePath}images/id15/feel-13-SAUNA-IA.jpg`,
      `${basePath}images/id15/feel-14-LAVANDERIA-IA.jpg`,
      `${basePath}images/id15/feel-15-GUARDA-ENTREGAS-IA.jpg`,
      `${basePath}images/id15/feel-16-FESTAS-FINAL.jpg`,
      `${basePath}images/id15/feel-17-ACADEMIA-FINAL.jpg`,
      `${basePath}images/id15/feel-18-Varanda.jpg`,
      `${basePath}images/id15/feel-19-detalhe-da-fachada.jpg`,
      `${basePath}images/id15/feel-20-portico-noturno.jpg`,
      `${basePath}images/id15/feel-21-fachada-noturna.jpg`,
      ...Array.from({ length: 43 }, (_, index) =>
        `${basePath}images/id15/feel-${index + 22}.jpg`,
      ),
    ],
    image: `${basePath}images/id15/feel-00-portico-diurno.jpg`,
    summary:
      'No Pontal Oceânico, o FEEL SUN combina design, natureza e praticidade em um projeto pensado para quem busca uma nova forma de viver. Studios, Garden Studios e Studios Dúplex em um bairro planejado, cercado por natureza e próximo às praias do Recreio.',
    details: {
      address: 'Luiz Carlos Sarolli, 1600 – Pontal Oceânico',
      typologies: 'Studios Design, Garden Studios e Studios Dúplex',
      description:
        'O FEEL SUN Pontal Oceânico foi pensado para quem deseja viver com mais leveza, conexão com a natureza e praticidade no dia a dia. Localizado no Pontal Oceânico, o projeto combina a tranquilidade de um bairro planejado com a proximidade da natureza e a infraestrutura da Avenida das Américas. O empreendimento reúne Studios Design de 30 a 36 m², Garden Studios de 39 a 83 m² e Studios Dúplex de 55 a 70 m², criando diferentes possibilidades para morar, descansar ou investir. Com arquitetura contemporânea, lazer completo, espaços compartilhados e soluções de tecnologia, o FEEL SUN foi concebido para acompanhar uma nova maneira de viver o Rio.',
      amenities: [
        '🏊 Piscina',
        '🌊 Deck molhado e solarium',
        '🧖 Sauna com repouso',
        '🍽️ Salão de festas gourmet',
        '💼 Coworking',
        '🏋️ Academia',
        '🌴 Pool House',
        '🎠 Play Kids e redário',
        '🐾 Pet Place e Pet Care',
        '🔥 Churrasqueira',
        '📦 Guarda-entregas e maleiro',
        '🧺 Lavanderia compartilhada',
        '🚲 Bicicletário e pranchário',
        '📱 App FEEL para serviços e reservas',
        '🔐 Fechadura Smart nas unidades',
        '🤖 Infraestrutura para robô entregador',
        '📹 Monitoramento por câmeras com inteligência artificial',
        '👤 Reconhecimento facial no acesso de pedestres',
        '🚗 Controle de acesso de veículos',
        '📶 Wi-Fi nas áreas comuns',
      ],
    },
  },
  {
    id: 16,
    location: 'PONTAL OCEÂNICO',
    subtitle: 'RECREIO DOS BANDEIRANTES',
    title: 'FEEL NATURE',
    price: 'Entre em contato com Ariana Nunes',
    area: '30–83 m²',
    bedrooms: 'Studios Design, Garden Studios e Studios Dúplex',
    suites: 'Conforme unidade',
    garage: 'Lazer completo',
    cardVideo: 'https://youtu.be/9jx1zVU26sk',
    heroMedia: {
      type: 'video',
      src: 'https://youtu.be/9jx1zVU26sk',
      alt: 'Vídeo FEEL NATURE Pontal Oceânico',
    },
    images: Array.from({ length: 69 }, (_, index) => {
      const number = index + 1;
      if ([11, 24, 44].includes(number)) return null;
      const fileName = number === 2 ? 'feel-n-02.png' : `feel-n-${String(number).padStart(2, '0')}.jpg`;
      return `${basePath}images/id16/${fileName}`;
    }).filter((src): src is string => src !== null),
    image: `${basePath}images/id16/feel-n-01.jpg`,
    summary:
      'No Pontal Oceânico, o FEEL NATURE combina natureza, leveza e praticidade em uma nova forma de viver. Studios Design, Garden Studios e Studios Dúplex em um bairro planejado, próximo às praias e cercado pela natureza do Recreio.',
    details: {
      address: 'Rua Teixeira Heizer, 1.700 – Pontal Oceânico',
      typologies: 'Studios Design, Garden Studios e Studios Dúplex',
      description:
        'O FEEL NATURE Pontal Oceânico foi pensado para quem busca uma vida mais leve, conectada à natureza e com praticidade no dia a dia. Localizado no Pontal Oceânico, um bairro planejado do Recreio dos Bandeirantes, o empreendimento combina a proximidade com praias, áreas naturais e a infraestrutura da Avenida das Américas. O projeto reúne Studios Design de 30 a 36 m², Garden Studios de 39 a 83 m² e Studios Dúplex de 55 a 70 m², criando diferentes possibilidades para morar, descansar ou aproveitar o imóvel. Com arquitetura contemporânea, lazer completo, espaços compartilhados e soluções pensadas para facilitar a rotina, o FEEL NATURE traduz uma proposta de viver com menos excessos e mais conexão.',
      amenities: [
        '🏊 Piscina',
        '🍹 Pool House',
        '🎉 Salão de festas gourmet e coworking',
        '🏋️ Academia',
        '🧖 Sauna com repouso',
        '🎠 Play Kids e redário',
        '🐾 Pet Place e Pet Care',
        '🔥 Churrasqueira',
        '📦 Guarda-entregas e Smart Locker',
        '🧺 Lavanderia compartilhada',
        '🏄 Pranchário',
        '🚲 Bicicletário',
        '🛒 Take It',
        '📱 App FEEL',
        '🔐 Fechadura Smart',
        '🤖 Infraestrutura para robô entregador',
        '📹 Monitoramento por câmeras',
        '👤 Reconhecimento facial',
        '🚗 Controle de acesso de veículos',
        '📶 Wi-Fi nas áreas comuns',
        '🏖️ Beach Point na Praia do Recreio',
      ],
    },
  },
  {
    id: 17,
    location: 'Barra da Tijuca',
    title: 'Green Park Barra',
    price: 'Entre em contato com Ariana Nunes',
    area: '2, 3 e 4 quartos',
    bedrooms: '2, 3 e 4 quartos',
    suites: 'Conforme unidade',
    garage: 'Condomínio-clube com lazer completo',
    cardVideo: 'https://youtube.com/shorts/PrHHIqrheMg?feature=share',
    heroMedia: {
      type: 'video',
      src: 'https://youtu.be/C1p7mlngE4I',
      alt: 'Vídeo Green Park Barra',
    },
    images: Array.from({ length: 91 }, (_, index) => {
      const number = index + 1;
      return `${basePath}images/id17/green-p-${String(number).padStart(2, '0')}.jpg`;
    }),
    image: `${basePath}images/id17/green-p-01.png`,
    summary:
      'No início da Barra da Tijuca, o Green Park Barra combina natureza, mobilidade, conveniência e uma estrutura completa de lazer. Um condomínio-clube pensado para equilibrar a praticidade da vida urbana com o bem-estar de viver cercado pelo verde, com opções de plantas de 2, 3 e 4 quartos.',
    details: {
      address: 'Avenida das Américas, 1300 – Barra da Tijuca',
      typologies: '2, 3 e 4 quartos',
      description:
        'Viva a Barra com mais espaço, natureza e qualidade de vida. O Green Park Barra está localizado na Avenida das Américas, 1300, no início da Barra da Tijuca, em uma região que combina mobilidade, conveniência e proximidade com a natureza. O projeto foi concebido para integrar arquitetura, paisagismo e áreas de convivência, criando um verdadeiro parque verde dentro do empreendimento. A implantação valoriza as áreas abertas, os jardins e as vistas para a paisagem da Barra, incluindo a Pedra da Gávea e as montanhas da região. Com apartamentos de 2, 3 e 4 quartos, além de gardens e coberturas em diferentes blocos, o Green Park Barra oferece múltiplas possibilidades de plantas para diferentes estilos de vida. O projeto também conta com um rooftop de uso comum, áreas de lazer completas, espaços de bem-estar, ambientes para convivência e estruturas pensadas para facilitar o dia a dia.',
      amenities: [
        '🏊 Piscinas: adulto, infantil, com raia de 25 m, deck molhado e Splash Pad',
        '🏖️ Pool Party House com área para eventos e espaço gourmet',
        '🏋️ Academia e Fitness Externo',
        '🧘 Pilates, Yoga e Wellness com spa, sauna seca e sala de massagem',
        '🎾 Quadra poliesportiva, quadra de pickleball e áreas esportivas externas',
        '🍷 Wine Lounge, espaços gourmet, churrasqueira com forno de pizza e bar da piscina',
        '🎬 Cinema, salas de jogos adulto e jovem e espaços de convivência',
        '🎉 Salão de festas adulto, infantil e espaços gourmet',
        '🧸 Brinquedoteca, playground, Espaço Kids e piscina infantil com parque aquático',
        '🌳 Jardim central, Web Garden, pomar com área de piquenique, praças e áreas externas de estar',
        '🐾 Espaço Pet',
        '💼 Coworking com sala de reunião e Wi-Fi',
        '📦 Espaço Delivery, minimercado, bicicletário e posto de coleta de lavanderia',
      ],
    },
  },
  {
    id: 18,
    location: 'Barra da Tijuca',
    title: 'ALL Jardim Oceânico',
    price: 'Entre em contato com Ariana Nunes',
    area: '78–172 m²',
    bedrooms: '2 e 3 quartos + coberturas duplex',
    suites: '1 suíte nos apartamentos apresentados',
    garage: 'Lazer completo',
    cardVideo: 'https://youtube.com/shorts/ob010zrRyo8',
    heroMedia: {
      type: 'video',
      src: 'https://youtu.be/DJZ8M7VapTU',
      alt: 'Vídeo ALL Jardim Oceânico',
    },
    images: Array.from({ length: 71 }, (_, index) => index + 1)
      .filter((number) => number !== 6)
      .map((number) => `${basePath}images/id18/all-j-${String(number).padStart(2, '0')}.jpg`),
    image: `${basePath}images/id18/all-j-01.jpg`,
    summary:
      'No Jardim Oceânico, o ALL combina natureza, comodidade e lazer completo em um novo endereço na Barra da Tijuca. Um projeto pensado para quem valoriza qualidade de vida, mobilidade e diferentes experiências para viver e aproveitar cada momento.',
    details: {
      address: 'Jardim Oceânico – Barra da Tijuca',
      typologies: '2 e 3 quartos + coberturas duplex',
      description:
        'O ALL Jardim Oceânico foi pensado para quem busca uma experiência residencial que combine conforto, natureza, lazer e praticidade em um dos endereços mais desejados da Barra da Tijuca. Localizado no Jardim Oceânico, o empreendimento está a aproximadamente 5 minutos da estação Jardim Oceânico do metrô e a cerca de 15 minutos da praia, conectando mobilidade e qualidade de vida. O projeto reúne apartamentos de 2 e 3 quartos e coberturas duplex, além de um masterplan de lazer de aproximadamente 3.500 m², com espaços pensados para diferentes momentos do dia e para toda a família.',
      amenities: [
        '🏊 Complexo aquático — piscina adulto com raia, piscina infantil, solarium, deck molhado, bangalôs, Espaço Praia e bar da piscina',
        '🏋️ Fitness e bem-estar — espaço fitness, área para ergometria e ambientes preparados para atividades com personal ou vídeos',
        '🧖 Spa e relaxamento — espaços dedicados ao bem-estar e momentos de descanso',
        '🍽️ Espaços gourmet e convivência — ambientes planejados para receber, celebrar e aproveitar bons momentos',
        '🎉 Salão de festas — estrutura para confraternizações e celebrações',
        '🎮 Espaços de entretenimento — salão de jogos e brinquedoteca',
        '💼 Coworking — espaço pensado para trabalhar sem sair de casa',
        '🐾 Pet Place — área para os pets brincarem e receberem cuidados, inclusive cães de grande porte',
        '🚲 Bicicletário completo — compressor, tomadas para recarga, lockers e área para manutenção e limpeza das bicicletas',
        '🛠️ Oficina compartilhada — equipamentos básicos para pequenos reparos',
        '📦 Espaço Delivery — área destinada ao armazenamento de entregas, inclusive refrigeradas',
        '⚡ Recarga elétrica — uma vaga de garagem com recarga elétrica, conforme material do empreendimento',
        '🌐 Tecnologia e conectividade — infraestrutura para internet wireless nas áreas comuns',
      ],
    },
  },
];
