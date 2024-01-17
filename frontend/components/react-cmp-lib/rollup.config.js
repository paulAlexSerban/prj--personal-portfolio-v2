const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');

const NODE_ENV = process.env.NODE_ENV || 'development';

const atoms = ['./src/atoms/Paragraph/index.ts', './src/atoms/Heading/index.ts'];
const molecules = [];
const organisms = [];
const templates = ['./src/templates/Generic/index.ts'];

const input = ['./src/index.ts', ...atoms, ...molecules, ...organisms, ...templates];

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
    external: ['react', '@prj--personal-portfolio-v2/shared-foundation'],
};
