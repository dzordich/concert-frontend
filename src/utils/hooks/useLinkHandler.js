import React, { useEffect } from 'react';
import { useURL, parse } from 'expo-linking';
import { last } from 'ramda';
import { getShow } from '../../api/shows';
import { navigate } from '../navigation';
import PATHS from '../../contants/paths';

const HOSTNAME = 'stagebiteapp.com';

const useLinkHandler = () => {
    const url = useURL();

    useEffect(() => {
        if (url) {
            const { hostname, path } = parse(url);
            if (hostname === HOSTNAME && path.includes('shows/')) {
                console.log('GOT LINK');
                const showId = last(path.split('shows/'));
                console.log('getting show');
                getShow(showId).then(showResponse => {
                    console.log(showResponse);
                    navigate(PATHS.SHOW_DETAILS, showResponse);
                });
            }
        }
    }, [url]);
};

export default useLinkHandler;
