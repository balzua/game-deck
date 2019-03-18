import React from 'react';
import { shallow } from 'enzyme';

import Landing from '../components/landing';

describe('<Footer />', () => {
    it('Renders without crashing', () => {
        shallow(<Landing />);
    });
});