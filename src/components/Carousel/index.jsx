import React from "react";
import PropTypes from "prop-types";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoHeight from 'embla-carousel-auto-height';
import { Box, Flex, Image } from "@chakra-ui/react";
import style from "./style";

const Carousel = ({ carouselSlides }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(), AutoHeight()]);

  return (
    <Box {...style.embla} className="embla">
      <Box className="embla__viewport" ref={emblaRef}>
        <Flex className="embla__container" {...style.emblaContainer}>
          {carouselSlides.map((slide) => (
            <Flex
              {...style.emblaSlide}
              key={slide.fields.file.url}
              className="embla__slide"
            >
              <Image alt="" src={slide.fields.file.url} />
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

Carousel.propTypes = {
  carouselSlides: PropTypes.array.isRequired,
};

export default Carousel;
