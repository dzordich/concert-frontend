import React from 'react';
import styled, { css } from 'styled-components/native';
import { Linking, View } from 'react-native';
import ShiftRight from '../../ui/layout/ShiftRight';
import { formatList, isNotEmpty } from '../../utils/arrays';
import { H2, H4, Text } from '../../ui/Text';
import { prop } from 'ramda';
import { displayDate } from '../../utils/dates';
import { colors } from '../../ui/theme';
import TicketIcon from '../../ui/icons/TicketIcon';
import Button from '../../ui/inputs/Button';
import CalendarIcon from '../../ui/icons/CalendarIcon';
import LikeShowButton from '../../ui/inputs/LikeShowButton';
import VenueIcon from '../../ui/icons/VenueIcon';

const layout = css`
    padding: 0 16px;
`;

const VenueLinkContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 8px;
`;

const VenueLink = styled(Button)`
    background-color: ${colors.primary60};
    flex-direction: row;
    padding: 12px;
    height: 40px;
    border-radius: 6px;
    margin-right: 8px;
`;

const DateContainer = styled.View`
    padding-bottom: 16px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    height: 40px;
    background-color: ${colors.neutral10};
`;

const VenueName = styled(H2)`
    font-weight: 400;
    margin-left: 8px;
    font-size: 16px;
    flex-wrap: wrap;
`;

const getOtherPerformers = (performers, mainPerformer) => {
    const maxVisiblePerformers = 10;
    const otherPerformers = performers.filter(
        performer => performer.name !== mainPerformer
    );

    return otherPerformers.length > maxVisiblePerformers
        ? [
              ...otherPerformers.slice(0, maxVisiblePerformers + 1),
              { name: 'more' },
          ]
        : otherPerformers;
};

const ShowSlide = ({
    id,
    venue,
    mainPerformer,
    performers,
    start_date,
    style,
}) => {
    // todo: make a proper collapsable list
    const otherPerformers = getOtherPerformers(performers, mainPerformer);
    return (
        <View style={style}>
            <View style={{ alignItems: 'center' }}>
                {isNotEmpty(otherPerformers) && (
                    <Text style={{ marginBottom: 8, color: colors.neutral80 }}>
                        With{' '}
                        <Text
                            style={{
                                fontWeight: '600',
                                fontFamily: 'Montserrat_600SemiBold',
                            }}
                        >
                            {formatList(otherPerformers.map(prop('name')))}
                        </Text>
                    </Text>
                )}

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 4,
                    }}
                >
                    <VenueIcon />
                    <VenueName>{venue.name}</VenueName>
                    {/*  festival marker used to be here */}
                </View>
            </View>
            <VenueLinkContainer>
                <VenueLink
                    onPress={() =>
                        venue.website && Linking.openURL(venue.website)
                    }
                    activeOpacity={0.6}
                >
                    <TicketIcon
                        style={{ color: colors.primary98, marginRight: 8 }}
                    />
                    <H4 style={{ color: colors.primary98, fontWeight: '600' }}>
                        Tickets
                    </H4>
                </VenueLink>

                <DateContainer>
                    <CalendarIcon
                        style={{ color: colors.neutral80, marginRight: 8 }}
                    />
                    <H4 style={{ color: colors.neutral80 }}>
                        {displayDate(start_date)}
                    </H4>
                </DateContainer>
                <ShiftRight>
                    <LikeShowButton showId={id} width="28px" height="28px" />
                </ShiftRight>
            </VenueLinkContainer>
        </View>
    );
};

export default styled(ShowSlide)`
    ${layout}
`;
