import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { changeUnits } from '../../../state/actions/actions';
import { handleForecast } from '../../../middleware/middleware';
import scss from './unitsSwitcher.module.scss';

const UnitsSwitcher = () => {
    const { units } = useSelector((state) => state.forecast);

    const onUnitsSwitch = (e) => {
        changeUnits(e.target.value);
        handleForecast();
    };

    return (
        <RadioGroup
            row
            aria-label="temperature units"
            name="units"
            value={units}
            onChange={onUnitsSwitch}
            classes={{ root: scss.unitsSwitcher }}
        >
            <FormControlLabel value="metric" control={<Radio />} label="Celcius" />
            <FormControlLabel value="imperial" control={<Radio />} label="Fahrenheit" />
        </RadioGroup>
    );
};

export default UnitsSwitcher;
