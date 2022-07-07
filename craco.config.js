const path = require( 'path' );

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve( __dirname, 'src' ),
            '@pages': path.resolve( __dirname, 'src/pages' ),
            "@layout": path.resolve(__dirname, "src/layout"),
            "@data": path.resolve(__dirname, "src/data")

        },
    },
};