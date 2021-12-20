import React, { useMemo } from "react";
import { useCities } from "./CityProvider";
import DropDown from "../../ui/inputs/DropDown";

const CitySelect = () => {
  const { cities, selectedCity, selectCity } = useCities();
  const cityOptions = useMemo(
    () => cities.map((city) => ({ label: city.display_name, value: city })),
    [cities]
  );
  return (
    <DropDown
      initialValue={selectedCity}
      items={cityOptions}
      onValueChange={selectCity}
    />
  );
};

export default CitySelect;
