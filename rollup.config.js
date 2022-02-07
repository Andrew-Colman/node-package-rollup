import typescript from '@rollup/plugin-typescript';
import shebang from 'rollup-plugin-preserve-shebang';

import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'commonjs',
    },
    plugins: [
        shebang(), // <- if usage for cli (bin)
        typescript(),
        commonjs(),
        nodeResolve(),
        terser({
            output: {
                comments: false,
            },
        }),
    ],
    external: [], //external packages
};
