import React from 'react';
import IconButton from './IconButton';
import FilledInHeartIcon from '../icons/FilledInHeartIcon';
import HeartIcon from '../icons/HeartIcon';
import { useLikedShows } from '../../utils/hooks/LikedShowsState';

const LikeShowButton = ({ showId, width, height, style }) => {
    const { likeShow, dislikeShow, isShowLiked } = useLikedShows();

    return isShowLiked(showId) ? (
        <IconButton
            Icon={FilledInHeartIcon}
            onPress={() => {
                dislikeShow(showId);
            }}
            width={width || '20px'}
            height={height || '20px'}
            style={style}
        />
    ) : (
        <IconButton
            Icon={HeartIcon}
            onPress={() => {
                likeShow(showId);
            }}
            width={width || '20px'}
            height={height || '20px'}
            style={style}
        />
    );
};

export default LikeShowButton;
