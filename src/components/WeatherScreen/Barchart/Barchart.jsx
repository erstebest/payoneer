import moment from 'moment';
import { useSelector } from 'react-redux';
import { getUnitsSymbol } from '../utils';
import scss from './Barchart.module.scss';
import { defineOnePercentValue } from './utils';

const Barchart = () => {
    const { selectedCard, units } = useSelector((state) => state.forecast);
    const onePercentHeightValue = defineOnePercentValue(selectedCard);

    return selectedCard.segments.length ? (
        <div className={scss.barchart}>
            {selectedCard.segments.map((segment, i) => {
                return (
                    <div className={scss.bar} key={i}>
                        <div
                            className={scss.barInner}
                            style={{
                                height: Math.round(onePercentHeightValue * segment.temp) + '%',
                            }}
                        ></div>
                        <div className={scss.barTime}>
                            {moment(segment.segmentDate).format('HH:00')}
                        </div>
                        <div className={scss.barValue}>
                            {Math.round(segment.temp)}
                            {getUnitsSymbol(units)}
                        </div>
                    </div>
                );
            })}
        </div>
    ) : null;
};

export default Barchart;
