import { MEDIA } from './siteAssets';

const SPACE = 'https://media.base44.com/images/public/6ac122b38f0e29d12261c026';
const ACTIVITIES = SPACE;

export const GALLERY = [
  {
    title: 'Espaço físico',
    caption: 'Ambientes pensados para acolher, explorar e se sentir em casa.',
    photos: [
      {
        src: `${SPACE}/ec965bf6f_generated_image.png`,
        alt: 'Pátio externo com gramado e playground de madeira',
      },
      {
        src: `${SPACE}/641555b47_generated_image.png`,
        alt: 'Sala de aula clara com mesas baixas, livros e brinquedos',
      },
      {
        src: `${SPACE}/6600f9980_generated_image.png`,
        alt: 'Entrada da escola com jardim e fachada azul',
      },
    ],
  },
  {
    title: 'Cotidiano',
    caption: 'Momentos que fazem parte dos dias na Pluft.',
    photos: [
      {
        src: MEDIA.heroPoster,
        alt: 'Crianças em atividade no espaço da Pluft',
      },
      {
        src: MEDIA.bercarioPoster,
        alt: 'Rotina do berçário na Pluft',
      },
      {
        src: MEDIA.infantilPoster,
        alt: 'Atividades da educação infantil na Pluft',
      },
    ],
  },
  {
    title: 'Atividades',
    caption: 'Arte, brincadeira e histórias que abrem novas descobertas.',
    photos: [
      {
        src: `${ACTIVITIES}/9655af1de_generated_image.png`,
        alt: 'Mesa de ateliê com tintas, pincéis e desenhos infantis',
      },
      {
        src: `${ACTIVITIES}/f9defb083_generated_image.png`,
        alt: 'Blocos de madeira coloridos montados sobre a mesa',
      },
      {
        src: `${ACTIVITIES}/65fe05cfd_generated_image.png`,
        alt: 'Cantinho de leitura com almofadas e livros infantis',
      },
    ],
  },
];