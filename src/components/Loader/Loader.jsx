import scss from './Loader.module.scss';
import { CircularProgress } from '@material-ui/core';

export const Loader = () => {
    return (
        <div className={scss.loader}>
            <CircularProgress />
        </div>
    );
};
export default Loader;
