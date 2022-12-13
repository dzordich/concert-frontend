import React from 'react';
import styled, { css } from 'styled-components/native';
import { Linking, View } from 'react-native';
import ShiftRight from '../../ui/layout/ShiftRight';
import { formatList, isNotEmpty } from '../../utils/arrays';
import { Text } from '../../ui/Text';
import { prop } from 'ramda';
import { displayDate } from '../../utils/dates';
import { colors } from '../../ui/theme';
import TicketIcon from '../../ui/icons/TicketIcon';
import Button from '../../ui/inputs/Button';
import CalendarIcon from '../../ui/icons/CalendarIcon';
import LikeShowButton from '../../ui/inputs/LikeShowButton';

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
    align-items: center;
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

const ShowSlide = ({
    id,
    venue,
    mainPerformer,
    performers,
    start_date,
    style,
}) => {
    const otherPerformers = performers.filter(
        performer => performer.name !== mainPerformer
    );
    return (
        <View style={style}>
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
                    <Text
                        style={{ color: colors.primary98, fontWeight: '600' }}
                    >
                        Tickets
                    </Text>
                </VenueLink>

                <DateContainer>
                    <CalendarIcon
                        style={{ color: colors.neutral80, marginRight: 8 }}
                    />
                    <Text style={{ color: colors.neutral80 }}>
                        {displayDate(start_date)}
                    </Text>
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
