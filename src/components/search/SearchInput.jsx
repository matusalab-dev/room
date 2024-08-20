import { AiOutlineSearch } from "react-icons/ai";
import { InputComponent } from "../ui/InputComponent";

const SearchInput = ({ searchItem, handleSearch, toggle = null }) => {
  return (
    <form
      className={`${
        toggle && "sm:flex sm:w-full"
      } mt-0 w-1/2 items-center self-center bg-transparent font-sans font-semibold text-primary-darkGray placeholder:font-sans placeholder:text-primary-veryDarkGray focus:border-primary-darkGray active:border-primary-darkGray sm:hidden xs:w-3/12`}
    >
      <InputComponent
        type="search"
        inputClass={`${
          toggle && "lg:flex bg-black"
        } lg:hidden peer min-w-[5rem] w-full focus:outline-primary-darkGray rounded-sm focus:border-none outline-offset-0  items-center mt-0 bg-transparent focus:border-primary-darkGray border-[1.7px] active:border-primary-darkGray placeholder:text-primary-veryDarkGray placeholder:text-[0.9rem] text-primary-darkGray placeholder:font-primary font-medium pl-4 pr-2 py-2 self-center`}
        placeholder="Looking for our products"
        name="search-input"
        labelIconClass="none w-0 h-0"
        labelClass="absolute right-1 md:-right-4 lg:hidden"
        value={searchItem}
        onChange={handleSearch}
        label={
          <AiOutlineSearch
            fontWeight="100"
            className="shrink-0 border-none text-3xl font-thin text-primary-darkGray hover:cursor-pointer"
          />
        }
        inputWrapper="mt-0 w-full relative"
      />
    </form>
  );
};

export default SearchInput;
