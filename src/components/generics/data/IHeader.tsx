import { ReactNode } from "react";

export interface IHeader {
  logo: ReactNode;
  links: ILinks[];
  backgroundColor?: string;
  textColor?: string;
  menuBtnColor?: string;
  contactBtnColor?: string;
  contactBtnColorText?: string;
}

interface ILinks {
  label: string;
  link: string;
}
