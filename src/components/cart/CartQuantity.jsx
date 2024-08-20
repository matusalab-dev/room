import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

const CartQuantity = ({
  incrementQuantity,
  decrementQuantity,
  quantity,
  styleQuantity,
}) => {
  const mergedStyleQuantity = twMerge(
    "text-base sm:text-sm py-0 px-2",
    styleQuantity,
  );

  return (
    <div className="flex items-center justify-between border-[1px] border-primary-black p-0 text-primary-black">
      <button
        onClick={decrementQuantity}
        className="flex h-8 items-center justify-center self-center border-r-[1px] border-primary-black px-2 text-lg"
      >
        <AiOutlineMinus />
      </button>
      <p className={mergedStyleQuantity}>{quantity}</p>
      <button
        onClick={incrementQuantity}
        className="flex h-8 items-center justify-center self-center border-l-[1px] border-primary-black px-2 text-xl"
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default CartQuantity;
