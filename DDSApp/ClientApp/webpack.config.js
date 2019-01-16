const path = require('path');

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpackBundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use:''
            }
        ]
    }
}