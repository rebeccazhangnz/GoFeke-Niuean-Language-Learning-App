import categoryList from '../../client/reducers/categoryList'
import content from '../../client/reducers/content'

test('CategoryList reducer ECEIVING_CATEGORY_LIST', () => {
  const state = []
  const action = {
    type: 'RECEIVING_CATEGORY_LIST',
    categoryList: ['greeting', 'family', 'food', 'number']
  }
  const expected = ['greeting', 'family', 'food', 'number']
  const actual = categoryList(state, action)
  expect(actual).toEqual(expected)
})

test('Conetent reducerRECEIVING_CONTENT', () => {
  const state = []
  const action = {
    type: 'RECEIVING_CONTENT',
    content: [
      {
        id: 48,
        category_id: 4,
        english: 'Zero',
        niuean: 'Nakai',
        name: 'numbers'
      }
    ]
  }
  const expected = [
    {
      id: 48,
      category_id: 4,
      english: 'Zero',
      niuean: 'Nakai',
      name: 'numbers'
    }
  ]
  const actual = content(state, action)
  expect(actual).toEqual(expected)
})
