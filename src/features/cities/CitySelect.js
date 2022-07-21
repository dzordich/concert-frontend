import React, { useMemo } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { useCities } from "./CityProvider";
import DropDown from "../../ui/inputs/DropDown";
import PATHS from "../../contants/paths";
import {colors} from "../../ui/theme";
import ActivityIndicator from "../../ui/ActivityIndicator";

const CitySelect = ({ style, navigation }) => {
  const { cities, selectedCity, selectCity, citiesLoaded } = useCities();
  const cityOptions = useMemo(
    () =>
      cities.map((city) => ({
        label: city.display_name,
        value: city.id,
      })),
    [cities]
  );
  const shouldNavigate = useMemo(() => !!selectedCity, [selectedCity])
  return (
    <View style={style}>
      {citiesLoaded ? (
        <DropDown
          initialValue={selectedCity?.id}
          items={cityOptions}
          placeholder="Select city..."
          onValueChange={(value) => {
              selectCity(cities.find((city) => city.id === value))
              shouldNavigate && navigation.navigate(PATHS.HOME)
          }
          }
        />
      ) : <ActivityIndicator />}
    </View>
  );
};

export default styled(CitySelect)`
  padding: 16px;
  height: 100%;
  background-color: ${colors.neutral5};
`;
