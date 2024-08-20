import { useState } from "react";
// import CarousalList from "../data/CarousalList";
import SLIDES_DATA from "../data/CarousalList";

const slidesDetail = SLIDES_DATA;

const useSlideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  console.log("slidesDetail", slidesDetail);
  console.log("slideIndex inside hook", slideIndex);

  // home-page slides context
  // custom slides code
  const currentSlide = slidesDetail[slideIndex];

  // handle the next click
  const handleNext = () => {
    setSlideIndex((prevSlideIndex) => {
      if (prevSlideIndex < slidesDetail.length - 1) {
        return prevSlideIndex + 1;
      } else {
        return 0;
      }
    });

    // if (slideIndex < slidesDetail.length - 1) {
    //   setSlideIndex((prevIndex) => prevIndex + 1);
    // }

    // if (slideIndex === slidesDetail.length - 1) {
    //   setSlideIndex(0);
    // }

    return;
  };

  // handle previous click
  const handlePrev = () => {
    setSlideIndex((prevSlideIndex) => {
      if (prevSlideIndex > 0 && prevSlideIndex < slidesDetail.length) {
        return prevSlideIndex - 1;
      } else {
        return slidesDetail.length - 1;
      }
    });
    // if (slideIndex > 0 && slideIndex < slidesDetail.length) {
    //   setSlideIndex((prevIndex) => prevIndex - 1);
    // }

    // if (slideIndex === 0) {
    //   setSlideIndex(slidesDetail.length - 1);
    // }

    return;
  };

  return { slideIndex, currentSlide, handlePrev, handleNext, slidesDetail };
};

export default useSlideshow;
