import React from 'react';
import IconButton from '../../ui/inputs/IconButton';
import styled, { css } from 'styled-components/native';
import { Linking, View } from 'react-native';
import BackIcon from '../../ui/icons/BackIcon';
import SpotifyLogo from '../../ui/icons/SpotifyLogo';
import { colors } from '../../ui/theme';
import ShareIcon from '../../ui/icons/ShareIcon';
import { shareShow } from '../../utils/sms';
import { displayDate } from '../../utils/dates';
import OpenSpotifyButton from './OpenSpotifyButton';

const layout = css`
    width: 100%;
    flex: 1;
    padding: 24px 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const DownIcon = styled(BackIcon)`
    transform: rotate(270deg);
`;

const ShowUpperActions = ({
    spotifyId,
    navigation,
    artistName,
    show: { venue, start_date },
    style,
}) => (
    <View style={style}>
        <IconButton
            Icon={DownIcon}
            onPress={() => navigation.goBack()}
            iconStyle={style}
        />
        <OpenSpotifyButton spotifyId={spotifyId} />
        <View style={{ flexDirection: 'row' }}>
            <IconButton
                Icon={ShareIcon}
                onPress={() =>
                    shareShow(artistName, venue.name, displayDate(start_date))
                }
                style={{ color: colors.neutral98 }}
            />
        </View>
    </View>
);

export default styled(ShowUpperActions)`
    ${layout}
`;
