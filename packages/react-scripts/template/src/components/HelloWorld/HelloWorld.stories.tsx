import { storiesOf } from '@storybook/react';
import * as React from 'react';
import HelloWorld from '../HelloWorld';

storiesOf('Alert', module)
    .add('Success', () => <HelloWorld message="Storybook"/>);