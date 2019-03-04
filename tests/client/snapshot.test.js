import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallow, render } from 'enzyme'
import Header from '../../client/components/Header'
import Dashboard from '../../client/components/Dashboard'
import CreateFeke from '../../client/components/CreateFeke'


test('<CreateFeke />', () => {
    const mockStore = configureStore()({ isUpdated: false })
    const wrap = shallow(
      <Provider store={mockStore}>
        <CreateFeke />)
      </Provider>
    )
    const component = wrap
  
    expect(renderer.create(component).toJSON()).toMatchSnapshot()
  })



test('<Header />', () => {
  const wrap = shallow(<Header />)
  const component = wrap.text()
      expect(renderer.create(component).toJSON()).toMatchSnapshot()
})


test('<Dashboard />', () => {
    const mockStore = configureStore()({ isUpdated: false })
    const wrap = shallow(
      <Provider store={mockStore}>
        <Dashboard />)
      </Provider>
    )
    const component = wrap.text()
  
    expect(renderer.create(component).toJSON()).toMatchSnapshot()
  })