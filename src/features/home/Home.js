import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Pressable, View } from 'react-native';
import { colors } from '../../ui/theme';
import { H2 } from '../../ui/Text';
import BannerPlaylists from './BannerPlaylists';
import { useBannerPlaylists } from '../playlists/BannerPlaylistProvider';
import { navigate } from '../../utils/navigation';
import PATHS from '../../contants/paths';
import { useCities } from '../cities/CityProvider';
import ToggleButton from '../../ui/actions/ToggleButton';
import ConcertsTab from './ConcertsTab';
import FestivalsTab from './FestivalsTab';
import PlaceIcon from '../../ui/icons/PlaceIcon';

const Container = styled(View)`
    height: 100%;
    background-color: ${colors.neutral5};
`;

const Playlists = styled.ScrollView`
    padding-bottom: 16px;
    z-index: -1;
`;

const Home = () => {
    const { bannersLoaded } = useBannerPlaylists();
    const { selectedCity } = useCities();
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Container>
            {bannersLoaded ? (
                <Playlists>
                    <View
                        style={{ paddingBottom: 36, justifyContent: 'center' }}
                    >
                        <BannerPlaylists />
                        <Pressable
                            onPress={() => navigate(PATHS.CITIES)}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginBottom: 24,
                                marginTop: -36,
                            }}
                        >
                            <PlaceIcon />
                            <H2
                                style={{
                                    fontWeight: '700',
                                    marginRight: 4,
                                }}
                            >
                                {`${selectedCity.name}, ${selectedCity.state}`}
                            </H2>
                        </Pressable>
                        <View
                            style={{
                                marginBottom: 24,
                                alignItems: 'center',
                                width: '100%',
                            }}
                        >
                            <ToggleButton
                                options={['Concerts', 'Festivals']}
                                selectedIndex={activeTab}
                                onSelect={setActiveTab}
                            />
                        </View>
                        {activeTab === 0 && <ConcertsTab />}
                        {activeTab === 1 && <FestivalsTab />}
                    </View>
                </Playlists>
            ) : null}
        </Container>
    );
};

export default Home;
