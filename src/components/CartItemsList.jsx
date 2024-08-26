import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const CartItemsList = () => {

  const cartItems = useSelector((state) => state.cartState.cartItems);


  return (
    <>
     {
        cartItems.map((item) => {
          return <CartItems key={item.cartId}  cartItem = {item}/>
        })
     }
    </>
  )
}

export default CartItemsList
