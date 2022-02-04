import React, { useMemo } from "react";
import { useCities } from "./CityProvider";
import DropDown from "../../ui/inputs/DropDown";

const CitySelect = () => {
  const { cities, selectedCity, selectCity } = useCities();
  const cityOptions = useMemo(
    () => cities.map((city) => ({ label: city.display_name, value: city })),
    [cities]
  );
  const savedCity = useMemo(
    () => cityOptions.find((city) => city?.value?.id === selectedCity?.id),
    []
  );
  console.log(savedCity);
  return (
    <DropDown
      initialValue={savedCity}
      items={cityOptions}
      onValueChange={selectCity}
    />
  );
};

export default CitySelect;
