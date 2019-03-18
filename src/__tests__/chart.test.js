import React from 'react';
import { shallow } from 'enzyme';

import {Chart} from '../components/chart';

describe('<Chart />', () => {
    it('Renders without crashing', () => {
        shallow(<Chart />);
    });
});