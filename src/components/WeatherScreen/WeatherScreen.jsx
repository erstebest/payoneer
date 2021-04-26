import { useEffect } from 'react';
import scss from './WeatherScreen.module.scss';
import { handleForecast } from '../../middleware/middleware';
import UnitsSwitcher from './UnitsSwitcher/UnitsSwitcher';
import CardSwitcher from './CardSwitcher/CardSwitcher';
import Cards from './Cards/Cards';
import Barchart from './Barchart/Barchart';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';

const WeatherScreen = () => {
    const { isLoading } = useSelector((state) => state.forecast);

    useEffect(() => {
        handleForecast();
    }, []);

    return (
        <div className={scss.weatherScreen}>
            <UnitsSwitcher />
            <CardSwitcher />
            <Cards />
            <Barchart />
            {isLoading && <Loader />}
        </div>
    );
};

export default WeatherScreen;
