const createFeke = require('../../client/actions/createFeke')
const getFekeStatus = require('../../client/actions/getFekeStatus')
const category = require('../../client/actions/index')


test('test receiveFeke returns expected type', () => {
  const feke = {
    id: 1,
    category_id: 1,
    name: 'dfads',
    village: 'Avatele',
    image: 'feke-red.png',
    status: 'Level 1'
  }

  const expected = {
    type: 'RECEIVING_FEKE',
    feke: feke
  }
  const actual = getFekeStatus.receiveFeke(feke)
  expect(actual).toEqual(expected)
})

test('test updatePercentage returns expected type', () => {
  const percentage = 100
  const expected = {
    percentage: 100,
    type: 'UPDATE_PERCENTAGE'
  }
  const actual = getFekeStatus.updatePercentage(percentage)
  expect(actual).toEqual(expected)
})

test('test requestFeke returns expected type', () => {
  const expected = 'REQUESTING_FEKE'
  const actual = getFekeStatus.requestFeke().type
  expect(actual).toEqual(expected)
})



test('test isUpdated returns expected type', () => {
  const expected = 'UPDATED'
  const actual = createFeke.isUpdated().type
  expect(actual).toBe(expected)
})

test('test resetUpdate returns expected type', () => {
  const expected = 'RESET_UPDATE'
  const actual = createFeke.resetUpdate().type
  expect(actual).toBe(expected)
})

test('test requestContent returns expected type', () => {
  const expected = 'REQUESTING_CONTENT'
  const actual = category.requestContent().type
  expect(actual).toBe(expected)
})

test('test receiveContent returns expected type', () => {
  const expected = 'RECEIVING_CONTENT'
  const actual = category.receiveContent().type
  expect(actual).toBe(expected)
})

test('test requestCategoryList returns expected type', () => {
  const expected = 'REQUESTING_CATEGORY_LIST'
  const actual = category.requestCategoryList().type
  expect(actual).toBe(expected)
})

test('test receiveCategoryList returns expected type', () => {
  const expected = 'RECEIVING_CATEGORY_LIST'
  const actual = category.receiveCategoryList().type
  expect(actual).toBe(expected)
})
