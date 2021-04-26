import moment from 'moment';

export const getForecastByDate = (forecastArray, date) => {
    return forecastArray.find((forecast) => moment(forecast.date).date() === moment(date).date());
};

export const setupForecast = (data) => {
    const forecast = [];

    data.list.forEach((item) => {
        const foundForecast = getForecastByDate(forecast, item.dt_txt);
        const segment = { segmentDate: item.dt_txt, temp: item.main.temp };

        if (!foundForecast) {
            forecast.push({
                date: item.dt_txt,
                temp: item.main.temp,
                segments: [segment],
            });
        } else {
            foundForecast.segments = [...foundForecast.segments, segment];
        }
    });

    return forecast;
};
