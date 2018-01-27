// @flow

import React from 'react'

const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-108475565-1');
`

// const deferredStylesScript = `
//   var loadDeferredStyles = function() {
//     var addStylesNode = document.getElementById("deferred-styles");
//     var replacement = document.createElement("div");
//     replacement.innerHTML = addStylesNode.textContent;
//     document.body.appendChild(replacement)
//     addStylesNode.parentElement.removeChild(addStylesNode);
//   };
//   var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
//       window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
//   if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
//   else window.addEventListener('load', loadDeferredStyles);
// `

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
    src: 'src', // The source directory. Must include an index.js entry file.
    dist: 'build', // The production output directory.
    devDist: 'dist', // The development scratch directory.
    public: 'public' // The public directory (files copied to dist during build)
  },
  Document: ({ Html, Head, Body, children }: any) => (
    <Html lang="vi-VN">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/ciser/build/ciser.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab:300"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-108475565-1"
        />
        <script dangerouslySetInnerHTML={{ __html: gtagScript }} />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
