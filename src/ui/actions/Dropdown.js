import React, { useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import InfoIcon from "../icons/InfoIcon";
import { navigate } from "../../utils/navigation";
import PATHS from "../../contants/paths";
import IconButton from "../inputs/IconButton";
import { colors } from "../theme";
/***
 * - Click outside to close
 * - opens above if not enough room below
 *
 */

const DropdownBody = styled.View`
  position: absolute;
  top: 40px;
  right: 0;
  width: 200px;
  background-color: ${colors.neutral20};
  border: 1px solid ${colors.neutral40};
  opacity: 1;
  z-index: 99999999999999;
  border-radius: 2px;
  flex: 1;
`;

export const DropdownOption = styled.TouchableHighlight`
  padding: 8px;
  background-color: ${colors.neutral20};
`;

const Dropdown = ({ style, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={style}>
      <IconButton Icon={InfoIcon} onPress={() => setIsOpen(!isOpen)} />
      {isOpen && <DropdownBody>{children({ setIsOpen })}</DropdownBody>}
    </View>
  );
};

Dropdown.Option = DropdownOption;

export default styled(Dropdown)`
  z-index: 0;
  position: relative;
`;
