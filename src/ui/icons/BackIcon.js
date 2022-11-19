import React from 'react';
import Svg, { G, Path, Rect } from 'react-native-svg';

const BackIcon = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#FFFFFF"
        {...props}
    >
        <Rect fill="none" height="24" width="24" />
        <G>
            <Path d="M16.88,2.88L16.88,2.88c-0.49-0.49-1.28-0.49-1.77,0l-8.41,8.41c-0.39,0.39-0.39,1.02,0,1.41l8.41,8.41 c0.49,0.49,1.28,0.49,1.77,0l0,0c0.49-0.49,0.49-1.28,0-1.77L9.54,12l7.35-7.35C17.37,4.16,17.37,3.37,16.88,2.88z" />
        </G>
    </Svg>
);

export default BackIcon;
