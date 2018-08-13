const path = require('path');
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");

const testCssRule = "" + /\.css$/;
const testCssLoaderRx = /\bcss-loader\b/
const testPostCssLoaderRx = /\bpostcss-loader\b/

module.exports = (baseConfig, env, config) => {

    // add alias
    config.resolve = config.resolve || {}
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["@node_modules"] = path.resolve(__dirname, "../node_modules");
    config.resolve.alias["@src"] = path.resolve(__dirname, "../src/");

    // CSS MODLUDES
    const cssRule = config.module.rules.find((r) => "" + r.test == testCssRule);
    if (cssRule) {
        const cssLoader = cssRule.use.find((l) => testCssLoaderRx.test(l.loader));
        if (cssLoader) {
            cssLoader.options = cssLoader.options || {};
            cssLoader.options.modules = true;
            cssLoader.options.sourceMap = true;
            cssLoader.options.importLoaders = 1;
            cssLoader.options.localIdentName = "[name]--[local]--[hash:base64:8]"
        }

        const postCssLoader = cssRule.use.find((l) => testPostCssLoaderRx.test(l.loader));
        if (postCssLoader) {
            postCssLoader.options = postCssLoader.options || {};
            postCssLoader.options.plugins = () => [
                require('postcss-cssnext')({
                    features: {
                        customProperties: {
                            variables: { 'color-primary': '#317dba'},
                        },
                    },
                })
            ];
        }
    }

    // typescript
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [
            path.resolve(__dirname, '../src')
        ],
        use: [
            require.resolve('ts-loader'),
            require.resolve('react-docgen-typescript-loader')
        ],
        
    });
    config.plugins.push(new TSDocgenPlugin());
    config.resolve.extensions.push('.ts', '.tsx');

    // SASS
    config.module.rules.push({
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: [
            path.resolve(__dirname, '../src')
        ],
    });

    return config;
};