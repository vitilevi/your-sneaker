import { useCallback, useMemo } from 'react';
import ProductComponent from '../Product';
import useProduct from '../../hooks/useProduct';
import CarouselArrow from './Carrousel-arrow';
import { CarouselContainer, CarouselSelectors } from './styles';
import { DIRECTION_LEFT, DIRECTION_RIGHT } from '../../utils/consts';

export default function MainContent() {
  const {
    productListFiltered,
    selectedProduct,
    selectIndex,
    index: productIndex,
  } = useProduct();

  const handlePreviousProduct = useCallback(() => {
    if (productIndex !== 0) {
      selectIndex(productIndex - 1);
    }
  }, [selectIndex, productIndex]);

  const handleNextProduct = useCallback(() => {
    if (productIndex !== productListFiltered.length - 1) {
      selectIndex(productIndex + 1);
    }
  }, [selectIndex, productIndex, productListFiltered]);

  const productDisplayPosition = (productIndex + 1).toString().padStart(2, '0');

  return (
    <main>
      <CarouselContainer>
        <ProductComponent selectedProduct={selectedProduct} />
        <CarouselSelectors>
          <CarouselArrow
            direction={DIRECTION_LEFT}
            callback={handlePreviousProduct}
            showButton={useMemo(() => productIndex !== 0, [productIndex])}
          />
          <h1 className='counter'>{productDisplayPosition}</h1>
          <CarouselArrow
            direction={DIRECTION_RIGHT}
            callback={handleNextProduct}
            showButton={useMemo(
              () => productListFiltered?.length - 1 !== productIndex,
              [productIndex, productListFiltered]
            )}
          />
        </CarouselSelectors>
      </CarouselContainer>
    </main>
  );
}
