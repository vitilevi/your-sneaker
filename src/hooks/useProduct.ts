import { useState, useEffect, useCallback } from 'react';
import { Product } from '../data/types';
import productList from '../data/product';
import { useFilterContext } from '../context/filterContext';

export default function useProduct() {
  const { filter } = useFilterContext();
  const [index, setIndex] = useState<number>(0);
  const productListFiltered = productList.filter((product) => {
    if (filter) {
      return product.genre.includes(filter);
    }
    return product;
  });

  const [selectedProduct, setSelectedProduct] = useState<Product>(
    productListFiltered[index]
  );

  useEffect(() => {
    setSelectedProduct(productListFiltered[index]);
  }, [index, productListFiltered]);

  useEffect(() => {
    setIndex(0);
    setSelectedProduct(productListFiltered[0]);
  }, [filter, productListFiltered]);

  const selectIndex = useCallback(
    (index: number) => setIndex(index),
    [setIndex]
  );

  return {
    selectedProduct,
    index,
    productListFiltered,
    selectIndex,
  };
}
