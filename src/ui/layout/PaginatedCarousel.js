import React, { useState } from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-new-snap-carousel';
import { getWindowWidth } from '../../utils/dimensions';
import { colors } from '../theme';

const PaginatedCarousel = ({
    data,
    renderItem,
    paginationStyle = {},
    ...props
}) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const windowWidth = getWindowWidth();

    return (
        <View>
            <Carousel
                data={data}
                renderItem={renderItem}
                itemWidth={windowWidth}
                sliderWidth={windowWidth}
                onSnapToItem={index => {
                    setActiveSlide(index);
                    props.onSnapToItem && props.onSnapToItem(index);
                }}
            />
            <View
                style={{
                    margin: 0,
                    padding: 0,
                    ...paginationStyle,
                }}
                pointerEvents="none"
            >
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={activeSlide}
                    dotColor={colors.neutral98}
                    inactiveDotColor={colors.neutral90}
                    containerStyle={{
                        margin: 0,
                        padding: 0,
                    }}
                />
            </View>
        </View>
    );
};

export default PaginatedCarousel;
