import { useStateContext } from "../../contexts/StateContext";
import CurrencyFormatter from "../../utils/currencyFormatter";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const {
    showCart,
    handleShowCart,
    totalQty,
    qty,
    cartItems,
    totalPrice,
    handleRemoveFromCart,
    handleCartQuantity,
    wishlistItems,
  } = useStateContext();

  console.log("cart-items", cartItems);
  console.log("Wishlist", wishlistItems);

  return (
    <article
      className={`${
        showCart
          ? "translate-x-0 transition-transform duration-200 ease-linear sm:w-full"
          : "-translate-x-[10000rem]"
      } absolute right-0 top-0 z-50 h-screen space-y-9 overflow-y-scroll bg-[var(--color-light-gray)] px-6 pb-10 pt-7 text-sm font-normal text-primary-black shadow-sm shadow-black sm:px-3 sm:py-4`}
    >
      <header className="flex items-center justify-between gap-8 sm:gap-3">
        <p className="text-lg xs:text-[1rem]">
          Your shopping cart items ({totalQty})
        </p>
        <button data-message="close the cart items side-bar">
          <AiFillCloseSquare
            fontSize="22px"
            className="font-thin"
            role="button"
            aria-description="icon to close the cart items side-bar"
            onClick={handleShowCart}
          />
        </button>
      </header>
      <div>
        {/* Cart-item list */}
        <CartItem
          cartProducts={cartItems}
          quantity={qty}
          handleRemove={handleRemoveFromCart}
          handleShowCart={handleShowCart}
          handleCartQuantity={handleCartQuantity}
        />
      </div>
      {totalPrice >= 1 && (
        <>
          {/* divider line */}
          <div className="flex border-[0.8px] border-dashed border-primary-black"></div>

          <div className="mt-auto grid w-full grid-cols-[repeat(2,minmax(max-content,1fr))] grid-rows-[min-content,min-content] gap-x-4 gap-y-3">
            <p className="col-[1/2] row-[1/2] text-lg">
              Total Price for {totalQty} {`${totalQty > 1 ? "Items" : "Item"}`}
            </p>
            <Link
              title="buy now"
              // link="/NotFound"
              to="/payment/checkout"
              className="col-start-2 col-end-3 row-[1/3] ml-auto block justify-items-center self-center rounded-sm bg-primary-black px-6 py-3 text-center text-2xl text-primary-white transition ease-out hover:bg-primary-darkGray hover:shadow-sm hover:shadow-primary-darkGray sm:px-4 sm:py-2"
            >
              buy now
            </Link>
            <p className="col-[1/2] row-[2/3] flex justify-self-start text-2xl text-primary-black sm:text-2xl">
              {CurrencyFormatter("en-US", totalPrice)}
            </p>
          </div>
        </>
      )}
    </article>
  );
};

export default Cart;
