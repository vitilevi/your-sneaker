import { useState, useEffect } from 'react';
import productList from '../../data/product';
import ProductComponent from '../Product';
import { Product } from '../../data/index';
import ArrowImage from '../../assets/arrow-down.png';
import './styles.scss';

export default function MainContent() {
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState<Product>(productList[selectedProductIndex]);
  const [animateClass, setAnimateClass] = useState<string>('animate-up');

  useEffect(() => {
    setSelectedProduct(productList[selectedProductIndex]);
  }, [selectedProductIndex]);

  return (
    <main>
      <div className="carousel">
        <div className="content">
          <ProductComponent animateClass={animateClass} selectedProduct={selectedProduct} />
        </div>
        <div className="selectors">
          {selectedProductIndex !== 0 &&
            <button onClick={() => {
              if(selectedProductIndex !== 0) {
                setSelectedProductIndex(selectedProductIndex - 1);
                setAnimateClass('animate-down');
              }
            }}>
              <img className="selector-up" src={ArrowImage} alt="selector-up"></img>
            </button>
          }
          <h1 className='counter'>
            {(selectedProductIndex + 1).toString().padStart(2, '0')}
          </h1>
          {productList.length - 1 !== selectedProductIndex &&
            <button onClick={() => {
              if(selectedProductIndex !== productList.length - 1) {
                setSelectedProductIndex(selectedProductIndex + 1);
                setAnimateClass('animate-up');
              }
            }}>
              <img className="selector-down" src={ArrowImage} alt="selector-down"></img>
            </button>
          }
        </div>
      </div>
    </main>
  )
}
