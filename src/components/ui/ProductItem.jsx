import { NavLink } from "react-router-dom";
import { useState, memo } from "react";

import CurrencyFormatter from "../../utils/currencyFormatter";
import hoverPopupButtons from "./HoverPopupButtons";

const ProductItem = ({ searchItem }) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  function handleMouseEnter(productId) {
    setHoveredItemId(productId);
  }
  function handleMouseLeave() {
    setHoveredItemId(null);
  }

  return searchItem.map((productDetail) => {
    const isHovered = hoveredItemId === productDetail.id;

    // memoized hovered navLinks
    const MemoizedNavLink = memo(
      () => (
        <NavLink
          to={`./${productDetail.id}`}
          key={productDetail.id}
          className="relative flex flex-col"
        >
          <figure className="w-full h-full overflow-hidden">
            <img
              src={productDetail.imageUrl}
              alt={productDetail.name}
              // loading="lazy"
              className={`z-10 block h-56 w-full max-w-full object-cover transition-all ease-out `}
            />
          </figure>
        </NavLink>
      ),
      [isHovered, productDetail.id]
    );

    return (
      <div
        key={productDetail.id}
        onMouseEnter={() => handleMouseEnter(productDetail.id)}
        onMouseLeave={() => handleMouseLeave()}
        className={`${
          isHovered ? "group-hover:scale-105" : ""
        } relative flex flex-col h-20 max-w-xs col-span-2 group lg:col-span-2 md:col-span-3 sm:col-span-8`}
      >
        <MemoizedNavLink />

        <div className="flex flex-col items-center py-4 space-y-1 hover:cursor-pointer bg-primary-white ">
          <span className="text-sm font-semibold text-primary-darkGray">
            {CurrencyFormatter("en-US", productDetail.price)}
          </span>
          <NavLink
            to={`./${productDetail.id}`}
            className="max-w-[20ch] group-hover:underline  text-center text-lg font-normal capitalize"
          >
            {productDetail.name}
          </NavLink>
        </div>
        {/* reaction status of the product */}
        {isHovered && hoverPopupButtons(productDetail)}
      </div>
    );
  });
};
export default ProductItem;
