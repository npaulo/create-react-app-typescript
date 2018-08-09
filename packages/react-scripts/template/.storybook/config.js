import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';
import { CenterDecorator } from './decorators/center';

// Decorators
addDecorator(CenterDecorator);

// storybook options
setOptions({
    name: 'StoryBook',
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

const reqSrc = require.context('../src/', true, /.stories.tsx$/);

function loadStories() {
    reqSrc.keys().forEach((filename) => reqSrc(filename));
}

configure(loadStories, module);
