import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';
import { CenterDecorator } from './decorators/center';

// Decorators
addDecorator(CenterDecorator);

// storybook options
setOptions({
    name: 'UX-ToolKit',
    sidebarAnimations: true,
    showAddonPanel: false,
    
});

// withHelp options
setDefaults({
    header: false,
    source: true,
    propTables: false,
    inline: true
});

const reqStories = require.context('../stories/', true, /.tsx$/);
const reqSrc = require.context('../src/', true, /.stories.tsx$/);

function loadStories() {
    reqStories.keys().forEach((filename) => reqStories(filename));
    reqSrc.keys().forEach((filename) => reqSrc(filename));
}

configure(loadStories, module);
