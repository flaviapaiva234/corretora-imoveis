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
    price: 'A partir de R$ 890.000',
    area: '40 - 190 m²',
    bedrooms: '1-3 quartos',
    suites: '1-3',
    garage: 'conforme unidade',
    video: 'https://www.youtube.com/watch?v=aatr_2MstrI',
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
    price: 'A partir de R$ 590.000',
    area: '24 - 60 m²',
    bedrooms: 'Studios, 1 e 2 quartos',
    suites: '1-2',
    garage: 'sob consulta',
    video: 'https://www.youtube.com/watch?v=YSoxmrByv8c',
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
    price: 'A partir de R$ 2.890.000',
    area: '81 - 110 m²',
    bedrooms: '1-3 quartos',
    suites: 'variável',
    garage: 'conforme unidade',
    video: 'https://www.youtube.com/watch?v=CO0Q2jHKEg0',
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
    title: 'Cobertura Barra',
    location: 'Barra da Tijuca',
    price: 'R$ 4.800.000',
    area: '320 m²',
    bedrooms: '4 suítes',
    suites: '4',
    garage: '3 vagas',
    video: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Apartamento Ipanema',
    location: 'Ipanema',
    price: 'R$ 3.500.000',
    area: '200 m²',
    bedrooms: '3 suítes',
    suites: '3',
    garage: '2 vagas',
    video: 'https://www.youtube.com/watch?v=xwsYvBYZcx4&list=RDxwsYvBYZcx4&start_radio=1',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'Casa Jardim Botânico',
    location: 'Jardim Botânico',
    price: 'R$ 5.250.000',
    area: '380 m²',
    bedrooms: '5 suítes',
    suites: '5',
    garage: '4 vagas',
    video: 'https://www.youtube.com/watch?v=e6Po2lDHD1I&list=RDxwsYvBYZcx4&index=2',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
  },
];
