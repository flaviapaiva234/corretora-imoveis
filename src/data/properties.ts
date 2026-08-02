export type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  area: string;
  bedrooms: string;
  suites: string;
  garage: string;
  video: string;
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
    video: 'https://www.youtube.com/shorts/MqjWjUuK5cw',
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
    video: 'https://www.youtube.com/shorts/xEyIXTbYLnk',
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
    video: 'https://www.instagram.com/p/DbPG-5ktyJ_/',
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
    video: 'https://www.instagram.com/p/Da0BgdTs19_/',
    image: `${basePath}images/iconyc-2-perfil-metade.jpg`,
    summary: 'Conheça o ICONYC em Botafogo, um empreendimento que transforma o extraordinário em realidade.',
  },
  {
    id: 5,
    title: 'JAZZ',
    location: 'Nova Iguaçu - RJ',
    price: 'R$ 197.000,00',
    area: '200 m²',
    bedrooms: '1 e 2 Quartos',
    suites: 'Apartamentos, Studios e Gardens',
    garage: 'sob consulta',
    video: 'https://www.instagram.com/p/DaxyIt2shMc/',
    pdf: 'https://ba44ede8f6ee3c28519402c66ea60935.cdn.bubble.io/f1780219962661x460311151065862000/Book%20Digital%20-%20Jazz%20Powered%20By%20Housi.pdf',
    image: `${basePath}images/jazz-01.jpg`,
    summary: 'Jazz Nova Iguaçu oferece studios e gardens com projeto inteligente e opções flexíveis em uma região em forte transformação urbana.',
    details: {
      address: 'Av. Abílio Augusto Távora, Nova Iguaçu',
      description: 'O Jazz combina arquitetura contemporânea, conforto inteligente e localização estratégica em Nova Iguaçu, com opções de studios, apartamentos e gardens pensados para quem busca praticidade sem abrir mão de qualidade.',
      condominiumEstimate: 'Infraestrutura completa com piscina, espaço fitness e coworking.',
      valuesValid: 'PDF disponível com condições atualizadas para consulta imediata.',
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
    video: 'https://www.instagram.com/p/DasidpVMVGj/',
    image: `${basePath}images/gavi-01.jpg`,
    pdf: `${basePath}images/gavi-book.pdf`,
    summary: 'Viver na Gávea é muito mais do que escolher um endereço. É escolher um estilo de vida.',
  },
];
