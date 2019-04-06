import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import alias from "rollup-plugin-alias";
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/browser.min.js',
      format: 'umd',
      name: 'TwigParser',
    },
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    alias({
      twing: require.resolve('twing/dist/lib.min.js'),
    }),
    json(),
    typescript({
      typescript: require('typescript'),
    }),
    terser(),
  ],
};
