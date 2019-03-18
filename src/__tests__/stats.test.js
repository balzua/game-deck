import React from 'react';
import { shallow } from 'enzyme';

import {Stats} from '../components/stats';

describe('<Stats />', () => {
    it('Renders without crashing', () => {
        shallow(<Stats />);
    });
    it('Renders with correct properties', () => {
        const wrapper = shallow(<Stats totalGames={3} totalCompleted={2} averageRating={3.5} />);
        expect(wrapper.find('span').at(0).text()).toEqual("Total Games3");
        expect(wrapper.find('span').at(1).text()).toEqual("# Completed2");
        expect(wrapper.find('span').at(2).text()).toEqual("Average Rating3.5");
    });
});