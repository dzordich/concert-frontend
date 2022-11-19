import React from 'react';
import styled, { css } from 'styled-components/native';
import { Linking, View } from 'react-native';
import ShiftRight from '../../ui/layout/ShiftRight';
import { FestivalMarker, FreeMarker } from '../../ui/Marker';
import { formatList, isNotEmpty } from '../../utils/arrays';
import { H2, H3, Text } from '../../ui/Text';
import { prop } from 'ramda';
import { displayDate } from '../../utils/dates';
import { formatTime } from '../../utils/time';
import { colors } from '../../ui/theme';
import TicketIcon from '../../ui/icons/TicketIcon';
import { shareShow } from '../../utils/sms';
import ShareIcon from '../../ui/icons/ShareIcon';
import SpotifyLogo from '../../ui/icons/SpotifyLogo';
import MapView, { Marker } from 'react-native-maps';
import Button from '../../ui/inputs/Button';
import VenueIcon from '../../ui/icons/VenueIcon';

const layout = css`
    padding: 16px;
`;

const VenueLinkContainer = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const VenueLink = styled(Button)`
    color: ${colors.primary60};
    width: 33%;
    margin: 24px 0;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const StyledMap = styled(MapView)`
    width: 100%;
    height: 200px;
    border-radius: 4px;
    overflow: hidden;
`;

const VenueName = styled(H2)`
    text-transform: capitalize;
    margin-left: 8px;
    font-size: 18px;
`;

const ShowSlide = ({
    venue,
    start_date,
    start_time,
    free,
    festival,
    mainPerformer,
    performers,
    spotifyLink,
    style,
}) => {
    const otherPerformers = performers.filter(
        performer => performer.name !== mainPerformer
    );
    return (
        <View style={style}>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 8,
                }}
            >
                <VenueIcon />
                <VenueName numberOfLines={2}>
                    {venue.name.toUpperCase()}
                </VenueName>
                <ShiftRight>
                    <FestivalMarker festival={festival} long />
                    <FreeMarker free={free} />
                </ShiftRight>
            </View>
            {isNotEmpty(otherPerformers) && (
                <Text style={{ marginBottom: 8 }}>
                    With {formatList(otherPerformers.map(prop('name')))}
                </Text>
            )}
            <Text>
                {displayDate(start_date)}
                {start_time ? `  •  ${formatTime(start_time)}` : ''}
            </Text>
            <VenueLinkContainer>
                <VenueLink
                    onPress={() =>
                        venue.website && Linking.openURL(venue.website)
                    }
                    activeOpacity={0.6}
                    style={{
                        borderRightColor: colors.neutral20,
                        borderRightWidth: 1,
                        borderRadius: 0,
                    }}
                >
                    <TicketIcon
                        style={{ color: colors.primary80, marginRight: 8 }}
                    />
                    <Text style={{ color: colors.primary80 }}>Tickets</Text>
                </VenueLink>
                <VenueLink
                    onPress={() =>
                        shareShow(
                            mainPerformer,
                            venue.name,
                            displayDate(start_date)
                        )
                    }
                    activeOpacity={0.6}
                    style={{
                        borderRightColor: colors.neutral20,
                        borderRightWidth: 1,
                        borderRadius: 0,
                    }}
                >
                    <ShareIcon
                        style={{ color: colors.primary80, marginRight: 8 }}
                    />
                    <Text style={{ color: colors.primary80 }}>Share</Text>
                </VenueLink>
                <VenueLink
                    onPress={() => Linking.openURL(spotifyLink)}
                    activeOpacity={0.6}
                >
                    <SpotifyLogo
                        style={{ color: colors.primary80, marginRight: 8 }}
                    />
                    <Text style={{ color: colors.primary80 }}>Spotify</Text>
                </VenueLink>
            </VenueLinkContainer>

            <StyledMap
                initialRegion={{
                    latitude: Number(venue.lat),
                    longitude: Number(venue.lng),
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: Number(venue.lat),
                        longitude: Number(venue.lng),
                    }}
                    title={venue.name}
                />
            </StyledMap>
        </View>
    );
};

export default styled(ShowSlide)`
    ${layout}
`;
