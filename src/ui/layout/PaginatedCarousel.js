import React, { useState } from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-new-snap-carousel";
import { getWindowWidth } from "../../utils/dimensions";
import { colors } from "../theme";

const PaginatedCarousel = ({ data, renderItem }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const windowWidth = getWindowWidth();

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        itemWidth={windowWidth}
        sliderWidth={windowWidth}
        onSnapToItem={setActiveSlide}
      />
      <View
        style={{
          zIndex: 10,
          position: "absolute",
          bottom: -10,
          left: 0,
          right: 0,
          width: "100%",
          justifyContent: "center",
        }}
        pointerEvents="none"
      >
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          dotColor={colors.neutral98}
          inactiveDotColor={colors.neutral90}
        />
      </View>
    </View>
  );
};

export default PaginatedCarousel;
