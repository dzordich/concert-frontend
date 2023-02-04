import * as Linking from 'expo-linking';
import PATHS from '../contants/paths';

export const linking = {
    prefixes: [Linking.createURL('/'), 'https://stagebiteapp.com'],
    config: {
        screens: {
            [PATHS.SHOW_DETAILS]: 'shows/:id',
        },
    },
};
