import React from 'react';
import { shallow } from 'enzyme';
import { filterAll, filterNone, sortLibrary } from '../actions';

import {Controls} from '../components/controls';

describe('<Controls />', () => {
    it('Renders without crashing', () => {
        shallow(<Controls platforms={[]}/>);
    });
    it('Dispatches filterAll when button clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Controls dispatch={dispatch} platforms={[]}/>);
        const allButton = wrapper.findWhere(n => n.type() === 'button' && n.text() === "Filter All");
        allButton.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(filterAll());
    });
    it('Dispatches filterNone when button clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Controls dispatch={dispatch} platforms={[]}/>);
        const noneButton = wrapper.findWhere(n => n.type() === 'button' && n.text() === "Filter None");
        noneButton.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(filterNone());
    });
    it('Dispatches sortLibrary when dropdown changed (with proper value)', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Controls dispatch={dispatch} platforms={[]}/>);
        const sorting = wrapper.find('select');
        sorting.simulate('change', { target: {value: 'not-started'} });
        expect(dispatch).toHaveBeenCalledWith(sortLibrary('not-started'));
    });
});