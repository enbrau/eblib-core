export default [
  {
    input: './src/index.js',
    output: [
      {
        dir: 'dist',
        format: 'amd',
        entryFileNames: 'index.amd.js',
        sourcemap: true
      },
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: 'index.esm.js',
        sourcemap: true
      },
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: 'index.cjs.js',
        sourcemap: true
      },
      {
        dir: 'dist',
        format: 'system',
        entryFileNames: 'index.system.js',
        sourcemap: true
      },
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'eblib',
        sourcemap: true,
      },
      {
        file: 'dist/index.iife.js',
        format: 'iife',
        name: 'eblib',
        sourcemap: true,
      }
    ]
  }
]
