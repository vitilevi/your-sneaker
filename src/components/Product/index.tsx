import { useState } from 'react';
import { Product } from '../../data/types';
import { ProductContainer, ProductContent, ProductImage } from './styles';
import useContainerSize from '../../hooks/useContainerSize';

interface ProductComponentProps {
  selectedProduct: Product;
}

export default function ProductComponent({
  selectedProduct,
}: ProductComponentProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id, title, subtitle, description, info, img } = selectedProduct;

  const handleLoading = () => {
    setIsLoading(false);
  };

  return (
    <ProductContainer key={id}>
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
      {isLoading && <h2>...Loading</h2>}
      <img src={img} alt={subtitle} loading='lazy' onLoad={handleLoading} />
    </ProductContainer>
  );
}
