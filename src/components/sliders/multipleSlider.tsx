import Slider from "react-slick";
import { ReactNode } from "react";
// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
    children?: ReactNode;
    itemsToScroll: number;
    itemsToShow: number;
    hasDots?: boolean;
}

function MultipleSlider ( { children, itemsToScroll, itemsToShow, hasDots = false}: Props )
{
    
    const settings = {
        dots: hasDots,
        infinite: true,
        speed: 500,
        slidesToShow: itemsToShow,
        slidesToScroll: itemsToScroll
    };

  return (
      <>
          
          <Slider { ...settings }>
             {children}
          </Slider>
      </>
  )
}

export default MultipleSlider