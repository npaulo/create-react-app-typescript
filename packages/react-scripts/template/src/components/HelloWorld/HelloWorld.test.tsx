import * as React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from './HelloWorld';

describe('<HelloWorld />', () => {
    it('should render without throwing an error', function () {
        expect(shallow(<HelloWorld message="test" />).find('.b-bold')).toHaveLength(1);
  });
});