import React from "react";
import Carousel from "react-multi-carousel";
import { bannerData } from "../../constants/data";
import { styled } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
const Image = styled("img")({
  width: "100%",
  height: 280,
});
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const Banner = () => {
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {bannerData.map((data) => (
          <Image src={data.url} />
        ))}
      </Carousel>
    </>
  );
};
