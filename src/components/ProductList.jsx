import { twMerge } from "tailwind-merge";

import Footer from "../layouts/Footer";

const ProductList = ({ headingTitle, headingClass, children }) => {
  const productListHeadingStyle = twMerge(
    "block mx-auto text-center text-5xl sm:text-4xl font-primary font-medium capitalize mt-10 mb-20 xs:mb-12",
    headingClass
  );

  return (
    <>
      <main className="pt-6 pb-24 mt-16 full-bleed inverse">
        <h1 className={productListHeadingStyle}>{headingTitle}</h1>
        {children}
      </main>
      <div className="absolute left-0 right-0 max-w-full mx-0">
        <Footer className="sm:max-w-full" />
      </div>
    </>
  );
};

export default ProductList;
