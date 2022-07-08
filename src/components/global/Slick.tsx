import { ReactNode } from "react";
import Slider from "react-slick";

type Props = {
    children?: ReactNode,
}

function Slick(props:Props) {
  var settings = {
  
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 2000,
    cssEase: "linear",
   /*  nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />, */
    responsive: [
      

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>{props.children}</Slider>
    </>
  );
}

export default Slick;
