import { createContext, useContext } from 'react';

export interface ProductI {
  id: string;
  name: string;
  description: string;
  image: string;
  price: {
    amount: string;
    currency: string;
  };
}

const ProductContext = createContext<ProductI[]>([]);

export const ProductContextProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: ProductI[];
}) => (
  <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
);

export const useProductContext = () => {
  const productsData = useContext(ProductContext);
  return productsData;
};
