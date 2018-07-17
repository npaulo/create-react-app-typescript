const path = require('path');
const testCssRule = "" + /\.css$/;
const testCssLoaderRx = /\bcss-loader\b/

module.exports = (baseConfig, env, config) => {

    // add alias
    config.resolve = config.resolve || {}
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["@node_modules"] = path.resolve(__dirname, "../node_modules");

    // CSS MODLUDES
    let cssRule = config.module.rules.find((r) => "" + r.test == testCssRule);
    if (cssRule) {
        let cssModules = cssRule.use.find((l) => testCssLoaderRx.test(l.loader));
        if (cssModules) {
            cssModules.options = cssModules.options || {};
            cssModules.options.modules = true;
            cssModules.options.sourceMap = true;
            cssModules.options.importLoaders = 1;
            cssModules.options.localIdentName = "[name]--[local]--[hash:base64:8]"
        }
    }

    // typescript
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../src'),
        loader: require.resolve('ts-loader'),
        options: {
            configFile: 'tsconfig.storybook.json'
        }
    });
    config.resolve.extensions.push('.ts', '.tsx');

    // SASS
    config.module.rules.push({
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, '../')
    });

    return config;
};