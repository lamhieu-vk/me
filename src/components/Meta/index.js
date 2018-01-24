// @flow

import React from 'react'
import Helmet from 'react-helmet'

const Meta = ({ title, keywords, image, description, favicon, links }: any) => (
  <Helmet>
    {links}
    <meta charSet="utf-8" />
    <meta property="keywords" content={keywords} />
    <meta itemProp="image" content={image} />
    <meta itemProp="description" content={description} />
    <meta itemProp="name" content={title} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:card" content="summary" />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta name="googlebot" content="index,follow" />
    <meta name="robots" content="index,follow" />
    <meta name="subject" />
    <meta name="description" content={description} />
    <link rel="icon" type="image/png" href={favicon['32x32']} sizes="32x32" />
    <link rel="icon" type="image/png" href={favicon['16x16']} sizes="16x16" />
    <title>{title}</title>
  </Helmet>
)

export default Meta
