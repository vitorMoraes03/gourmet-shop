import CartIcon from '../icons/cart';
import { ProductsContext } from '@/contexts/products';
import { useContext } from 'react';

function Cart() {
  const { cart } = useContext(ProductsContext);

  return (
    <div className="mt-1/2 custom-border mr-2 lg:-ml-4">
      <div className="relative">
        <CartIcon />
        {cart.length > 0 && (
          <span
            className="absolute -bottom-2 -right-1
        rounded-full bg-red-500 px-1 text-xs text-white"
          >
            {cart.length}
          </span>
        )}
      </div>
    </div>
  );
}

export default Cart;
