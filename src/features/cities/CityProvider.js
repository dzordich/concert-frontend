import React, { useContext } from 'react';
import { listCities } from '../../api/cities';
import { getItem, setItem } from '../../utils/localStorage';
import { CITY_STORAGE_KEY } from '../../contants/storageKeys';

const CityContext = React.createContext({
    cities: [],
    selectedCity: null,
    citiesLoaded: false,
    selectCity: null,
});

export const useCities = () => useContext(CityContext);

class CityProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            selectedCity: null,
            citiesLoaded: false,
            selectCity: this.selectCity,
        };
    }

    selectCity = selectedCity => {
        this.setState({ selectedCity });
        setItem(CITY_STORAGE_KEY, selectedCity);
    };

    async componentDidMount() {
        const cities = await listCities();
        const selectedCity = await getItem(CITY_STORAGE_KEY);
        this.setState({ cities, selectedCity, citiesLoaded: true });
    }

    render() {
        return (
            <CityContext.Provider value={this.state}>
                {this.props.children}
            </CityContext.Provider>
        );
    }
}

export default CityProvider;
