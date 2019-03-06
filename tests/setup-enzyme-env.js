import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

jest.spyOn(global.console, 'log').mockImplementation(() => jest.fn())