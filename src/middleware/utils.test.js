import { data } from '../apis/fakeData/getForecastsData';
import { setupForecast } from './utils';

test('should setup forecasts array with date, temp and segments', () => {
    const forecast = setupForecast(data);
    expect(forecast[0]).toHaveProperty('date', '2021-04-26 21:00:00');
    expect(forecast[0]).toHaveProperty('temp', 6.58);
    expect(forecast[0]).toHaveProperty('segments');
    expect(forecast[0].segments).toHaveLength(1);
    expect(forecast[1].segments).toHaveLength(2);
});
