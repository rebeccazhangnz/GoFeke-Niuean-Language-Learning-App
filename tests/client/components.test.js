import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../client/components/Header'
import Dashboard from '../../client/components/Dashboard'
import FekeStatus from '../../client/components/FekeStatus'
import CategoryList from '../../client/components/CategoryList'


test('<Header />', () => {
    const expected = "<Link />"
    const wrapper = shallow(<Header>
        </Header>)
    expect(wrapper.text()).toMatch(expected)
  })


test.skip('<Dashboard />', () => {
    const expected = true
    const wrapper = shallow(<Dashboard />)
    const actual = wrapper.containsAllMatchingElements(FekeStatus,CategoryList)

    expect(actual).toBe(expected)
})