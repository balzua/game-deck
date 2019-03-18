import React from 'react';
import { shallow } from 'enzyme';
import { deleteGame } from '../actions';

import {DeleteButton} from '../components/delete-button';

describe('<DeleteButton />', () => {
    it('Renders without crashing', () => {
        shallow(<DeleteButton />);
    });
    it('Displays Deleting... text when deleteRequest is made', () => {
        const wrapper = shallow(<DeleteButton deleteRequest={true} />)
        const text = wrapper.find('.delete-button');
        expect(text.text()).toEqual('Deleting...');
    });
    it('Flips the deleting state to false when cancel button is clicked', () => {
        const wrapper = shallow(<DeleteButton />);
        wrapper.setState({deleting: true});
        const cancel = wrapper.findWhere(n => n.type() === 'button' && n.text() === "Cancel");
        cancel.simulate('click');
        expect(wrapper.state('deleting')).toEqual(false);
    });
    it('Dispatch the delete game action when delete is clicked', () => {
        const dispatch = jest.fn();
        const mockId = 3;
        const wrapper = shallow(<DeleteButton dispatch={dispatch} id={mockId} />);
        wrapper.setState({deleting: true});
        const cancel = wrapper.findWhere(n => n.type() === 'button' && n.text() === "Delete");
        cancel.simulate('click');
        expect(dispatch).toHaveBeenCalled();
    });
});