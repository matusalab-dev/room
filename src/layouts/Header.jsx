import { useStateContext } from "../contexts/StateContext";
import { Navbar } from "../components/navbar/Navbar";

const Header = () => {
  const { slideIndex, slidesDetail } = useStateContext();

  return (
    <header className="hero ">
      <Navbar />
      <div className="hero__image">
        <picture>
          <source
            srcSet={slidesDetail[slideIndex].imgUrl.mobile}
            media="(max-width: 28.125em)"
          />
          <source
            srcSet={slidesDetail[slideIndex].imgUrl.desktop}
            media="(min-width: 28.125em)"
          />
          <img
            src={slidesDetail[slideIndex].imgUrl.desktop}
            alt={slidesDetail[slideIndex].description}
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
    </header>
  );
};

export default Header;
