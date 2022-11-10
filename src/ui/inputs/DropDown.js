import React, { useState } from "react";
import styled from "styled-components";
import DropDownPicker from "react-native-dropdown-picker";
import { colors } from "../theme";

const DropDown = ({ items, initialValue, onValueChange, ...props }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(initialValue);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      onChangeValue={onValueChange}
      searchable={true}
      style={{
        backgroundColor: colors.neutral5,
        borderColor: colors.neutral30,
      }}
      dropDownContainerStyle={{
        backgroundColor: colors.neutral5,
        borderColor: colors.neutral30,
        zIndex: 9,
      }}
      theme="DARK"
      searchPlaceholder="Search..."
      {...props}
    />
  );
};

export default DropDown;
