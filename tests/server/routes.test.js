const server = require('../../server/server')
const request = require('supertest')

test('Test PUT route "/api/v1/feke" ', done => {
  return request(server)
    .put('/api/v1/feke')
    .send({
      id: 1,
      category_id: 1,
      name: 'dfads',
      village: 'Avatele',
      image: 'feke-red.png',
      status: 'Level 1'
    })
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .then(res => {
      expect(res.body).toEqual([{
        id: 1,
        category_id: 1,
        name: 'dfads',
        village: 'Avatele',
        image: 'feke-red.png',
        status: 'Level 1'
      }])
      done()
    })
    .catch(err => expect(err).toBeNull())
})

test('Category /api/v1/category/family', () => {
  return request(server)
    .get('/api/v1/category/family')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .then((res) => {
      const content = res.body
      expect(content[0].name).toBe('family')
      expect(content[7].niuean).toBe('pulapulaola / mokopuna')
      expect(content[12].english).toBe('parent')
    })
    .catch(err => expect(err).toBeNull())
})


test('Category /api/v1/category/food', () => {
  return request(server)
    .get('/api/v1/category/food')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .then((res) => {
      const content = res.body
      expect(content[0].name).toBe('food')
      expect(content[4].niuean).toBe('fua meleni')
      expect(content[11].english).toBe('coconut')
    })
    .catch(err => expect(err).toBeNull())
})


test('quiz /api/v1/quiz', () => {
  return request(server)
    .get('/api/v1/quiz')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .then((res) => {
      const content = res.body
      expect(content[0].answer).toBe( "Matua taane")
      expect(content[1].answer).toBe( "Matua fifine")
      expect(content[2].answer).toBe( "Lole")  
    })
    .catch(err => expect(err).toBeNull())
})

test('quiz /api/v1/quiz', () => {
  return request(server)
    .get('/api/v1/quiz')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .then((res) => {
      const actual = res.body.length
      expect(actual).toBe(20)
    })
    .catch(err => expect(err).toBeNull())
})