const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');

const NODE_ENV = process.env.NODE_ENV || 'development';

const input = ['./src/index.ts', './src/templates/PersonalPortfolioWebpage/index.ts'];

const plugins = [typescript()];

if (NODE_ENV === 'production') {
    plugins.push(terser());
}

module.exports = {
    input,
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
    },
    plugins,
    external: ['react'],
};
