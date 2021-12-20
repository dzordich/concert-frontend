import React, { useState, useEffect, useContext } from "react";
import { listCities } from "../../api/cities";
import { getItem, setItem } from "../../utils/localStorage";
import { CITY_STORAGE_KEY } from "../../contants/storageKeys";

const CityContext = React.createContext({
  cities: [],
  selectedCity: null,
  selectCity: null,
});

const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const selectCity = (city) => {
    setSelectedCity(city);
    setItem(CITY_STORAGE_KEY, city);
  };

  useEffect(() => {
    listCities().then(setCities);
    getItem(CITY_STORAGE_KEY).then((item) => item && setSelectedCity(item));
  }, []);

  return (
    <CityContext.Provider value={{ cities, selectedCity, selectCity }}>
      {children}
    </CityContext.Provider>
  );
};

export default CityProvider;

export const useCities = () => useContext(CityContext);
