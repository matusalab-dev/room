import { useStateContext } from "../contexts/StateContext";
import ProductList from "../components/ProductList";
import ProductCategory from "../components/ProductCategory";
import ProductItem from "../components/ui/ProductItem";
import { GridLayout } from "../layouts/GridLayout";

const Shops = () => {
  const { filteredProduct } = useStateContext();

  return (
    <main>
      <ProductCategory />
      {/* <ProductList headingTitle="Our Collections"> */}
      <ProductList headingTitle="Featured Items" headingClass="mb-0 xs:mb-0">
        <p className="mb-20 text-center text-lg text-primary-veryDarkGray xs:mb-12">
          Must-have pieces selected every month
        </p>

        <GridLayout className="grid grid-cols-8 justify-items-center lg:grid-cols-6 lg:justify-center">
          <ProductItem searchItem={filteredProduct} />
        </GridLayout>
      </ProductList>
      {/* Featured Product */}
    </main>
  );
};

export default Shops;
