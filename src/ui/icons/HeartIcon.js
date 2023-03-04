import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../theme';

const HeartIcon = props => (
    <Svg
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M21.1127 11.9384L12 21L2.8873 11.9384C0.3709 9.43606 0.370899 5.37903 2.8873 2.87673C5.4037 0.374425 9.4836 0.374425 12 2.87673C14.5164 0.374425 18.5963 0.374425 21.1127 2.87673C23.6291 5.37903 23.6291 9.43606 21.1127 11.9384Z"
            stroke={colors.neutral98}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={props.fillOpacity}
        />
    </Svg>
);

export default HeartIcon;
