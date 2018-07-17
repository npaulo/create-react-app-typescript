import * as react from 'react';
import { AltitudeCSS } from './decorators/altitudecss';
import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';

const req = require.context('../src/', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addDecorator(centered);
addDecorator(AltitudeCSS);

configure(loadStories, module);
