import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../theme';
import styled from 'styled-components/native';

const FilledInHeartIcon = props => (
    <Svg
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M21.9411 12.0322L12 22L2.05887 12.0322C-0.686291 9.27967 -0.686292 4.81693 2.05887 2.0644C4.80404 -0.688133 9.25483 -0.688133 12 2.0644C14.7452 -0.688133 19.196 -0.688133 21.9411 2.0644C24.6863 4.81693 24.6863 9.27967 21.9411 12.0322Z"
            fill="#EA335F"
            strokeOpacity={props.fillOpacity}
        />
    </Svg>
);

export default styled(FilledInHeartIcon)``;
