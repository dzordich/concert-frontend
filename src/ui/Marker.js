import React from 'react';
import styled from 'styled-components/native';
import { colors } from './theme';
import { compose, find } from 'ramda';

const Marker = styled.Text`
    color: ${colors.primary70};
    font-size: 10px;
    padding: 4px;
    border: 1px solid ${colors.primary70};
    border-radius: 4px;
    min-width: 40px;
    text-align: center;
`;

export const FreeMarker = ({ free }) => (free ? <Marker>FREE</Marker> : null);

const getFestival = compose(
    show => show && show.festival?.name,
    find(show => !!show.festival)
);

export const FestivalMarker = styled(
    ({ style, shows, festival, long = false }) => {
        const festivalName = shows ? getFestival(shows) : festival?.name;
        return festivalName ? (
            <Marker style={style}>
                {festivalName}
                {long ? ' Wristband' : ''}
            </Marker>
        ) : null;
    }
)`
    color: ${colors.yellow50};
    border-color: ${colors.yellow50};
`;
