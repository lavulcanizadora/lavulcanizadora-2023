import React from "react";
import PropTypes from "prop-types";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box, Image } from "@chakra-ui/react";
import style from "./style";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const Carousel = ({ carouselSlides }) => {
  return (
    <CarouselProvider
      totalSlides={carouselSlides.length}
      naturalSlideHeight={100}
      naturalSlideWidth={177.8}
      infinite={true}
      isPlaying={true}
      isIntrinsicHeight={true}
    >
      <Box position={"relative"}>
        <Slider>
          {carouselSlides.map((image, index) => {
            return (
              <Slide key={image.fields.file.url} index={index}>
                <Image
                  alt=""
                  src={image.fields.file.url}
                  width={"100%"}
                  height={"100%"}
                  objectFit={"cover"}
                />
              </Slide>
            );
          })}
        </Slider>
        <ButtonBack
          style={{
            position: "absolute",
            top: "calc(50% - 24px)",
            left: "20px",
          }}
        >
          <FaChevronLeft color="rgb(255, 255, 255, 0.7)" size="24" />
        </ButtonBack>
        <ButtonNext
          style={{
            position: "absolute",
            top: "calc(50% - 24px)",
            right: "20px",
          }}
        >
          <FaChevronRight color="rgb(255, 255, 255, 0.7)" size="24" />
        </ButtonNext>
        <DotGroup />
      </Box>
    </CarouselProvider>
  );
};

Carousel.propTypes = {
  carouselSlides: PropTypes.array.isRequired,
};

export default Carousel;
