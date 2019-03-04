const testEnv = require('./test-environment')
const dbFeke = require('../../server/db/feke')
const dbCategory = require('../../server/db/category')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))
test('Test testing environment', () => {
  expect(true).toBeTruthy()
})

test('getUsers gets all catogory', () => {
  const expected = 'family'
  return dbCategory.getCategoryList(testDb)
    .then(Category => {
      const actual = Category[0].name
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
