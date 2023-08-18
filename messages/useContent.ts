import { useTranslations } from 'next-intl';

export function useContent() {
  const t = useTranslations('Index');

  return {
    header: {
      logo: t('header.logo'),
      nav: {
        links: {
          // blog: t('header.nav.links.blog'),
          wines: t('header.nav.links.wines'),
          preserves: t('header.nav.links.preserves'),
          cheeses: t('header.nav.links.cheeses'),
        },
        allProducts: t('header.nav.allProducts'),
      },
      dropdown: {
        blog: {
          title: t('header.dropdown.blog.title'),
          image: {
            src: t('header.dropdown.blog.image.src'),
            width: t('header.dropdown.blog.image.width'),
            height: t('header.dropdown.blog.image.height'),
            alt: t('header.dropdown.blog.image.alt'),
            title: t('header.dropdown.blog.image.title'),
            text: t('header.dropdown.blog.image.text'),
            subtitle: t(
              'header.dropdown.blog.image.subtitle'
            ),
          },
          links: [
            {
              href: t('header.dropdown.blog.links.0.href'),
              label: t(
                'header.dropdown.blog.links.0.label'
              ),
            },
            {
              href: t('header.dropdown.blog.links.1.href'),
              label: t(
                'header.dropdown.blog.links.1.label'
              ),
            },
            {
              href: t('header.dropdown.blog.links.2.href'),
              label: t(
                'header.dropdown.blog.links.2.label'
              ),
            },
            {
              href: t('header.dropdown.blog.links.3.href'),
              label: t(
                'header.dropdown.blog.links.3.label'
              ),
            },
            {
              href: t('header.dropdown.blog.links.4.href'),
              label: t(
                'header.dropdown.blog.links.4.label'
              ),
            },
          ],
        },
        cheeses: {
          title: t('header.dropdown.cheeses.title'),
          image: {
            src: t('header.dropdown.cheeses.image.src'),
            width: t('header.dropdown.cheeses.image.width'),
            height: t(
              'header.dropdown.cheeses.image.height'
            ),
            alt: t('header.dropdown.cheeses.image.alt'),
            title: t('header.dropdown.cheeses.image.title'),
            text: t('header.dropdown.cheeses.image.text'),
            subtitle: t(
              'header.dropdown.cheeses.image.subtitle'
            ),
          },
          links: [
            {
              href: t(
                'header.dropdown.cheeses.links.0.href'
              ),
              label: t(
                'header.dropdown.cheeses.links.0.label'
              ),
            },
            {
              href: t(
                'header.dropdown.cheeses.links.1.href'
              ),
              label: t(
                'header.dropdown.cheeses.links.1.label'
              ),
            },
            {
              href: t(
                'header.dropdown.cheeses.links.2.href'
              ),
              label: t(
                'header.dropdown.cheeses.links.2.label'
              ),
            },
            {
              href: t(
                'header.dropdown.cheeses.links.3.href'
              ),
              label: t(
                'header.dropdown.cheeses.links.3.label'
              ),
            },
          ],
        },
        wines: {
          title: t('header.dropdown.wines.title'),
          image: {
            src: t('header.dropdown.wines.image.src'),
            width: t('header.dropdown.wines.image.width'),
            height: t('header.dropdown.wines.image.height'),
            alt: t('header.dropdown.wines.image.alt'),
            title: t('header.dropdown.wines.image.title'),
            text: t('header.dropdown.wines.image.text'),
            subtitle: t(
              'header.dropdown.wines.image.subtitle'
            ),
          },
          links: [
            {
              href: t('header.dropdown.wines.links.0.href'),
              label: t(
                'header.dropdown.wines.links.0.label'
              ),
            },
            {
              href: t('header.dropdown.wines.links.1.href'),
              label: t(
                'header.dropdown.wines.links.1.label'
              ),
            },
            {
              href: t('header.dropdown.wines.links.2.href'),
              label: t(
                'header.dropdown.wines.links.2.label'
              ),
            },
            {
              href: t('header.dropdown.wines.links.3.href'),
              label: t(
                'header.dropdown.wines.links.3.label'
              ),
            },
          ],
        },
        preserves: {
          title: t('header.dropdown.preserves.title'),
          image: {
            src: t('header.dropdown.preserves.image.src'),
            width: t(
              'header.dropdown.preserves.image.width'
            ),
            height: t(
              'header.dropdown.preserves.image.height'
            ),
            alt: t('header.dropdown.preserves.image.alt'),
            title: t(
              'header.dropdown.preserves.image.title'
            ),
            text: t('header.dropdown.preserves.image.text'),
            subtitle: t(
              'header.dropdown.preserves.image.subtitle'
            ),
          },
          links: [
            {
              href: t(
                'header.dropdown.preserves.links.0.href'
              ),
              label: t(
                'header.dropdown.preserves.links.0.label'
              ),
            },
            {
              href: t(
                'header.dropdown.preserves.links.1.href'
              ),
              label: t(
                'header.dropdown.preserves.links.1.label'
              ),
            },
            {
              href: t(
                'header.dropdown.preserves.links.2.href'
              ),
              label: t(
                'header.dropdown.preserves.links.2.label'
              ),
            },
          ],
        },
        all: {
          title: t('header.dropdown.all.title'),
          image: {
            src: t('header.dropdown.all.image.src'),
            width: t('header.dropdown.all.image.width'),
            height: t('header.dropdown.all.image.height'),
            alt: t('header.dropdown.all.image.alt'),
            title: t('header.dropdown.all.image.title'),
            text: t('header.dropdown.all.image.text'),
            subtitle: t(
              'header.dropdown.all.image.subtitle'
            ),
          },
          links: [
            {
              href: t('header.dropdown.all.links.0.href'),
              label: t('header.dropdown.all.links.0.label'),
            },
            {
              href: t('header.dropdown.all.links.1.href'),
              label: t('header.dropdown.all.links.1.label'),
            },
            {
              href: t('header.dropdown.all.links.2.href'),
              label: t('header.dropdown.all.links.2.label'),
            },
            {
              href: t('header.dropdown.all.links.3.href'),
              label: t('header.dropdown.all.links.3.label'),
            },
            {
              href: t('header.dropdown.all.links.4.href'),
              label: t('header.dropdown.all.links.4.label'),
            },
          ],
        },
      },
      banner: [
        {
          span: t('header.banner.0.span'),
          text: t('header.banner.0.text'),
        },
        {
          span: t('header.banner.1.span'),
          text: t('header.banner.1.text'),
        },
      ],
    },
    main: {
      carousel: [
        {
          src: t('main.carousel.0.src'),
          alt: t('main.carousel.0.alt'),
          width: t('main.carousel.0.width'),
          height: t('main.carousel.0.height'),
          paragraph: t('main.carousel.0.paragraph'),
          text: t('main.carousel.0.text'),
          title: t('main.carousel.0.title'),
          bgColor: t('main.carousel.0.bgColor'),
          button: t('main.carousel.0.button'),
        },
        {
          src: t('main.carousel.1.src'),
          alt: t('main.carousel.1.alt'),
          width: t('main.carousel.1.width'),
          height: t('main.carousel.1.height'),
          paragraph: t('main.carousel.1.paragraph'),
          text: t('main.carousel.1.text'),
          title: t('main.carousel.1.title'),
          bgColor: t('main.carousel.1.bgColor'),
          button: t('main.carousel.1.button'),
        },
      ],
      gallery: {
        title: t('main.gallery.title'),
        subtitle: t('main.gallery.subtitle'),
        images: [
          {
            src: t('main.gallery.images.0.src'),
            width: t('main.gallery.images.0.width'),
            height: t('main.gallery.images.0.height'),
            alt: t('main.gallery.images.0.alt'),
            text: t('main.gallery.images.0.text'),
          },
          {
            src: t('main.gallery.images.1.src'),
            width: t('main.gallery.images.1.width'),
            height: t('main.gallery.images.1.height'),
            alt: t('main.gallery.images.1.alt'),
            text: t('main.gallery.images.1.text'),
          },
          {
            src: t('main.gallery.images.2.src'),
            width: t('main.gallery.images.2.width'),
            height: t('main.gallery.images.2.height'),
            alt: t('main.gallery.images.2.alt'),
            text: t('main.gallery.images.2.text'),
          },
        ],
      },
      quote: {
        text: t('main.quote.text'),
        title: t('main.quote.title'),
      },
    },
    footer: {
      links: [
        {
          href: t('footer.links.0.href'),
          label: t('footer.links.0.label'),
        },
        {
          href: t('footer.links.1.href'),
          label: t('footer.links.1.label'),
        },
        {
          href: t('footer.links.2.href'),
          label: t('footer.links.2.label'),
        },
        {
          href: t('footer.links.3.href'),

          label: t('footer.links.3.label'),
        },
        {
          href: t('footer.links.4.href'),
          label: t('footer.links.4.label'),
        },
      ],
    },
    productsPage: {
      title: t('productsPage.title'),
      subtitle: t('productsPage.subtitle'),
      notFound: t('productsPage.notFound'),
      filters: {
        category: {
          title: t('productsPage.filters.category.title'),
          options: [
            {
              label: t(
                'productsPage.filters.category.options.0.label'
              ),
              value: t(
                'productsPage.filters.category.options.0.value'
              ),
            },
            {
              label: t(
                'productsPage.filters.category.options.1.label'
              ),
              value: t(
                'productsPage.filters.category.options.1.value'
              ),
            },
            {
              label: t(
                'productsPage.filters.category.options.2.label'
              ),
              value: t(
                'productsPage.filters.category.options.2.value'
              ),
            },
            {
              label: t(
                'productsPage.filters.category.options.3.label'
              ),
              value: t(
                'productsPage.filters.category.options.3.value'
              ),
            },
            {
              label: t(
                'productsPage.filters.category.options.4.label'
              ),
              value: t(
                'productsPage.filters.category.options.4.value'
              ),
            },
            {
              label: t(
                'productsPage.filters.category.options.5.label'
              ),
              value: t(
                'productsPage.filters.category.options.5.value'
              ),
            },
          ],
        },
        country: {
          title: t('productsPage.filters.country.title'),
          options: [
            {
              label: t(
                'productsPage.filters.country.options.0.label'
              ),
              value: t(
                'productsPage.filters.country.options.0.value'
              ),
            },
            {
              label: t(
                'productsPage.filters.country.options.1.label'
              ),
              value: t(
                'productsPage.filters.country.options.1.value'
              ),
            },
            {
              label: t(
                'productsPage.filters.country.options.2.label'
              ),
              value: t(
                'productsPage.filters.country.options.2.value'
              ),
            },
            {
              label: t(
                'productsPage.filters.country.options.3.label'
              ),
              value: t(
                'productsPage.filters.country.options.3.value'
              ),
            },
            {
              label: t(
                'productsPage.filters.country.options.4.label'
              ),
              value: t(
                'productsPage.filters.country.options.4.value'
              ),
            },
            {
              label: t(
                'productsPage.filters.country.options.5.label'
              ),
              value: t(
                'productsPage.filters.country.options.5.value'
              ),
            },
          ],
        },
      },
      selector: {
        first: t('productsPage.selector.first'),
        second: t('productsPage.selector.second'),
        desktop: t('productsPage.selector.desktop'),
        mobileBtn: t('productsPage.selector.mobileBtn'),
        mobileSort: t('productsPage.selector.mobileSort'),
        options: [
          {
            label: t(
              'productsPage.selector.options.0.label'
            ),
            value: t(
              'productsPage.selector.options.0.value'
            ),
          },
          {
            label: t(
              'productsPage.selector.options.1.label'
            ),
            value: t(
              'productsPage.selector.options.1.value'
            ),
          },
          {
            label: t(
              'productsPage.selector.options.2.label'
            ),
            value: t(
              'productsPage.selector.options.2.value'
            ),
          },
          {
            label: t(
              'productsPage.selector.options.3.label'
            ),
            value: t(
              'productsPage.selector.options.3.value'
            ),
          },
        ],
      },
    },
    blog: {
      header: {
        title: t('blog.header.title'),
        subtitle: t('blog.header.subtitle'),
      },
    },
    productIndividual: {
      returnLink: t('productIndividual.returnLink'),
      reviews: t('productIndividual.reviews'),
      description: t('productIndividual.description'),
      stockMsg: t('productIndividual.stockMsg'),
      purchaseInfo: {
        home: {
          span: t(
            'productIndividual.purchaseInfo.home.span'
          ),
          text: t(
            'productIndividual.purchaseInfo.home.text'
          ),
        },
        quality: {
          span: t(
            'productIndividual.purchaseInfo.quality.span'
          ),
          text: t(
            'productIndividual.purchaseInfo.quality.text'
          ),
        },
        points: {
          span: t(
            'productIndividual.purchaseInfo.points.span'
          ),
          text: t(
            'productIndividual.purchaseInfo.points.text'
          ),
        },
        delivery: {
          span: t(
            'productIndividual.purchaseInfo.delivery.span'
          ),
          text: t(
            'productIndividual.purchaseInfo.delivery.text'
          ),
        },
      },
      buttons: {
        addToCart: t('productIndividual.buttons.addToCart'),
        buyNow: t('productIndividual.buttons.buyNow'),
      },
    },
  };
}

export interface HeaderProps {
  logo: string;
  nav: {
    links: {
      // blog: string;
      wines: string;
      preserves: string;
      cheeses: string;
    };
    allProducts: string;
  };
  dropdown: {
    blog: {
      title: string;
      image: {
        src: string;
        width: string;
        height: string;
        alt: string;
        title: string;
        text: string;
        subtitle: string;
      };
      links: {
        href: string;
        label: string;
      }[];
    };
    cheeses: {
      title: string;
      image: {
        src: string;
        width: string;
        height: string;
        alt: string;
        title: string;
        text: string;
        subtitle: string;
      };
      links: {
        href: string;
        label: string;
      }[];
    };
    wines: {
      title: string;
      image: {
        src: string;
        width: string;
        height: string;
        alt: string;
        title: string;
        text: string;
        subtitle: string;
      };
      links: {
        href: string;
        label: string;
      }[];
    };
    preserves: {
      title: string;
      image: {
        src: string;
        width: string;
        height: string;
        alt: string;
        title: string;
        text: string;
        subtitle: string;
      };
      links: {
        href: string;
        label: string;
      }[];
    };
    all: {
      title: string;
      image: {
        src: string;
        width: string;
        height: string;
        alt: string;
        title: string;
        text: string;
        subtitle: string;
      };
      links: {
        href: string;
        label: string;
      }[];
    };
  };
  banner: {
    span: string;
    text: string;
  }[];
}

export interface DropdownProps {
  title: string;
  image: {
    src: string;
    width: string;
    height: string;
    alt: string;
    title: string;
    text: string;
    subtitle: string;
  };
  links: {
    href: string;
    label: string;
  }[];
}

export interface CarouselProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  paragraph: string;
  text: string;
  title: string;
  bgColor: string;
  button: string;
}

export interface GalleryProps {
  title: string;
  subtitle: string;
  images: {
    src: string;
    width: string;
    height: string;
    alt: string;
    text: string;
  }[];
}

export interface QuoteProps {
  text: string;
  title: string;
}

export interface FooterProps {
  links: {
    href: string;
    label: string;
  }[];
}

export interface ProductsProps {
  title: string;
  subtitle: string;
  notFound: string;
  filters: {
    category: {
      title: string;
      options: {
        label: string;
        value: string;
      }[];
    };
    country: {
      title: string;
      options: {
        label: string;
        value: string;
      }[];
    };
  };
  selector: {
    first: string;
    second: string;
    desktop: string;
    mobileBtn: string;
    mobileSort: string;
    options: {
      label: string;
      value: string;
    }[];
  };
}

export interface BlogProps {
  header: {
    title: string;
    subtitle: string;
  };
}

export interface ProductIndividualProps {
  returnLink: string;
  reviews: string;
  description: string;
  stockMsg: string;
  purchaseInfo: {
    home: {
      span: string;
      text: string;
    };
    quality: {
      span: string;
      text: string;
    };
    points: {
      span: string;
      text: string;
    };
    delivery: {
      span: string;
      text: string;
    };
  };
  buttons: {
    addToCart: string;
    buyNow: string;
  };
}
