import React, { useContext, useEffect, useState } from 'react';
import { getItem, setItem } from '../localStorage';
import { LIKED_SHOWS_STORAGE_KEY } from '../../contants/storageKeys';

const LikedShowsContext = React.createContext({
    likedShowIds: [],
    likeShow: () => {},
    dislikeShow: () => {},
    isShowLiked: () => {},
});

export const useLikedShows = () => useContext(LikedShowsContext);

const LikedShowsState = ({ children }) => {
    const [likedShowIds, setLikedShowIds] = useState(new Set());

    const likeShow = async showId => {
        const updatedLikedSongIds = new Set(likedShowIds.add(showId));
        setLikedShowIds(updatedLikedSongIds);
        await setItem(LIKED_SHOWS_STORAGE_KEY, Array.from(updatedLikedSongIds));
    };

    const dislikeShow = async showId => {
        const likedShowIdsCopy = new Set(likedShowIds);
        likedShowIdsCopy.delete(showId);
        const updatedLikedSongIds = new Set(likedShowIdsCopy);
        setLikedShowIds(updatedLikedSongIds);
        await setItem(LIKED_SHOWS_STORAGE_KEY, Array.from(updatedLikedSongIds));
    };

    const isShowLiked = showId => likedShowIds.has(showId);

    useEffect(() => {
        getItem(LIKED_SHOWS_STORAGE_KEY).then(
            likedShowsFromStorage =>
                likedShowsFromStorage &&
                setLikedShowIds(new Set(likedShowsFromStorage))
        );
    }, []);

    useEffect(() => {
        console.log(likedShowIds);
    }, [likedShowIds]);

    return (
        <LikedShowsContext.Provider
            value={{ likedShowIds, likeShow, dislikeShow, isShowLiked }}
        >
            {children}
        </LikedShowsContext.Provider>
    );
};

export default LikedShowsState;
