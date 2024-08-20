import { NavLink } from "react-router-dom";

import { useStateContext } from "../contexts/StateContext";
import { SHOP_DATA } from "../data/CategoriesData";

const ProductCategory = () => {
  const { searchedItem } = useStateContext();
  const { productItem, searchTerm } = searchedItem;

  return (
    <>
      {searchTerm == "" && (
        <section className="grid justify-between gap-4 mt-12 overflow-x-scroll grid-cols-categoryCol grid-rows-categoryRow">
          {SHOP_DATA.map((data) => {
            return (
              <NavLink
                key={data.title}
                to={`./product-category/${data.title}`}
                className={
                  data.className +
                  " " +
                  "lg:relative lg:col-span-2 lg:row-span-full lg:min-w-[10rem]"
                }
              >
                <figure className="w-full h-full">
                  <img
                    src={data.backgroundImage}
                    alt={`${data.title} category`}
                    className="z-10 block object-cover w-full h-full"
                  />
                </figure>
                <figcaption className="category__figcaption shadow-black drop-shadow-sm">
                  {data.title} <br /> Furnitures
                  <span className="text-base">({data.items.length})</span>
                </figcaption>
                <div className="overlay--inner"></div>
              </NavLink>
            );
          })}
        </section>
      )}
    </>
  );
};

export default ProductCategory;
