import React from 'react';
import { shallow } from 'enzyme';
import { toggleModal } from '../actions';

import {Modal} from '../components/modal';

describe('<Modal />', () => {
    it('Renders only when display is true', () => {
        shallow(<Modal display={true} />);
    });
    it('Renders with the correct content', () => {
        const wrapper = shallow(<Modal display={true} content="Login" />);
        expect(wrapper.find('h1').text()).toEqual('Login');
    });
    it('Fires the toggleModal action when closed', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Modal display={true} content="Login" dispatch={dispatch} />);
        wrapper.simulate('click', {target: { className: 'modal' } });
        expect(dispatch).toHaveBeenCalledWith(toggleModal());
    });
});