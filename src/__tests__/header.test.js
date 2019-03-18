import React from 'react';
import { shallow } from 'enzyme';
import {logout} from '../actions';

import {Header} from '../components/header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });
    it('Dispatches logout action properly', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Header dispatch={dispatch} authToken={3} />);
        const logoutLink = wrapper.findWhere(n => n.type() === 'a' && n.text() === "Logout");
        logoutLink.simulate('click');
        expect(dispatch).toHaveBeenCalled();
    });
});