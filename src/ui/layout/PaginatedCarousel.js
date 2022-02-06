import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { getWindowWidth } from "../../utils/dimensions";
import { colors } from "../theme";

const PaginatedCarousel = ({ data, renderItem }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const windowWidth = getWindowWidth();

  return (
    <>
      <Carousel
        data={data}
        renderItem={renderItem}
        itemWidth={windowWidth}
        sliderWidth={windowWidth}
        onSnapToItem={setActiveSlide}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        dotColor={colors.neutral98}
        inactiveDotColor={colors.neutral90}
      />
    </>
  );
};

export default PaginatedCarousel;
