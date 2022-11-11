import React from 'react';
import { Platform, View } from 'react-native';

const ScrollBounceBackground = ({ color, spacerHeight = 1000 }) =>
    Platform.OS === 'ios' ? (
        <View
            style={{
                backgroundColor: color,
                height: spacerHeight,
                position: 'absolute',
                top: -spacerHeight,
                left: 0,
                right: 0,
            }}
        />
    ) : null;

export default ScrollBounceBackground;
