import React from 'react';
import styled, { css } from 'styled-components/native';
import { colors } from '../theme';
import { View } from 'react-native';
import { Text } from '../Text';

const layout = css`
    flex-direction: row;
    border-radius: 4px;
    overflow: hidden;
`;

const Option = styled.TouchableHighlight`
    padding: 12px 36px;
    background-color: ${colors.neutral10};

    ${props =>
        props.selected
            ? `
    background-color: ${colors.primary60};
    border-radius: 4px;
  `
            : ''}
`;

const ToggleButton = ({ style, options, selectedIndex, onSelect }) => {
    return (
        <View style={style}>
            {options.map((option, idx) => (
                <Option
                    selected={idx === selectedIndex}
                    onPress={() => onSelect(idx)}
                    key={idx}
                >
                    <Text>{option}</Text>
                </Option>
            ))}
        </View>
    );
};

export default styled(ToggleButton)`
    ${layout}
`;
