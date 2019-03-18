import React from 'react';
import { shallow } from 'enzyme';

import LibraryItem from '../components/library-item';

describe('<LibraryItem />', () => {
    it('Renders without crashing', () => {
        shallow(<LibraryItem />);
    });
});