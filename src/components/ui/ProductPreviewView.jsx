import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { useStateContext } from "../../contexts/StateContext";
import CurrencyFormatter from "../../utils/currencyFormatter";
import { CustomContainer } from "../../layouts/CustomContainer";

import IconArrow from "../../assets/icons/IconArrow";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CartQuantity from "../cart/CartQuantity";

const ProductPreviewView = ({ productDetail, route }) => {
  const { id, name, imageVariants, imageUrl, description, price, inCart } =
    productDetail;

  const { handleInc, handleDec, qty, handleAddToCart, handleAddToWishlist } =
    useStateContext();

  const [index, setIndex] = useState(0);

  return (
    <CustomContainer
      key={id}
      className="my-12 flex max-w-[88%] justify-between font-primary lg:max-w-sm sm:max-w-sm xs:mx-0 xs:w-full xs:max-w-full"
    >
      {/* {console.log("in cart", productsDetail.inCart)} */}
      <div className="mx-auto flex items-center gap-12 lg:flex-col md:pb-8 xs:items-stretch">
        <div className="flex max-w-[26rem] flex-col items-stretch xl:shrink-0">
          <NavLink to={route} className="w-max p-0">
            <IconArrow className="rotate-180" />
          </NavLink>
          <h1 className="my-6 text-center text-2xl font-semibold capitalize sm:font-medium">
            {name}
          </h1>
          <div className="relative basis-full">
            <figure className="relative h-full w-full">
              <button
                className="absolute right-0 cursor-pointer bg-primary-black p-2"
                role="button"
                disabled={productDetail.inWishlist}
                title={`${
                  productDetail.inWishlist
                    ? "product is already in a wish-list"
                    : "add to wish list"
                }`}
                onClick={() => handleAddToWishlist(productDetail, qty)}
              >
                {/* if the product is in wish-list, make Icon filled heart */}
                {productDetail.inWishlist ? (
                  <FaHeart
                    fontWeight="100"
                    size="20"
                    className="text-base font-thin text-primary-white"
                  />
                ) : (
                  <FaRegHeart
                    fontWeight="100"
                    size="20"
                    className="text-base font-thin text-primary-white"
                  />
                )}
              </button>
              <img
                src={
                  imageVariants[index] === imageUrl
                    ? imageVariants[0]
                    : imageVariants[index]
                }
                // src={productsDetail.imageUrl}
                alt={name}
                className="z-10 block h-72 w-full max-w-full rounded-sm object-cover xs:h-[16rem]"
              />
              <div className="mt-2 flex justify-between gap-1 overflow-x-scroll">
                {imageVariants.map((el, i) => {
                  return (
                    <img
                      src={el}
                      key={i}
                      alt={name}
                      onMouseEnter={() => setIndex(i)}
                      onMouseLeave={() => setIndex(0)}
                      className="z-10 block h-16 w-20 rounded-sm object-cover"
                    />
                  );
                })}
              </div>
            </figure>
          </div>
        </div>
        <div key={id} className="flex flex-col space-y-10 xs:basis-full">
          <p className="max-w-[50ch] text-left text-sm text-primary-darkGray xs:max-w-[39ch]">
            {description}
          </p>
          <div className="flex items-center justify-between gap-8 xs:flex-col xs:items-start">
            <div className="flex max-w-min flex-1 items-center justify-start border-primary-black xs:order-last">
              <p className="mr-3 text-xl">Quantity</p>
              <CartQuantity
                incrementQuantity={() => handleInc()}
                decrementQuantity={() => handleDec()}
                quantity={qty}
                styleQuantity="text-lg"
              />
            </div>
            <p className="text-xl">{CurrencyFormatter("en-US", price)}</p>
          </div>
          <div className="flex justify-between gap-2 text-2xl xs:flex-col xs:gap-4">
            <button
              disabled={inCart}
              title={`${inCart ? "product is already in the cart" : ""}`}
              onClick={() => handleAddToCart(productDetail, qty)}
              className={`${
                inCart &&
                "cursor-not-allowed border-gray-800 bg-gray-900 text-gray-100 xs:box-border"
              }bg-gray-900 max-content shrink-0 rounded-sm border-[1.2px] border-primary-black px-8 py-4 xs:w-full xs:px-10`}
            >
              add to cart
            </button>
            <Link
              title="buy now!"
              to="/payment/checkout"
              className="shrink-0 rounded-sm bg-primary-black px-8 py-4 text-primary-white transition ease-out hover:bg-primary-darkGray hover:text-primary-white xl:text-center sm:self-start xs:w-full xs:px-10"
            >
              buy now!
            </Link>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default ProductPreviewView;
