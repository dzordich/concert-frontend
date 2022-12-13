import React from 'react';
import Svg, { G, Path, Polygon, Rect } from 'react-native-svg';

const CalendarIcon = props => (
    <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M4 4H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M4 8H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M16 3V5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M8 3V5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default CalendarIcon;
