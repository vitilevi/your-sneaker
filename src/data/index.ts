import sneaker0 from '../assets/sneaker0.png';
import sneaker1 from '../assets/sneaker1.png';
import sneaker2 from '../assets/sneaker2.png';
import sneaker3 from '../assets/sneaker3.png';

export {
  sneaker0,
  sneaker1,
  sneaker2,
  sneaker3,
};

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  info: {
    sku1?: string;
    sku2?: string;
    releaseDate?: string;
    colorWay?: string;
  };
  img: string;
}

