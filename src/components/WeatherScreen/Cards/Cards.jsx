import moment from 'moment';
import { useSelector } from 'react-redux';
import { storeSelectedCard, storeSelectedCardIdx } from '../../../state/actions/actions';
import { getUnitsSymbol } from '../utils';
import scss from './Cards.module.scss';

const Cards = () => {
    const { units, data, selectedCard, cardsToShow, currentCardIdx } = useSelector(
        (state) => state.forecast
    );

    const onCardClick = (card, idx) => {
        storeSelectedCard(card);
        storeSelectedCardIdx(idx);
    };

    return (
        <div className={scss.cards}>
            {data.map((card, i) => {
                if (i >= currentCardIdx && i < currentCardIdx + cardsToShow)
                    return (
                        <div
                            className={`${scss.card} ${
                                selectedCard.date === card.date ? scss.cardSelected : ''
                            }`}
                            key={i}
                            onClick={() => onCardClick(card, i)}
                        >
                            <div>Temp:</div>
                            <div>
                                {Math.round(card.temp)}
                                {getUnitsSymbol(units)}
                            </div>
                            <div>Date:</div>
                            <div>{moment(card.date).format('DD MMM YY')}</div>
                        </div>
                    );
            })}
        </div>
    );
};

export default Cards;
