import fetch from 'cross-fetch';

const getForecast = async (units) => {
    const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40&units=${units}`
    );
    const data = await response.json();
    return data;
};

export { getForecast };
