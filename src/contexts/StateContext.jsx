import { createContext, useContext, useState } from "react";

import CarousalList from "../data/CarousalList";
import ShoppingProduct from "../data/ShoppingProduct";

// create context
const StateContext = createContext([]);

const StateProvider = ({ children }) => {
  // shopping Products details
  const productsDetail = ShoppingProduct();

  // products state
  const [productInfo, setProductInfo] = useState(productsDetail);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [wishlistStatus, setWishlistStatus] = useState(false);
  const [cartStatus, setCartStatus] = useState("");
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleShowCart = () => {
    setShowCart((prevShown) => !prevShown);
  };
  const handleShowWishlist = () => {
    setShowWishlist((prevShown) => !prevShown);
  };

  /* a function get called after clicking `addtocart` button which accept two arguments,
   the product instance we want to add to the cart `productToAdd` and the quantity of the product `quantity`*/
  function handleAddToCart(productToAdd, quantity) {
    // check if the product exist in the cart
    const doesExist = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id,
    );

    // if it exist in the cart
    if (doesExist) {
      // update productInfo after updating the existing cartItems in-cart state into true
      setProductInfo((prevProductInfo) => {
        const updatedCartItems = prevProductInfo.map((productInfo) =>
          productInfo.id === productToAdd.id
            ? { ...productInfo, inCart: true }
            : productInfo,
        );

        return updatedCartItems;
      });

      // update cart status
      setCartStatus("product is already added in a cart!");
      setShowCart(true);
    } else {
      // if it is not in the cart then add it to the cart. then update the incart status into true
      setCartItems([
        ...cartItems,
        { ...productToAdd, quantity: quantity, inCart: true },
      ]);

      // then update price and quantity accordingly
      setTotalQty((prevTotalQty) => prevTotalQty + quantity);
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + productToAdd.price * quantity,
      );
      setQty(1);
    }
  }

  /* a function get called after clicking `addtowishlist` button which accept two arguments,
   the product instance we want to add to the cart `productToAdd` and the quantity of the product `quantity`*/
  function handleAddToWishlist(productWishToAdd) {
    // check if the product exist in the wishList
    const doesExist = wishlistItems.find(
      (wishlistItem) => wishlistItem.id === productWishToAdd.id,
    );

    // if it exist in the cart
    if (doesExist) {
      // update productInfo after updating the existing cartItems in-wishlist state into true
      setProductInfo((prevProductInfo) => {
        const updatedWishLists = prevProductInfo.map((productInfo) =>
          productInfo.id === productWishToAdd.id
            ? { ...productInfo, inWishlist: true }
            : productInfo,
        );

        return updatedWishLists;
      });

      // update cart status
      setWishlistStatus("product is added to a wish-list!");
      setShowWishlist(true);
    } else {
      // if it is not in the cart then add it to the cart. then update the incart status into true
      setWishlistItems([
        ...wishlistItems,
        { ...productWishToAdd, inWishlist: true },
      ]);
    }
  }

  // function to remove a product from the cart and update state accordingly
  function handleRemoveFromCart(cartProduct) {
    // find that cart items with product-id to be removed.
    const productFound = cartItems.find(
      (cartItems) => cartItems.id === cartProduct.id,
    );

    // return all cart items except those with id that we want to get removed
    const removedItem = cartItems.filter((item) => item.id !== cartProduct.id);
    // update the cartItems
    setCartItems(removedItem);

    setTotalQty((prevTotalQty) => prevTotalQty - productFound.quantity);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - productFound.price * productFound.quantity,
    );

    // update productInfo after removing the existing cartItems, update in-cart state into false
    setProductInfo((prevProductInfo) => {
      const updatedCartItems = prevProductInfo.map((productInfo) =>
        productInfo.id === cartProduct.id
          ? { ...productInfo, inCart: false }
          : productInfo,
      );

      return updatedCartItems;
    });
  }

  // function to remove a product from the wish-list and update state accordingly
  function handleRemoveFromWishlist(wishlistProduct) {
    // return all cart items except those with id that we want to get removed
    const removedItem = wishlistItems.filter(
      (item) => item.id !== wishlistProduct.id,
    );
    // update the wishlistItems
    setWishlistItems(removedItem);

    // update productInfo after removing the existing wishlistItems, update in-cart state into false
    setProductInfo((prevProductInfo) => {
      const updatedWishlistItems = prevProductInfo.map((productInfo) =>
        productInfo.id === wishlistProduct.id
          ? { ...productInfo, inWishlist: false }
          : productInfo,
      );

      return updatedWishlistItems;
    });
  }

  // handle cart quantity of individual existing cartItems
  function handleCartQuantity(id, type) {
    if (type === "inc") {
      // quantities and pricing of existing items will get updated accordingly.
      setCartItems((prevCartItems) => {
        const updatedCartItems = prevCartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );

        const totalQuantity = updatedCartItems.reduce(
          (acc, item) => acc + item.quantity,
          0,
        );

        const totalPrice = updatedCartItems.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0,
        );

        setTotalQty(totalQuantity);
        setTotalPrice(totalPrice);

        return updatedCartItems;
      });
    } else if (type === "dec") {
      setCartItems((prevCartItems) => {
        const updatedCartItems = prevCartItems.map((item) => {
          if (item.id === id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });

        const totalQuantity = updatedCartItems.reduce(
          (acc, item) => acc + item.quantity,
          0,
        );

        const totalPrice = updatedCartItems.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0,
        );

        setTotalQty(totalQuantity);
        setTotalPrice(totalPrice);

        return updatedCartItems;
      });
    }
  }

  // handle the quantity of items
  function handleInc() {
    setQty((prevQty) => prevQty + 1);
  }

  function handleDec() {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) {
        return 1;
      }
      return prevQty - 1;
    });
  }

  // handle searching for products
  const [searchedItem, setSearchedItem] = useState({
    productItem: productsDetail,
    searchTerm: "",
  });
  // console.log("outer founded", foundItem);
  const { productItem, searchTerm } = searchedItem;
  console.log("outer searchedItem", productItem);

  const filteredProduct = productItem.filter((product) => {
    return product.name.toLocaleLowerCase().includes(searchTerm);
  });

  console.log("searchedProduct", filteredProduct);

  function handleSearch(e) {
    console.log("starting found item: " + { ...productItem });
    const searchValue = e.target.value;

    setSearchedItem((prevSearchedItem) => ({
      ...prevSearchedItem,
      searchTerm: searchValue.toLocaleLowerCase(),
    }));

    // setSearchedItem(productFound);
    // setSearchedItem((prevSearchedItem) => ({
    //   ...prevSearchedItem,
    //   productItem: productFound,
    // }));
    console.log("ending found item: " + { ...productItem });
    console.log("inner ending searchedItem", productItem);
  }

  const stateValue = {
    // slideIndex,
    // slidesDetail,
    // handleNext,
    // handlePrev,
    productInfo,
    setProductInfo,
    handleDec,
    handleInc,
    qty,
    totalQty,
    totalPrice,
    setTotalPrice,
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    handleCartQuantity,
    handleSearch,
    searchedItem,
    setSearchedItem,
    filteredProduct,
    cartStatus,
    showCart,
    handleShowCart,
    handleAddToWishlist,
    handleRemoveFromWishlist,
    setShowWishlist,
    showWishlist,
    setWishlistStatus,
    wishlistStatus,
    wishlistItems,
    setWishlistItems,
    handleShowWishlist,
  };

  return (
    <StateContext.Provider value={stateValue}>{children}</StateContext.Provider>
  );
};

const useStateContext = () => useContext(StateContext);

export { StateProvider, useStateContext };
