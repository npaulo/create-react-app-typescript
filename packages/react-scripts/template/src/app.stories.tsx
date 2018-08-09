import * as React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('My big story', module)
  .add('hello world', () => (
    <span>Hello World!</span>
  ));