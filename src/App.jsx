import 'normalize.css/normalize.css';
import './scss/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './state/store';
import { Provider } from 'react-redux';
import { ErrorsHandler } from './components/ErrorsHandler';
import WeatherScreen from './components/WeatherScreen/WeatherScreen';
import scss from './App.module.scss';

const App = () => (
    <ErrorsHandler>
        <Provider store={store}>
            <div className={scss.app}>
                <WeatherScreen />
            </div>
        </Provider>
    </ErrorsHandler>
);

ReactDOM.render(<App />, document.getElementById('app'));
