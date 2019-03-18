import React from 'react';
import { shallow } from 'enzyme';
import {addGames, fetchGames} from '../actions';

import {AddGame} from '../components/add-game';

describe('<AddGame />', () => {
    it('Renders without crashing', () => {
        shallow(<AddGame />);
    });
    it('Dispatches right actions after submitted', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<AddGame dispatch={dispatch} user='user' />);
        wrapper.setState({ selectedOption: [{value: 'test'}, {value: 'test2'}] });
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {
            }
        });
        expect(dispatch).toHaveBeenCalled();
    });
});