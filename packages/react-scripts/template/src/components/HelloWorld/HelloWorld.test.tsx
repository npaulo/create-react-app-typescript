import { shallow } from 'enzyme';
import * as React from 'react';
import HelloWorld from './HelloWorld';

describe('<HelloWorld />', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<HelloWorld message="test" />).find('.b-bold')).toHaveLength(1);
    });
});