import styled from 'styled-components';
import { Text as NativeText } from 'react-native';
import { colors } from './theme';

export const Text = styled(NativeText)`
    color: ${colors.neutral98};
    font-family: 'Montserrat_600SemiBold';
    font-weight: 600;
`;

export const H1 = styled(Text)`
    font-size: 24px;
    font-weight: 700;
    font-family: 'Montserrat_700Bold';
`;

export const H2 = styled(Text)`
    font-size: 20px;
    font-weight: 700;
    font-family: 'Montserrat_700Bold';
`;

export const H3 = styled(Text)`
    font-size: 16px;
    font-weight: 600;
    font-family: 'Montserrat_600SemiBold';
`;

export const Display = styled(Text)`
    font-size: 32px;
    font-weight: 800;
    font-family: 'Montserrat_800ExtraBold';
`;
