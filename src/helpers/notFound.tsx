interface INotFoundItem {
  title: string;
  subtitle: string;
  img: string;
}
export interface INotFound {
  "not-found": INotFoundItem;
}

export const NotFound: INotFound = {
  "not-found": {
    title: "404",
    subtitle: "The page that you requested could not be found.",
    img: "Not found image page",
  }
};
