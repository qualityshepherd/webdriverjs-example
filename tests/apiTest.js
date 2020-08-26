import 'regenerator-runtime/runtime' // for jest polyfill :\
import * as api from '../lib/apiModule';

describe('API', () => {
  test('should return a random fact', async () => {
    const response = await api.getRandomFact();

    expect(await response.status.sentCount).toBe(1);
  });

  test('should get cat by id', async () => {
    const id = '5de780600013130015a3ccaf';
    const response = await api.getCatById(id);

    expect(await response._id).toBe(id);
  });
})