var webpackConfig = require('alt-lib-react-scripts-ts/config/webpack.config.dev.js');
const webpackConfigOverride = require('./webpack.config-overrides.dev');
webpackConfigOverride(webpackConfig);

module.exports = {
    components: 'src/components/**/*.{ts,tsx}',
    propsParser: require('react-docgen-typescript').parse,
    webpackConfig: webpackConfig,
    ignore: [
        'src/setupTests.ts',
        '**/*.spec.ts',
        '**/*.spec.tsx',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.d.ts',
        '**/index.ts',
        '**/index.tsx'
    ]
}
