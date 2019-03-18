import React from 'react';
import { shallow } from 'enzyme';

import {GameList} from '../components/game-list';

describe('<GameList />', () => {
    it('Renders without crashing', () => {
        shallow(<GameList />);
    });
});