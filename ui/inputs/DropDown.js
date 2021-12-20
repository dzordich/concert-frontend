import React, { useState } from "react";
import styled from "styled-components";
import DropDownPicker from "react-native-dropdown-picker";
import { colors } from "../theme";

const DropDown = ({ items, initialValue, onValueChange }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      onChangeValue={onValueChange}
      searchable={true}
      style={{ backgroundColor: colors.neutral30 }}
      dropDownContainerStyle={{ backgroundColor: colors.neutral20, zIndex: 9 }}
      theme="DARK"
    />
  );
};

export default DropDown;
