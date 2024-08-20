import { twMerge } from "tailwind-merge";

const SearchResultCount = ({ styleResult, searchItem, foundItem }) => {
  const searchResultStatus =
    foundItem.length === 0
      ? `No product found for search term "${searchItem}"`
      : `Search results found: ${foundItem.length}`;

  const mergedClass = twMerge(
    "text-left text-[1rem] xs:text-sm text-primary-black ",
    styleResult
  );

  return (
    <>{!!searchItem && <p className={mergedClass}>{searchResultStatus}</p>}</>
  );
};

export default SearchResultCount;
