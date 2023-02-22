import React from 'react';
import styled, { css } from 'styled-components';
import { Image, View, ImageBackground } from 'react-native';
import { getWindowWidth } from '../../utils/dimensions';

const sizes = {
    small: 48,
    medium: 60,
    large: getWindowWidth() - 48,
    full: getWindowWidth() * 0.7,
};

const getSizeFromProps = props => sizes[props.size];

const layout = css`
    width: ${props => getSizeFromProps(props)}px;
    height: ${props => getSizeFromProps(props)}px;
`;

const AlbumArtImage = styled(Image)`
    ${layout}
`;

const AlbumArtBackgroundImage = styled(ImageBackground)`
    ${layout}
    align-self: center;
`;

const EmptyAlbumArt = styled(View)`
    background-color: black;
    ${layout}
`;

const AlbumArt = ({ url, size = 'small' }) =>
    url ? (
        <AlbumArtImage source={{ uri: url }} size={size} />
    ) : (
        <EmptyAlbumArt size={size} />
    );

export default AlbumArt;

export const AlbumArtBackground = ({ children, url, size = 'full' }) =>
    url ? (
        <AlbumArtBackgroundImage source={{ uri: url }} size={size}>
            {children}
        </AlbumArtBackgroundImage>
    ) : (
        <EmptyAlbumArt size={size}>{children}</EmptyAlbumArt>
    );
