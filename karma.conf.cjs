
// karma.conf.cjs
module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'src/test/**/*.spec.jsx'
        ],
        preprocessors: {
            'src/test/**/*.spec.jsx': ['webpack']
        },
        webpack: {
            mode: 'development',
            module: {
                rules: [
                    {
                        test: /\.css$/i,
                        use: ['style-loader', 'css-loader'],
                    },
                    {
                        test: /\.(png|jpe?g|gif|webp)$/i,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: '[name].[ext]',
                                    esModule: false
                                }
                            }
                        ]
                    }
                ]
            },
            resolve: {
                extensions: ['.js', '.jsx']
            }
        },
        reporters: ['progress', 'kjhtml'],
        browsers: ['ChromeHeadless'],
        singleRun: true
    });
};
