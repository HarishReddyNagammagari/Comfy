import { formatPrice, generateAmountOptions } from "../utils";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItems = ({ cartItem }) => {
  const { title, price, image, amount, company, productColor, cartId } =
    cartItem;

  const dispatch = useDispatch();
  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartId }));
  };

  const handleAmount = (e) => {
    dispatch(editItem({ cartId, amount: parseInt(e.target.value) }));
  };    

  return (
    <article
      key={cartId}
      className="mt-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/**IMAGE */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/*INFO*/}

      <div className="sm:ml-16 sm:w-48">
        {/**COLOR */}
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="capitalize text-sm text-neutral-content">{company}</h4>
        <p className="mt-2 flex text-sm capitalize gap-x-2 items-center ">
          color :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          >
            {" "}
          </span>
        </p>
      </div>
      <div className="sm:ml-12">
        {/**AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmount}
            className="mt-2 select select-base select-bordered select-xs"
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        <button
          className="mt-2 link link-primary link-hover x-sm"
          onChange={removeItemFromTheCart}
        >
          remove
        </button>
        {/**REMOVE */}
      </div>
      {/**PRICE */}
      <p className="font-medium sm:ml-auto ">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItems;
