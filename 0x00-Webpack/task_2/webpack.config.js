const path = require('path');

module.exports = {
    mode: 'production', // Set mode to production
    entry: './src/index.js', // Entry point
    output: {
        filename: 'bundle.js', // Output filename
        path: path.resolve(__dirname, 'public'), // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Transpile JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // If you need to use Babel
                },
            },
        ],
    },
};
