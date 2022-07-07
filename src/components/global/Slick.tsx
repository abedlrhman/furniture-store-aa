import { ReactNode } from "react";
import Slider from "react-slick";

type Props = {
    children?: ReactNode,
}

function Slick(props:Props) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 1,
    speed: 600,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 775,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 550,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>{props.children}</Slider>
    </>
  );
}

export default Slick;
