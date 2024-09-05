export interface IHeader {
  home: string;
  blog: string;
  "how.we.do.it": string;
  "contact-us": string;
  alt: ILogo;
}

interface ILogo {
  img: string;
}

interface INotFound {
  title: string;
  subtitle: string;
  img: string;
}

interface IFooterText {
  title: string;
  texts: string[];
}

interface IFooterImg {
  imgs: string[];
}

interface IFooter {
  columns: IFooterText[];
  alt: IFooterImg;
}

interface ILink {
  label: string;
  link: string;
}

interface ILinksGroup {
  name: string;
  links: ILink[];
}

export interface ILinks {
  header: ILinksGroup;
  redes: ILinksGroup;
}

interface IText {
  header: IHeader;
  "not-found": INotFound;
  footer: IFooter;
  links: ILinks;
}

export const Data: IText = {
  header: {
    home: "HOME",
    blog: "BLOG",
    "how.we.do.it": "COMPANY",
    "contact-us": "CONTACT US",
    alt: {
      img: "Header cavepot logo",
    },
  },
  "not-found": {
    title: "404",
    subtitle: "The page that you requested could not be found.",
    img: "Not found image page",
  },
  footer: {
    columns: [
      {
        title: "COMPANY",
        texts: [
          "Home",
          "What is Cavepot",
          "What do we do",
          "How we do it",
          "What our clients say",
        ],
      },
      {
        title: "Connect with us",
        texts: ["Instagram", "Facebook", "Twitter", "Linkedin", "Github"],
      },
      {
        title: "Locate us",
        texts: [
          "Pablo de Maria 1122,",
          "Montevideo, Uruguay",
          "info@cavepot.com",
        ],
      },
    ],
    alt: {
      imgs: ["Footer cavepot logo", "Footer cavepot lab logo"],
    },
  },
  links: {
    header: {
      name: "Header links",
      links: [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Blog",
          link: "https://blog.cavepot.com/",
        },
        {
          label: "Our Company",
          link: "https://cavepot.com",
        },
        {
          label: "Contact us",
          link: "https://cavepot.com/contact",
        },
      ],
    },
    redes: {
      name: "redes links",
      links: [
        {
          label: "Instagram",
          link: "https://www.instagram.com/cavepotuy/",
        },
        {
          label: "Facebook",
          link: "https://www.facebook.com/Cavepot",
        },
        {
          label: "Twitter",
          link: "https://twitter.com/Cavepot",
        },
        {
          label: "Linkedin",
          link: "https://www.linkedin.com/company/cavepot",
        },
        {
          label: "Github",
          link: "https://github.com/cavepotcode/",
        },
      ],
    },
  },
};
