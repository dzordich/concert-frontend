import styled, { css } from 'styled-components/native';
import { colors } from '../../ui/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { H2 } from '../../ui/Text';
import { Image } from 'react-native';

export const playlistStyle = css`
    flex: 1;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    background-color: ${colors.neutral5};
`;

export const PlaylistHeaderText = styled(H2)`
    margin-bottom: 8px;
`;
