import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Linking, Pressable, View } from 'react-native';
import { colors } from '../../ui/theme';
import { H2, Text } from '../../ui/Text';
import BannerPlaylists from './BannerPlaylists';
import { useBannerPlaylists } from '../playlists/BannerPlaylistProvider';
import { navigate } from '../../utils/navigation';
import PATHS from '../../contants/paths';
import { useCities } from '../cities/CityProvider';
import ToggleButton from '../../ui/actions/ToggleButton';
import ConcertsTab from './ConcertsTab';
import FestivalsTab from './FestivalsTab';
import PlaceIcon from '../../ui/icons/PlaceIcon';
import {
    PRIVACY_POLICY_URL,
    SUPPORT_EMAIL,
} from '../../contants/externalLinks';
import DownArrowIcon from '../../ui/icons/DownArrowIcon';

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
                            <H2
                                style={{
                                    fontWeight: '700',
                                    marginRight: 8,
                                    fontSize: 18,
                                }}
                            >
                                {`${selectedCity.name}, ${selectedCity.state}`}
                            </H2>
                            <DownArrowIcon />
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
                    <View
                        style={{
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 16,
                        }}
                    >
                        <Pressable
                            onPress={() => Linking.openURL(PRIVACY_POLICY_URL)}
                            style={{ marginBottom: 16 }}
                        >
                            <Text
                                style={{
                                    color: colors.primary80,
                                }}
                            >
                                Privacy Policy
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => Linking.openURL(SUPPORT_EMAIL)}
                            style={{ marginBottom: 16 }}
                        >
                            <Text style={{ color: colors.primary80 }}>
                                Contact Support
                            </Text>
                        </Pressable>
                    </View>
                </Playlists>
            ) : null}
        </Container>
    );
};

export default Home;
