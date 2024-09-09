import { IFooter } from "../components/generics/footer/data/IFooter";
import { AllImages } from ".";

export const footerLab: IFooter = {
  columns: [
    {
      title: "Company",
      type: "company",
      texts: [
        { link: "/", label: "Home" },
        { link: "https://blog.cavepot.com/", label: "Blog" },
        { link: "https://cavepot.com", label: "Our Company" },
        { link: "https://cavepot.com/contact", label: "Contact us" },
      ],
    },
    {
      title: "Locate Us",
      type: "locate",
      texts: [
        { label: "Pablo de Maria 1122, Montevideo, Uruguay" },
        { link: "mailto:info@cavepot.com", label: "info@cavepot.com" },
      ],
    },
  ],
  imgs: {
    img1: AllImages.LogoCPBlanco,
    img2: AllImages.CavepotLabLogo,
  },
  redes: {
    links: [
      {
        link: "https://www.instagram.com/cavepotuy/",
        label: "Instagram",
      },
      {
        link: "https://www.facebook.com/Cavepot",
        label: "Facebook",
      },
      {
        link: "https://twitter.com/Cavepot",
        label: "Twitter",
      },
      {
        link: "https://www.linkedin.com/company/cavepot",
        label: "Linkedin",
      },
      {
        link: "https://github.com/cavepotcode/",
        label: "Github",
      },
    ],
  },
};
