import CartItem from './CartItem';
import AllSelectCheckBox from './AllSelectCheckBox';
import { useCartContext } from '../context/CartContext';
import CheckAndDelete from './CheckAndDelete';
import CartItemImageAndInfo from './CartItemImageAndInfo';
import CountButton from './CountButton';
import styles from './cartItemImageAndInfo.module.css';

export default function CartList() {
  const { allCartItems } = useCartContext();

  return (
    <>
      <AllSelectCheckBox />
      <ul>
        {allCartItems.map((cartItem) => {
          return (
            <CartItem key={cartItem.id}>
              <CheckAndDelete id={cartItem.id} />
              <CartItemImageAndInfo
                className={styles.itemImageAndInfoContainer}
                imageUrl={cartItem.product.imageUrl}
                name={cartItem.product.name}
                price={cartItem.product.price}
              >
                <CountButton id={cartItem.id} />
              </CartItemImageAndInfo>
            </CartItem>
          );
        })}
      </ul>
    </>
  );
}
