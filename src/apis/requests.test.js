import 'regenerator-runtime/runtime';
import { getForecast } from './requests';

test('should fetch 40 forecasts with temperature', async () => {
    const data = await getForecast('metric');

    expect(data).toHaveProperty('list');
    expect(data.list).toHaveLength(40);
    expect(data.list[0].main).toHaveProperty('temp');
});
