import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ShareIcon = props => (
    <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M15 5.5L12 2M12 2L9 5.5M12 2L12 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M6 9H4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V9H18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default ShareIcon;
