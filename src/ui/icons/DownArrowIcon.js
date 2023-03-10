import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../theme';
import styled from 'styled-components/native';

const DownArrowIcon = props => (
    <Svg
        width="15"
        height="8"
        viewBox="0 0 17 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M1.75977 1.52862L8.35224 8.12109L14.9447 1.52862"
            stroke={colors.neutral98}
            strokeWidth="2.63699"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default styled(DownArrowIcon)``;
