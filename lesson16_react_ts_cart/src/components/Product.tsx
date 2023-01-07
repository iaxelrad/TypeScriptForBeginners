import { ProductType } from '../context/ProductsProvider';
import { ReducerAction, ReducerActionType } from '../context/CartProvider';
import { ReactElement } from 'react';

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  // const img: string = require(`../images/${product.sku}.jpg`); // Won't work with Vite
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href; //Will work with Vite & create-react-app
  console.log(img);

  return <div>Product</div>;
};
export default Product;
