import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../theme';
import styled from 'styled-components/native';

const InfoIcon = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill={colors.neutral90}
        {...props}
    >
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </Svg>
);

export default styled(InfoIcon)`
    transform: rotate(90deg);
`;
