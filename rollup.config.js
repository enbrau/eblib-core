export default [
  {
    input: './src/index.js',
    output: {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: 'index.cjs.js',
      sourcemap: true
    }
  },
  {
    input: './src/index.js',
    output: {
      dir: 'dist',
      format: 'esm',
      entryFileNames: 'index.esm.js',
      sourcemap: true
    }
  }
]
