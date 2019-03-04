import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallow, render } from 'enzyme'
import Header from '../../client/components/Header'
import Dashboard from '../../client/components/Dashboard'
import FekeStatus from '../../client/components/FekeStatus'
import CategoryList from '../../client/components/CategoryList'
import CreateFeke from '../../client/components/CreateFeke'

test('<Header />', () => {
  const expected = '<Link />'
  const wrap = shallow(<Header />)
  expect(wrap.text()).toMatch(expected)
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
  it('start status should be level 1', () => {
    const mockStore = configureStore()({ isUpdated: false })
    const wrap = render(
      <Provider store={mockStore}>
        <CreateFeke />
      </Provider>
    )

    expect(wrap.find('img').attr('src')).toMatch('images/feke-blue.png')
  })
})

describe('test state <CreateFeke/> Component', () => {
  it('start status should be level 1', () => {
    const mockStore = configureStore()({ isUpdated: false })
    const wrap = render(
      <Provider store={mockStore}>
        <CreateFeke />
      </Provider>
    )

    expect(wrap.find('img').length).toBe(4)
  })
})
