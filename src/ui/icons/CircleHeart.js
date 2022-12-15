import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../theme';
import styled from 'styled-components/native';

const CircleHeart = props => (
    <Svg
        width="26"
        height="24"
        viewBox="0 0 23 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3043 20.4979C11.2599 20.4979 12.1844 20.3649 13.0602 20.1165L8.04383 15.275C6.01228 13.3142 6.01228 10.1352 8.04383 8.17448C10.0754 6.21373 13.3692 6.21373 15.4007 8.17448C16.5589 7.05666 18.1273 6.57611 19.6383 6.73282C18.1532 3.0434 14.5337 0.438293 10.3043 0.438293C4.75147 0.438293 0.25 4.9288 0.25 10.4681C0.25 16.0074 4.75147 20.4979 10.3043 20.4979Z"
            fill={colors.primary60}
        />
        <Path
            d="M21.4632 13.248L15.25 19.6667L9.0368 13.248C7.32107 11.4755 7.32107 8.60181 9.0368 6.82935C10.7525 5.05688 13.5343 5.05688 15.25 6.82935C16.9657 5.05688 19.7475 5.05688 21.4632 6.82935C23.1789 8.60181 23.1789 11.4755 21.4632 13.248Z"
            fill={colors.neutral98}
        />
    </Svg>
);

export default styled(CircleHeart)``;
