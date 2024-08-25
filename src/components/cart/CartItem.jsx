import { NavLink } from "react-router-dom";

import { NavLinkList } from "../navbar/NavList";
import CurrencyFormatter from "../../utils/currencyFormatter";

import { AiOutlineDelete } from "react-icons/ai";
import CartQuantity from "../cart/CartQuantity";
// import CartQuantity from "./CartQuantity";

const CartItem = ({
  cartProducts,
  handleRemove,
  handleShowCart,
  handleCartQuantity,
}) => {
  return (
    <div className="space-y-4">
      {/* check if the cart is empty, tell them to go shopping*/}
      {cartProducts.length < 1 && (
        <div className="flex flex-col items-center justify-center gap-6 text-[1rem]">
          <h2> your shopping bug is empty</h2>
          <NavLinkList
            title="go back to shopping"
            link="../shopping"
            onClick={handleShowCart}
            className="items-start self-center inline-block px-3 py-2 bg-primary-black text-primary-white"
          ></NavLinkList>
        </div>
      )}

      {/* if it's not empty, render it out. */}
      {cartProducts.length >= 1 &&
        cartProducts.map((cartItem) => {
          const { id, imageUrl, name, price, quantity } = cartItem;

          return (
            <div
              key={id}
              className="group hover:shadow-primary-dark-gray grid grid-cols-[7.7em,minmax(max-content,max-content),minmax(max-content,100%)] grid-rows-[repeat(2,min-content)] justify-items-start gap-x-5 gap-y-7 bg-primary-white px-6 py-6 font-normal hover:shadow-md sm:gap-x-3 sm:px-3 sm:py-3 xs:grid-cols-[6.7em,minmax(max-content,max-content),minmax(max-content,100%)]"
            >
              <img
                src={imageUrl}
                alt="cart product"
                className="col-[1/2] row-[1/3] h-full w-full max-w-full bg-primary-black object-cover"
              />
              <NavLink
                title={name}
                to={`/shopping/${cartItem.id}`}
                onClick={() => handleShowCart(false)}
                className="group-hover:underline col-[2/3] max-w-[18ch] place-items-start whitespace-nowrap break-keep text-[1rem] capitalize sm:max-w-[10ch] sm:text-sm xs:overflow-hidden xs:text-ellipsis"
              >
                {name}
              </NavLink>
              <p className="col-[3/4] place-self-end self-start text-[1rem] sm:text-sm">
                {CurrencyFormatter("en-US", price)}
              </p>
              <CartQuantity
                incrementQuantity={() => handleCartQuantity(id, "inc")}
                decrementQuantity={() => handleCartQuantity(id, "dec")}
                quantity={quantity}
              />
              <button
                className="self-end ml-auto"
                onClick={() => handleRemove(cartItem, quantity)}
              >
                <AiOutlineDelete fontSize="17px" fontWeight="100" />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default CartItem;
