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
          className="relative group"
          onMouseEnter={() => handleMouseEnter(productDetail.id)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <figure className="w-full h-full overflow-hidden">
            <img
              src={productDetail.imageUrl}
              alt={productDetail.name}
              // loading="lazy"
              className={`z-10 block h-56 w-full max-w-full object-cover transition-all ease-out ${
                isHovered ? "group-hover:scale-105" : ""
              }`}
            />
          </figure>
        </NavLink>
      ),
      [isHovered, productDetail.id]
    );

    return (
      <div
        key={productDetail.id}
        className="flex flex-col h-20 max-w-xs col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-8"
      >
        <MemoizedNavLink />

        <div className="relative flex flex-col items-center py-4 space-y-1 bg-primary-white ">
          <span className="text-sm font-semibold text-primary-darkGray">
            {CurrencyFormatter("en-US", productDetail.price)}
          </span>
          <figcaption className="max-w-[20ch]  text-center text-lg font-normal capitalize">
            {productDetail.name}
          </figcaption>
          {/* reaction status of the product */}
          {isHovered && hoverPopupButtons(productDetail)}
        </div>
      </div>
    );
  });
};
export default ProductItem;
