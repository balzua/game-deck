import React from 'react';
import { shallow } from 'enzyme';
import {filterPlatform} from '../actions';

import {Platform} from '../components/platform';

describe('<Platform />', () => {
    it('Renders without crashing', () => {
        shallow(<Platform />);
    });
    it('Dispatches filterPlatform if isButton prop is present and component is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Platform isButton dispatch={dispatch} name="test" />);
        wrapper.find('span').simulate('click');
        expect(dispatch).toHaveBeenCalledWith(filterPlatform('test'));
    });
});