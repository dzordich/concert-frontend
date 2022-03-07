import React, { useState, useEffect, useContext } from "react";
import { listCities } from "../../api/cities";
import { getItem, setItem } from "../../utils/localStorage";
import { CITY_STORAGE_KEY } from "../../contants/storageKeys";

const CityContext = React.createContext({
  cities: [],
  selectedCity: null,
  selectedCityLoaded: false,
  selectCity: null,
});

const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  // const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCity, setSelectedCity] = useState({
    name: "Austin",
    state: "TX",
    country: "US",
    id: 1,
  });
  // const [selectedCityLoaded, setSelectedCityLoaded] = useState(false);
  const [selectedCityLoaded, setSelectedCityLoaded] = useState(true);

  // const selectCity = (city) => {
  //   setSelectedCity(city);
  //   setItem(CITY_STORAGE_KEY, city);
  // };
  //
  // useEffect(() => {
  //   listCities()
  //     .then(setCities)
  //     .then(() => getItem(CITY_STORAGE_KEY))
  //     .then((item) => item && setSelectedCity(item))
  //     .then(() => setSelectedCityLoaded(true));
  // }, []);

  return (
    <CityContext.Provider value={{ cities, selectedCity, selectedCityLoaded }}>
      {children}
    </CityContext.Provider>
  );
};

export default CityProvider;

export const useCities = () => useContext(CityContext);
