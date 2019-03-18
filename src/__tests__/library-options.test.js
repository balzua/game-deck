import React from 'react';
import { shallow } from 'enzyme';

import LibraryOptions from '../components/library-options';

describe('<LibraryOptions />', () => {
    it('Renders without crashing', () => {
        shallow(<LibraryOptions />);
    });
});