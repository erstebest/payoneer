import { getForecast } from '../apis/requests';
import { storeForecast, storeSelectedCard, toggleLoader } from '../state/actions/actions';
import store from '../state/store';
import { setupForecast } from './utils';

export const handleForecast = async () => {
    toggleLoader(true);
    const { units, selectedCardIdx } = store.getState().forecast;
    const data = await getForecast(units);
    const forecast = setupForecast(data);

    storeForecast(forecast);
    if (selectedCardIdx !== 0) storeSelectedCard(forecast[selectedCardIdx]);
    else storeSelectedCard(forecast[0]);
    toggleLoader(false);
};
