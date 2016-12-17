import React from "react";
import Slider from "react-slick";

export class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
    };

    return (
      <Slider {...settings}>
        {
          this.props.items.map((item, index) => {
            const _style = {
              backgroundImage: `url(${item.src})`,
            };
            return (
              <div className="carouselItem" key={index} style={_style}></div>
            );
          })
        }
      </Slider>
    );
  }
}
