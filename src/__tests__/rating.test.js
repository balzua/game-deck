import React from 'react';
import { shallow } from 'enzyme';

import {Rating} from '../components/rating';

describe('<Rating />', () => {
    it('Renders without crashing', () => {
        shallow(<Rating />);
    });
    it('Renders the correct number of enabled/disabled stars', () => {
        const wrapper = shallow(<Rating rating={3} />);
        expect(wrapper.find('span.star-enabled')).toHaveLength(3);
        expect(wrapper.find('span.star-disabled')).toHaveLength(2);
    });
});