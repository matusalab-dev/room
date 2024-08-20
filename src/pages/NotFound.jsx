import { ShopsNavbar } from "../components/navbar/ShopsNavbar";

const NotFound = () => {
  return (
    <section className="custom-container px-2 py-12 text-left md:text-center">
      <ShopsNavbar />
      <div className="mt-16">
        <h1 className="text mb-1 text-5xl font-bold text-gray-900 md:text-4xl md:font-extrabold md:leading-tight">
          Coming Soon!
        </h1>
        <p className="mb-6 text-lg font-light md:text-center md:leading-normal">
          Stay tuned for more updates.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
