import React from 'react';
import styled, { css } from 'styled-components/native';
import { last } from 'ramda';
import SpotifyLogo from '../../ui/icons/SpotifyLogo';
import { Linking, Pressable } from 'react-native';
import { colors } from '../../ui/theme';
import Button from '../../ui/inputs/Button';
import { Text } from '../../ui/Text';

const layout = css`
    background-color: ${colors.spotifyGreen};
    flex-direction: row;
    height: 40px;
    border-radius: 40px;
    justify-content: center;
    padding: 0 16px;
`;

const OpenSpotifyButton = ({ style, spotifyId }) => (
    <Button
        style={style}
        onPress={() =>
            Linking.openURL(`https://open.spotify.com/artist/${spotifyId}`)
        }
    >
        <SpotifyLogo color={colors.neutral5} />
        <Text style={{ color: colors.neutral5, marginLeft: 8 }}>
            Open Spotify
        </Text>
    </Button>
);

export default styled(OpenSpotifyButton)`
    ${layout}
`;

export const OpenSpotifyLink = ({ spotifyUri }) => (
    <Pressable
        style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={() =>
            Linking.openURL(
                `https://open.spotify.com/track/${last(spotifyUri.split(':'))}`
            )
        }
    >
        <SpotifyLogo color={colors.neutral98} width="16" height="16" />
        <Text style={{ color: colors.neutral98, marginLeft: 8 }}>
            Open Spotify
        </Text>
    </Pressable>
);
