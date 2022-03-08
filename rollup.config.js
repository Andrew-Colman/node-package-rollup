import typescript from '@rollup/plugin-typescript';
import shebang from 'rollup-plugin-preserve-shebang';

import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';

const plugins = [
    shebang(), // <- if usage for cli (bin)
    typescript({ tsconfig: './tsconfig.json' }),
    commonjs(),
    nodeResolve(),
    terser({
        output: {
            comments: false,
        },
    }),
    del({
        targets: 'dist/*',
    }),
];

const external = ['/node_modules/']; // external packages

const emitTypes = {
    // emitting types (bundled)
    input: './dist/.declaration/src/index.d.ts',
    output: [{ file: './dist/index.d.ts', format: 'es' }],
    plugins: [
        dts(),
        del({
            targets: 'dist/.declaration',
            hook: 'buildEnd',
        }),
    ],
};

export default [
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.js',
            format: 'commonjs',
        },
        plugins,
        external,
    },
    /* {... more inputs / outputs} */
    emitTypes,
];
