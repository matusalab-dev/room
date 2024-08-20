import { NavLinkList } from "../navbar/NavList";
import { NavLink } from "react-router-dom";
import CurrencyFormatter from "../../utils/currencyFormatter";
import { AiOutlineDelete } from "react-icons/ai";

const WishlistItem = ({
  wishlistProducts,
  handleRemoveWishlist,
  handleShowWishlist,
  handleAddToCart,
}) => {
  return (
    <div className="space-y-4">
      {/* check if the cart is empty , tell them to go shopping*/}
      {wishlistProducts.length < 1 && (
        <div className="flex flex-col items-center justify-center gap-6 text-[1rem]">
          <h2 className=""> your wish-list is empty</h2>
          <NavLinkList
            title="go back to shopping"
            link="../shopping"
            onClick={handleShowWishlist}
            className="inline-block items-start self-center bg-primary-black px-3 py-2 text-primary-white"
          ></NavLinkList>
        </div>
      )}

      {/* if it's not empty, render it out. */}
      {wishlistProducts.length >= 1 &&
        wishlistProducts.map((wishlistItem) => {
          const { id, imageUrl, name, price, quantity } = wishlistItem;

          return (
            <div
              key={id}
              className="hover:shadow-primary-dark-gray grid grid-cols-[7.7em,minmax(max-content,max-content),minmax(max-content,100%)] grid-rows-[repeat(2,min-content)] justify-items-start gap-x-5 gap-y-7 bg-primary-white px-6 py-6 font-normal hover:shadow-md sm:gap-x-3 sm:px-3 sm:py-3 xs:grid-cols-[6.7em,minmax(max-content,max-content),minmax(max-content,100%)]"
            >
              <img
                src={imageUrl}
                alt="cart product"
                className="col-[1/2] row-[1/3] h-full w-full max-w-full bg-primary-black object-cover"
              />
              <NavLink
                title={name}
                to={`/shopping/${wishlistItem.id}`}
                className="col-[2/3] max-w-[18ch] place-items-start whitespace-nowrap break-keep p-0 text-[1rem] capitalize sm:max-w-[11ch] sm:text-sm xs:overflow-hidden xs:text-ellipsis"
                onClick={() => handleShowWishlist(false)}
              >
                {name}
              </NavLink>
              <p className="col-[3/4] place-self-end self-start text-[1rem] sm:text-sm">
                {CurrencyFormatter("en-US", price)}
              </p>

              <button
                className="mr-auto w-full max-w-[5rem] self-end bg-primary-darkGray p-1 text-primary-white"
                onClick={() => handleAddToCart(wishlistItem, quantity)}
              >
                Add to cart
              </button>
              <button
                className="ml-auto self-end"
                onClick={() => handleRemoveWishlist(wishlistItem)}
              >
                <AiOutlineDelete fontSize="17px" fontWeight="100" />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default WishlistItem;
