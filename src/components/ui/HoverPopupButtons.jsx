import { FaRegEye, FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import { useStateContext } from "../../contexts/StateContext";

const hoverPopupButtons = (currentProduct) => {
  const { handleAddToCart, handleAddToWishlist, qty } = useStateContext();

  // replace width with w-28 if you have more than one buttons
  return (
    <div className="z-[100] absolute flex justify-between px-4 py-2 mx-auto top-full left-1/3 w-28 bg-primary-white">
      <button
        role="button"
        disabled={currentProduct.inCart}
        title={`${
          currentProduct.inCart
            ? "product is already in the cart"
            : "add to cart"
        }`}
        onClick={() => handleAddToCart(currentProduct, qty)}
      >
        <FaShoppingBasket
          fontWeight="100"
          className="text-base font-thin text-primary-darkGray"
        />
      </button>

      <button
        role="button"
        disabled={currentProduct.inWishlist}
        title="add to wish list"
        onClick={() => handleAddToWishlist(currentProduct, qty)}
      >
        {/* if the product is in wish-list, make Icon filled heart */}
        {/* {currentProduct.inWishlist ? (
          <FaHeart
            fontWeight="100"
            size="20"
            className="text-base font-thin text-primary-darkgray"
          />
        ) : ( */}
        <FaRegHeart
          fontWeight="100"
          size="16"
          className="text-base font-thin text-primary-darkGray"
        />
        {/* )} */}
      </button>

      <button
        role="button"
        title="views"
        onClick={() => console.log("loved it!")}
      >
        <FaRegEye
          fontWeight="100"
          size="20"
          className="text-base font-thin text-primary-darkGray"
        />
      </button>
    </div>
  );
};

export default hoverPopupButtons;
