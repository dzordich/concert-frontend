import React, { createRef, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components/native';

const StyledMap = styled(MapView)`
    width: 100%;
    height: 200px;
    border-radius: 4px;
    overflow: hidden;
`;

const ShowMap = ({ venue }) => {
    const mapRef = createRef();

    useEffect(() => {
        mapRef.current.animateToRegion({
            latitude: Number(venue.lat),
            longitude: Number(venue.lng),
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        });
    }, [venue]);

    return (
        <StyledMap
            initialRegion={{
                latitude: Number(venue.lat),
                longitude: Number(venue.lng),
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            ref={mapRef}
        >
            <Marker
                coordinate={{
                    latitude: Number(venue.lat),
                    longitude: Number(venue.lng),
                }}
                title={venue.name}
            />
        </StyledMap>
    );
};

export default ShowMap;
