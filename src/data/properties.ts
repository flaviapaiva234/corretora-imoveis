export type Property = {
  id: number;
  title: string;
  location: string;
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
    promotionalUnits?: { unit: string; area: string; price: string }[];
    seaAndLagoonViews?: { unit: string; area: string; price: string }[];
    corcovadoView?: { unit: string; area: string; price: string }[];
    frontalPrudente?: { unit: string; area: string; price: string }[];
    condominiumEstimate?: string;
    valuesValid?: string;
    developer?: string;
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
    cardVideo: 'https://www.youtube.com/shorts/xEyIXTbYLnk',
    heroMedia: {
      type: 'video',
      src: 'https://www.youtube.com/shorts/xEyIXTbYLnk',
      alt: 'Vídeo Connect Square',
    },
    image: `${basePath}images/connect-square-piscina.jpg`,
    summary:
      'Residencial da Patrimar no Centro, com rooftop, studios e apartamentos de 1 e 2 quartos pensado para mobilidade e conveniência urbana.',
    details: {
      address: 'Av. Graça Aranha, 429 / em frente ao Terminal Menezes Cortes',
      description:
        'O Connect Square é um residencial da Patrimar que combina arquitetura contemporânea, plantas inteligentes e infraestrutura voltada para mobilidade urbana, localizado no epicentro do Centro do Rio.',
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
    area: '81 - 110 m²',
    bedrooms: '1-3 quartos',
    suites: 'variável',
    garage: 'conforme unidade',
    cardVideo: 'https://www.instagram.com/p/DbPG-5ktyJ_/',
    image: `${basePath}images/ipa-studios.jpg`,
    summary:
      'No Quadrilátero do Charme, com mais de 1.500m² de lazer, solarium com vista para lagoa e infraestrutura premium.',
    details: {
      address: 'Rua Prudente de Morais, 1.117 - Ipanema',
      description:
        'No Quadrilátero do Charme, condomínio com mais de 1.500m² de lazer: piscina com borda infinita, solarium, sauna, hidromassagem, academia 360º, coworking, smart food, lavanderia, lounge gourmet e recarga para veículos elétricos.',
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
      condominiumEstimate: 'R$ 20,00 por m² (previsão)',
      valuesValid: 'Valores válidos para junho 2026',
    },
  },
  {
    id: 4,
    title: 'ICONYC',
    location: 'Botafogo',
    price: 'A partir de R$ 1.475.477,00',
    area: '72,03 m² - 191,53m²',
    bedrooms: '2 Quartos ou Cobertura Duplex com Suítes',
    suites: 'Variável',
    garage: '3 vagas',
    cardVideo: 'https://youtube.com/shorts/2w8U1FGbD28',
    heroMedia: {
      type: 'video',
      src: 'https://youtube.com/shorts/2w8U1FGbD28',
      alt: 'Vídeo ICONYC',
    },
    image: `${basePath}images/iconyc-2-perfil-metade.jpg`,
    summary: 'Conheça o ICONYC em Botafogo, um empreendimento que transforma o extraordinário em realidade.',
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
];
