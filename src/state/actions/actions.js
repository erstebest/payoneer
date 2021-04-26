import store from '../store';

export const toggleLoader = (value) => {
    store.dispatch({
        type: 'forecast/toggleLoader',
        value,
    });
};

export const storeForecast = (forecast) => {
    store.dispatch({
        type: 'forecast/storeData',
        forecast,
    });
};

export const storeSelectedCardIdx = (idx) => {
    store.dispatch({
        type: 'forecast/storeSelectedCardIdx',
        idx,
    });
};

export const storeSelectedCard = (selectedCard) => {
    store.dispatch({
        type: 'forecast/storeSelectedCard',
        selectedCard,
    });
};

export const changeUnits = (units) => {
    store.dispatch({
        type: 'forecast/changeUnits',
        units,
    });
};

export const changeCurrentCardIdx = (dir) => {
    store.dispatch({
        type: 'forecast/changeCurrentCardIdx',
        dir,
    });
};
