import api from '../lib/apiModule'

describe('API', () => {
  test('should return a random fact', async () => {
    const response = await api.get('/facts/random')
    const json = await response.json()

    expect(response.status).toBe(200)
    expect(json.status.sentCount).toBe(1)
  })

  test('should get cat by id', async () => {
    const id = '5de780600013130015a3ccaf'
    const response = await api.get(`/facts/${id}`)
    const json = await response.json()

    expect(response.status).toBe(200)
    expect(json._id).toBe(id)
  })

  test('should get facts by type', async () => {
    const response = await api.get(`/facts/random?animal_type=cat`)
    const json = await response.json()

    expect(response.status).toBe(200)
    expect(json.type).toBe('cat')
  })

  test('should get facts by amount', async () => {
    const response = await api.get(`/facts/random?amount=2`)
    const json = await response.json()

    expect(response.status).toBe(200)
    expect(json.length).toBe(2)
  })

  test('should error on invalid id', async () => {
    const response = await api.get('/facts/invalid_id')
    const json = await response.json()

    expect(response.status).toBe(400)
    expect(json.message).toBeDefined()
  })
})