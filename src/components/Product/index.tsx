import { useState, Key } from 'react';
import { Product } from '../../data/types';
import { ProductContainer, ProductContent } from './styles';

interface ProductComponentProps {
  selectedProduct: Product;
  key: Key
}

export default function ProductComponent({
  selectedProduct,
}: ProductComponentProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { title, subtitle, description, info, img } = selectedProduct;

  const handleLoading = () => {
    setIsLoaded(true);
  };

  const loadedClassName = isLoaded? 'loaded' : '';

  return (
    <ProductContainer>
      <ProductContent>
        <div className='title'>
          <h2>SNEAKER</h2>
          <span>{title}</span>
        </div>
        <div className='subtitle'>
          <span>{subtitle}</span>
        </div>
        <p className='description'>{description}</p>
        <div className='info'>
          <p>SKU: {info.sku1}</p>
          {info.sku2 && <p>SKU: {info.sku2}</p>}
          {info.releaseDate && <p>Release date: {info.releaseDate}</p>}
          {info.colorWay && <p>Colorway: {info.colorWay}</p>}
        </div>
      </ProductContent>
      {!isLoaded && <h2 className={loadedClassName}>...Loading</h2>}
      <img src={img} className={loadedClassName} alt={subtitle} onLoad={handleLoading} />
    </ProductContainer>
  );
}
