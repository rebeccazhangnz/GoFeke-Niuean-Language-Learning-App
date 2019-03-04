// const server = require('../../server/server')
// const request = require('supertest')

test('Test testing environment', () => {
  expect(true).toBeTruthy()
})

// test('Test PUT route "/api/v1/feke" ', done => {
//   return request(server)
//     .put('/api/v1/feke')
//     .send({
//       id: 1,
//       category_id: '1',
//       name: 'dfads',
//       village: 'Avatele',
//       image: 'feke-red.png',
//       status: 'Level 1'
//     })
//     .expect(202)
//     .expect('Content-Type', 'application/json; charset=utf-8')
//     .then(res => {
//       expect(res.body).toEqual({
//         id: 1,
//         category_id: '1',
//         name: 'dfads',
//         village: 'Avatele',
//         image: 'feke-red.png',
//         status: 'Level 1'
//       })
//       done()
//     })
//     .catch(err => expect(err).toBeNull())
// })
