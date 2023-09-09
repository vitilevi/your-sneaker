export type Product = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  info: {
    sku1: string;
    sku2?: string;
    releaseDate?: string;
    colorWay?: string;
  };
  img: string;
};

