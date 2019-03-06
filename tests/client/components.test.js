import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallow, render } from 'enzyme'
import Header from '../../client/components/Header'
import Dashboard from '../../client/components/Dashboard'
import FekeStatus from '../../client/components/FekeStatus'
import CategoryList from '../../client/components/CategoryList'
import CreateFeke from '../../client/components/CreateFeke'

test('<CategoryList />', () => {
  const mockStore = configureStore()({
    categoryList: [
      { id: 1, name: 'family' },
      { id: 2, name: 'food' },
      { id: 3, name: 'greetings' },
      { id: 4, name: 'numbers' },
      { id: 5, name: 'time' },
      { id: 6, name: 'body' }
    ]
  })
  const wrap = shallow(
    <Provider store={mockStore}>
      <CategoryList />
    </Provider>
  )
  const expected = { id: 4, name: 'numbers' }
  const actual = wrap.state()['storeState'].categoryList[3]
  expect(actual).toEqual(expected)
})

test('<FekeStatus />', () => {
  const mockStore = configureStore()({
    feke: [
      {
        id: 1,
        category_id: 1,
        name: 'Fekefeke',
        village: 'Avatele',
        image: 'feke-blue.png',
        status: 'Level 1'
      }
    ]
  })
  const wrap = shallow(
    <Provider store={mockStore}>
      <FekeStatus />
    </Provider>
  )
  const expected = "Fekefeke"
  const actual = wrap.state()['storeState'].feke[0].name
  expect(actual).toEqual(expected)
})

test('<Dashboard />', () => {
  const mockStore = configureStore()({ isUpdated: false })
  const wrap = shallow(
    <Provider store={mockStore}>
      <Dashboard />)
    </Provider>
  )
  const expected = true
  const actual = wrap.containsAllMatchingElements([FekeStatus, CategoryList])

  expect(actual).toBe(expected)
})

describe('test state <CreateFeke/> Component', () => {
  it('there should be a blue feke image in this component', () => {
    const mockStore = configureStore()({ isUpdated: false })
    const wrap = render(
      <Provider store={mockStore}>
        <CreateFeke />
      </Provider>
    )

    expect(wrap.find('img').attr('src')).toMatch('images/feke-blue.png')
  })
})

describe('test state <CreateFeke/> Component, which renders all 4 images', () => {
  it('there should be 4 images in this component', () => {
    const mockStore = configureStore()({ isUpdated: false })
    const wrap = render(
      <Provider store={mockStore}>
        <CreateFeke />
      </Provider>
    )

    expect(wrap.find('img').length).toBe(4)
  })
})

test('<Header />', () => {
  const expected = '<Link />'
  const wrap = shallow(<Header />)
  expect(wrap.text()).toMatch(expected)
})
