// eu posso usar useContent aqui e substituir alguns dados desse arquivo
// mas e se eu quisesse apagar esse arquivo? para seguir o mesmo padrao

import { useTranslations } from 'next-intl';
import { useContent } from '../../../../content/useContent';

export const allSections = {
  blog: {
    title: 'Mais vistas',
    image: {
      src: '/images/malgorzata-bujalska-RGM_UAsQwXA-unsplash.jpg',
      width: 345,
      height: 230,
      alt: 'Imagem de temperos a venda em uma prateleira',
    },
    links: [
      {
        href: '/blog/vinhos-nacionais',
        label: 'Top 10 vinhos nacionais',
      },
      {
        href: '/blog/festa-junina',
        label: 'Receitas de festa junina',
      },
      {
        href: '/blog/risotos',
        label: 'Risotos: os diferentes tipos de arroz',
      },
      {
        href: '/blog/conservar-alimentos',
        label: 'Como conservar seus alimentos',
      },
      {
        href: '/blog/cervejas-artesanais',
        label:
          'Um guia das cervejas artesanais de Petrópolis',
      },
    ],
  },
  cheeses: {
    title: 'Nossa queijaria especial',
    image: {
      src: '/images/azzedine-rouichi-YW_5rJvAdKw-unsplash.jpg',
      width: 518,
      height: 344,
      alt: 'Imagem de queijos diversos, inteiros e com cascas',
    },
    links: [
      {
        href: '/queijos/queijos-nacionais',
        label: 'Queijos nacionais',
      },
      {
        href: '/queijos/queijos-importados',
        label: 'Queijos importados',
      },
      {
        href: '/queijos/queijos-veganos',
        label: 'Queijos veganos',
      },
      {
        href: '/queijos/queijos-azuis',
        label: 'Queijos azuis',
      },
      {
        href: '/queijos/queijos-maturados',
        label: 'Queijos maturados',
      },
    ],
  },
  wines: {
    title: 'Vinhos para todos os gostos',
    image: {
      src: '/images/maksym-kaharlytskyi-3uJt73tr4hI-unsplash.jpg',
      width: 425,
      height: 283,
      alt: 'Quatro tipos de vinhos em taças sobre uma mesa',
    },
    links: [
      {
        href: '/vinhos/vinhos-nacionais',
        label: 'Vinhos nacionais',
      },
      {
        href: '/vinhos/vinhos-velho-mundo',
        label: 'Vinhos velho mundo',
      },
      {
        href: '/vinhos/vinhos-novo-mundo',
        label: 'Vinhos novo mundo',
      },
      {
        href: '/vinhos/vinhos-sul-americanos',
        label: 'Vinhos sul-americanos',
      },
      {
        href: '/vinhos/vinhos-naturais',
        label: 'Vinhos naturais',
      },
    ],
  },
  preserves: {
    title: 'Nossas conservas especiais',
    image: {
      src: '/images/towfiqu-barbhuiya-ONQaaWF1EPI-unsplash.jpg',
      width: 459,
      height: 306,
      alt: 'Imagem de uma lata de conserva de sardinha em azeite aberta',
    },
    links: [
      {
        href: '/conservas/conservas-nacionais',
        label: 'Conservas nacionais',
      },
      {
        href: '/conservas/conservas-importadas',
        label: 'Conservas importadas',
      },
      {
        href: '/conservas/conservas-veganos',
        label: 'Conservas veganos',
      },
      {
        href: '/conservas/conservas-organicos',
        label: 'Conservas orgânicos',
      },
      {
        href: '/conservas/conservas-vegetarianos',
        label: 'Conservas vegetarianos',
      },
    ],
  },
  all: {
    title: '',
    image: {
      src: '/images/janko-ferlic-uayYTomQ5r8-unsplash.jpg',
      width: 693,
      height: 491,
      alt: 'Imagem de tomates pequenos ainda no pé',
    },
    links: [
      {
        href: '/todos-os-produtos/novos-produtos',
        label: 'Novos produtos',
      },
      {
        href: '/todos-os-produtos/mais-vendidos',
        label: 'Mais vendidos',
      },
      {
        href: '/todos-os-produtos/programas-assinatura',
        label: 'Programas assinatura',
      },
      {
        href: '/todos-os-produtos/acessorios',
        label: 'Acessórios',
      },
      {
        href: '/todos-os-produtos/compre-todos',
        label: 'Compre todos',
      },
    ],
  },
};
