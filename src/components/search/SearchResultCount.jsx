import { twMerge } from "tailwind-merge";

const SearchResultCount = ({ styleResult, searchItem, foundItem }) => {
  const stringPLuralism = foundItem.length > 1 ? "results" : "result";
  const searchResultStatus =
    foundItem.length === 0
      ? `There are no products that match "${searchItem}"`
      : `showing ${foundItem.length} ${stringPLuralism} for "${searchItem}" `;

  const mergedClass = twMerge(
    "text-left text-[1rem] xs:text-sm text-primary-black",
    styleResult
  );

  return (
    <>{!!searchItem && <p className={mergedClass}>{searchResultStatus}</p>}</>
  );
};

export default SearchResultCount;
