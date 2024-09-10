import { ReactNode } from "react";

export interface IHeader {
  logo: ReactNode;
  links: ILinks[];
}

interface ILinks {
  label: string;
  link: string;
}
