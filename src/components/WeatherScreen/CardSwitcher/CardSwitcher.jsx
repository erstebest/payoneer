import scss from './cardSwitcher.module.scss';
import ForwardIcon from '@material-ui/icons/Forward';
import { changeCurrentCardIdx } from '../../../state/actions/actions';
import { useSelector } from 'react-redux';

const CardSwitcher = () => {
    const { data, cardsToShow, currentCardIdx } = useSelector((state) => state.forecast);

    return (
        <div className={scss.cardSwitcher}>
            <ForwardIcon
                onClick={() => changeCurrentCardIdx('left')}
                className={`${scss.arrows} ${currentCardIdx === 0 ? scss.disabledArrow : ''}`}
                style={{ transform: 'rotate(180deg)' }}
                fontSize="inherit"
            />
            <ForwardIcon
                onClick={() => changeCurrentCardIdx('right')}
                className={`${scss.arrows} ${
                    currentCardIdx >= data.length - cardsToShow ? scss.disabledArrow : ''
                }`}
                fontSize="inherit"
            />
        </div>
    );
};

export default CardSwitcher;
