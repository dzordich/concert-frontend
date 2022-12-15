import React from 'react';
import styled from 'styled-components/native';
import { Image, TouchableHighlight, View } from 'react-native';
import PATHS from '../../contants/paths';
import { colors } from '../../ui/theme';
import { H2, H3, Text } from '../../ui/Text';
import { getWindowWidth } from '../../utils/dimensions';
import ShiftRight from '../../ui/layout/ShiftRight';
import { useNavigation } from '@react-navigation/native';

const PlaylistLinkContainer = styled(View)`
    margin-left: 12px;
`;

const PlaylistLinkBackground = styled.ImageBackground`
    height: 156px;
    width: ${getWindowWidth() - 52}px;
    border-radius: 4px;
    flex-direction: column;
    justify-content: flex-end;
    background-color: ${colors.neutral10};
    overflow: hidden;
`;

const StyledHighlight = styled(TouchableHighlight)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.neutral10};
    border-radius: 4px;
    overflow: hidden;
    height: 72px;
    width: ${getWindowWidth() - 52}px;
    margin-left: 12px;
`;

export const PlaylistCard = ({ displayName, image, subHeader, style }) => (
    <PlaylistLinkBackground source={image} style={style}>
        <View
            style={{
                backgroundColor: colors.neutralOpaque5,
                borderRadius: 4,
                paddingVertical: 8,
                alignItems: 'center',
            }}
        >
            <H3>{displayName}</H3>
            <Text style={{ color: colors.neutral80, fontSize: 12 }}>
                {subHeader}
            </Text>
        </View>
    </PlaylistLinkBackground>
);

const PlaylistLink = ({ playlist, style }) => {
    const navigation = useNavigation();

    return (
        <StyledHighlight
            onPress={() => navigation.navigate(PATHS.PLAYLIST, playlist)}
            style={style}
        >
            <>
                <Image
                    source={playlist.image}
                    style={{ width: 120, height: 72 }}
                />
                <View style={{ marginHorizontal: 16 }}>
                    <H3>{playlist.displayName}</H3>
                </View>
                <ShiftRight>
                    <H3>{playlist.subHeader}</H3>
                </ShiftRight>
            </>
        </StyledHighlight>
    );
};

export default PlaylistLink;

export const LargePlaylistLink = ({ playlist, style, ...props }) => {
    const navigation = useNavigation();

    return (
        <PlaylistLinkContainer>
            <TouchableHighlight
                onPress={() =>
                    props.onPress
                        ? props.onPress()
                        : navigation.navigate(PATHS.PLAYLIST, playlist)
                }
            >
                <PlaylistCard {...playlist} style={style} />
            </TouchableHighlight>
        </PlaylistLinkContainer>
    );
};
