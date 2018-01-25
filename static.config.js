// @flow

import React from 'react'

const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-108475565-1');
`

export default {
  getSiteProps: () => ({
    title: 'lamhieu'
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home'
    },
    {
      is404: true,
      component: 'src/containers/Home'
    }
  ],
  siteRoot: 'https://lamhieu.info',
  paths: {
    src: 'src', // The source directory. Must include an index.js entry file.
    dist: 'build', // The production output directory.
    devDist: 'dist', // The development scratch directory.
    public: 'public' // The public directory (files copied to dist during build)
  },
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-108475565-1"
        />
        <script>{gtagScript}</script>
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
