const forecast = (
    state = {
        isLoading: false,
        units: 'metric',
        data: [],
        selectedCardIdx: 0,
        selectedCard: { segments: [] },
        cardsToShow: 3,
        currentCardIdx: 0,
    },
    action
) => {
    switch (action.type) {
        case 'forecast/toggleLoader':
            return {
                ...state,
                isLoading: action.value,
            };
        case 'forecast/storeData':
            return {
                ...state,
                data: action.forecast,
            };
        case 'forecast/storeSelectedCardIdx':
            return {
                ...state,
                selectedCardIdx: action.idx,
            };
        case 'forecast/storeSelectedCard':
            return {
                ...state,
                selectedCard: action.selectedCard,
            };
        case 'forecast/changeUnits':
            return {
                ...state,
                units: action.units,
            };
        case 'forecast/changeCurrentCardIdx': {
            const { dir } = action;
            let { currentCardIdx: idx, data, cardsToShow } = state;
            if (dir === 'left') idx--;
            else if (dir === 'right') idx++;

            idx = idx < 0 ? 0 : idx > data.length - cardsToShow ? data.length - cardsToShow : idx;

            return {
                ...state,
                currentCardIdx: idx,
            };
        }

        default:
            return state;
    }
};

export default forecast;
