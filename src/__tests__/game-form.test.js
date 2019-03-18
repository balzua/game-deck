import React from 'react';
import { shallow, mount } from 'enzyme';

import {GameForm} from '../components/game-form';

describe('<GameForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GameForm />);
    });
    it('Has default value equal to the property provided', () => {
        const wrapper = mount(<GameForm status='test' />);
        const dropDown = wrapper.find('select').props();
        expect(dropDown.defaultValue).toEqual('test');
    });
    it('Dispatches updateStatus when dropdown is changed', () => {
        const dispatch = jest.fn();
        const mockId = 3;
        const wrapper = mount(<GameForm status='test' dispatch={dispatch} id={mockId} />);
        const dropDown = wrapper.find('select');
        dropDown.simulate('change', {target: {value: 'test'} });
        expect(dispatch).toHaveBeenCalled();
    });
});