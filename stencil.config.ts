import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'my-stencil-test',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/colors.scss',
        'src/global/variables.scss',
        'src/global/mixins.scss',
      ]
    })
  ]
};
