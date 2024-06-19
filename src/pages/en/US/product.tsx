import { ProductContainer } from 'src/components/Product';
import { ProductContextProvider } from 'src/context/Product';
import { Layout } from '../../../components/Layout';

// eslint-disable-next-line jest/no-mocks-import
import productsJson from '../../../../__mocks__/products.json';

const Product = () => (
  <Layout>
    <ProductContextProvider value={productsJson}>
      <ProductContainer />
    </ProductContextProvider>
  </Layout>
);

export default Product;
