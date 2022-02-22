import React, { useMemo } from "react";
import { useCities } from "./CityProvider";
import DropDown from "../../ui/inputs/DropDown";

const CitySelect = () => {
  const { cities, selectedCity, selectCity, selectedCityLoaded } = useCities();
  const cityOptions = useMemo(
    () => cities.map((city, index) => ({ label: city.display_name, value: city.id})),
    [cities]
  );
  return selectedCityLoaded ? (
    <DropDown
      initialValue={selectedCity?.id}
      items={cityOptions}
      onValueChange={value => selectCity(cities.find(city => city.id === value))}
    />
  ) : null;
};

export default CitySelect;
