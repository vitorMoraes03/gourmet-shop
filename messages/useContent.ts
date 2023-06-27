import { useTranslations } from 'next-intl';

export function useContent() {
  const t = useTranslations('Index');

  return {
    header: {
      logo: t('header.logo'),
      nav: {
        links: {
          blog: t('header.nav.links.blog'),
          wines: t('header.nav.links.wines'),
          preserves: t('header.nav.links.preserves'),
          cheeses: t('header.nav.links.cheeses'),
          all: t('header.nav.links.all'),
        },
        blog: {
          title: t('header.nav.blog.title'),
          link1: t('header.nav.blog.link1'),
          link2: t('header.nav.blog.link2'),
          link3: t('header.nav.blog.link3'),
          link4: t('header.nav.blog.link4'),
          link5: t('header.nav.blog.link5'),
        },
        wines: {
          title: t('header.nav.wines.title'),
          link1: t('header.nav.wines.link1'),
          link2: t('header.nav.wines.link2'),
          link3: t('header.nav.wines.link3'),
          link4: t('header.nav.wines.link4'),
          link5: t('header.nav.wines.link5'),
        },
        preserves: {
          title: t('header.nav.preserves.title'),
          link1: t('header.nav.preserves.link1'),
          link2: t('header.nav.preserves.link2'),
          link3: t('header.nav.preserves.link3'),
          link4: t('header.nav.preserves.link4'),
          link5: t('header.nav.preserves.link5'),
        },
        cheeses: {
          title: t('header.nav.cheeses.title'),
          link1: t('header.nav.cheeses.link1'),
          link2: t('header.nav.cheeses.link2'),
          link3: t('header.nav.cheeses.link3'),
          link4: t('header.nav.cheeses.link4'),
          link5: t('header.nav.cheeses.link5'),
        },
        all: {
          title: t('header.nav.all.title'),
          link1: t('header.nav.all.link1'),
          link2: t('header.nav.all.link2'),
          link3: t('header.nav.all.link3'),
          link4: t('header.nav.all.link4'),
          link5: t('header.nav.all.link5'),
        },
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
            {
              href: t(
                'header.dropdown.cheeses.links.4.href'
              ),
              label: t(
                'header.dropdown.cheeses.links.4.label'
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
            {
              href: t('header.dropdown.wines.links.4.href'),
              label: t(
                'header.dropdown.wines.links.4.label'
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
            {
              href: t(
                'header.dropdown.preserves.links.3.href'
              ),
              label: t(
                'header.dropdown.preserves.links.3.label'
              ),
            },
            {
              href: t(
                'header.dropdown.preserves.links.4.href'
              ),
              label: t(
                'header.dropdown.preserves.links.4.label'
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
          bgColor: t('main.carousel.0.bg-color'),
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
          bgColor: t('main.carousel.1.bg-color'),
          button: t('main.carousel.1.button'),
        },
      ],
    },
  };
}

export interface HeaderProps {
  logo: string;
  nav: {
    links: {
      blog: string;
      wines: string;
      preserves: string;
      cheeses: string;
      all: string;
    };
    blog: {
      title: string;
      link1: string;
      link2: string;
      link3: string;
      link4: string;
      link5: string;
    };
    wines: {
      title: string;
      link1: string;
      link2: string;
      link3: string;
      link4: string;
      link5: string;
    };
    preserves: {
      title: string;
      link1: string;
      link2: string;
      link3: string;
      link4: string;
      link5: string;
    };
    cheeses: {
      title: string;
      link1: string;
      link2: string;
      link3: string;
      link4: string;
      link5: string;
    };
    all: {
      title: string;
      link1: string;
      link2: string;
      link3: string;
      link4: string;
      link5: string;
    };
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
