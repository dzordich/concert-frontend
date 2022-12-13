import styled from 'styled-components';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconButton from '../inputs/IconButton';
import BackIcon from '../icons/BackIcon';
import React from 'react';

const BackButtonContainer = styled(SafeAreaView)`
    position: absolute;
    top: 10px;
    left: 4px;
    z-index: 9;
`;

const BackButton = ({ style, navigation }) => (
    <BackButtonContainer>
        <IconButton
            Icon={BackIcon}
            onPress={() => navigation.goBack()}
            iconStyle={style}
        />
    </BackButtonContainer>
);

export default styled(BackButton)``;

export const RelativeBackButton = ({ style, navigation, containerStyle }) => (
    <View style={containerStyle}>
        <IconButton
            Icon={BackIcon}
            onPress={() => navigation.goBack()}
            style={style}
        />
    </View>
);

const DownIcon = styled(BackIcon)`
    transform: rotate(270deg);
`;

export const DownButton = ({ style, navigation }) => (
    <BackButtonContainer
        style={{ top: 0, width: '100%', marginHorizontal: 16 }}
    >
        <IconButton
            Icon={DownIcon}
            onPress={() => navigation.goBack()}
            iconStyle={style}
        />
    </BackButtonContainer>
);
