import React, { useEffect } from 'react';
import { colors } from '../../ui/theme';
import { View } from 'react-native';
import { H1, H3 } from '../../ui/Text';
import { CirclePlayButton } from '../player/PlayPauseButton';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Gradient = styled(LinearGradient)`
    width: 100%;
    flex: 1;
    padding: 24px 16px;
`;

const PlaylistHeader = ({ onPlayButtonPress, displayName, subHeader }) => {
    const navigation = useNavigation();

    useEffect(
        () =>
            navigation.setOptions({
                headerStyle: {
                    backgroundColor: colors.neutral10,
                    borderWidth: 0,
                },
            }),
        []
    );

    return (
        <Gradient colors={[colors.neutral10, colors.neutral5]}>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'space-between',
                }}
            >
                <View style={{ marginRight: 64 }}>
                    {subHeader && <H3>{subHeader}</H3>}
                    <H1>{displayName}</H1>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <CirclePlayButton onPress={onPlayButtonPress} />
                </View>
            </View>
        </Gradient>
    );
};

export default PlaylistHeader;
