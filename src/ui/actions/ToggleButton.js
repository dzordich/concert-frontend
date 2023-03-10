import React from 'react';
import styled, { css } from 'styled-components/native';
import { colors } from '../theme';
import { View } from 'react-native';
import { Text } from '../Text';

const layout = css`
    flex-direction: row;
    border-radius: 4px;
    overflow: hidden;
    background-color: ${colors.neutral10};
`;

const Option = styled.TouchableHighlight`
    padding: 12px 48px;
    background-color: ${colors.neutral10};
    justify-content: center;

    ${props =>
        props.selected
            ? `
    background-color: ${colors.primary60};
    border-radius: 4px;
    margin: 2px;
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
