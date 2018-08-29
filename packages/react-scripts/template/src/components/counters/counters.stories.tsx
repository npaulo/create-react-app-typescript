import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Counters } from './counters';

storiesOf('Counters', module)
    .add('Simple counter', () => (
        <Counters count={1} label="My counter" onIncrement={action('Counter has incremented')}/>
    ));