// @flow

import React from 'react'

const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-108475565-1');
`

const data = {
  dns: [
    'https://lamhieu.info',
    'https://maxcdn.icons8.com',
    'https://unpkg.com',
    'https://fonts.googleapis.com',
    'https://nodei.co',
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://res.cloudinary.com',
    'https://fonts.gstatic.com'
  ],
  styles: [
    'https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css',
    'https://unpkg.com/liser@stable/build/liser.min.css',
    'https://fonts.googleapis.com/css?family=Roboto:100,300,400',
    'https://fonts.googleapis.com/css?family=Roboto+Slab:300'
  ],
  scripts: [
    'https://www.googletagmanager.com/gtag/js?id=UA-108475565-1',
    gtagScript
  ]
}

const regURL = /^((https|http)(:\/\/))?((([a-zA-Z0-9]+).)?([a-zA-Z0-9]+).([a-zA-Z0-9]+))(\/(\S+))?$/i

const isURL = str => regURL.test(str)

export default {
  getSiteProps: () => ({
    title: 'lamhieu'
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home/Vi'
    },
    {
      path: '/en',
      component: 'src/containers/Home/En'
    },
    {
      is404: true,
      component: 'src/containers/Home/Vi'
    }
  ],
  siteRoot: 'https://lamhieu.info',
  paths: {
    src: 'src', // the source directory. Must include an index.js entry file.
    dist: 'build', // the production output directory.
    devDist: 'dist', // the development scratch directory.
    public: 'public' // the public directory (files copied to dist during build)
  },
  Document: ({ Html, Head, Body, children }: any) => (
    <Html lang="vi-VN">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {data.dns
          .filter(v => isURL(v))
          .map(v => <link key={v} href={v} rel="dns-prefetch" />)}
        {data.styles.map(
          v =>
            isURL(v) ? (
              <link key={v} href={v} rel="stylesheet" />
            ) : (
              <style key={v} type="text/css">
                {v}
              </style>
            )
        )}
        {data.scripts.map(
          v =>
            isURL(v) ? (
              <script key={v} src={v} />
            ) : (
              <script key={v} dangerouslySetInnerHTML={{ __html: v }} />
            )
        )}
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
