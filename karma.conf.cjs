// karma.conf.js
module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'webpack'],

        files: [
            'src/test/setupTests.js',
            'src/test/**/*.spec.jsx'
        ],
        preprocessors: {
            'src/test/setupTests.js': ['webpack'],
            'src/test/**/*.spec.jsx': ['webpack']
        },

        webpack: {
            mode: 'development',
            module: {
                rules: [
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-react'
                                ]
                            }
                        }
                    },
                    {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader']
                    },
                    {
                        // 👇 este loader maneja imágenes (corrige tu error)
                        test: /\.(png|jpe?g|gif|webp|svg)$/i,
                        type: 'asset/resource',
                        generator: {
                            filename: 'static/[name][ext]'
                        }
                    }
                ]
            },
            resolve: {
                extensions: ['.js', '.jsx']
            }
        },

        reporters: ['progress', 'kjhtml', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/',
        },
        browsers: ['ChromeHeadless'],
        singleRun: true,
        restartOnFileChange: true,
        plugins: [
            'karma-jasmine',
            'karma-webpack',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-jasmine-html-reporter'
        ]
    });
};
