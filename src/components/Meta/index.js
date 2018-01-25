// @flow

import React from 'react'
import Helmet from 'react-helmet'

const Meta = ({ title, keywords, image, description, favicon, links }: any) => (
  <Helmet>
    {links}
    <meta key="charset" charSet="utf-8" />
    <meta key="keywords" property="keywords" content={keywords} />
    <meta key="image" itemProp="image" content={image} />
    <meta key="description" itemProp="description" content={description} />
    <meta key="name" itemProp="name" content={title} />
    <meta key="twitter:image" name="twitter:image" content={image} />
    <meta key="twitter:description" name="twitter:description" content={description} />
    <meta key="twitter:title" name="twitter:title" content={title} />
    <meta key="twitter:card" name="twitter:card" content="summary" />
    <meta key="og:description" property="og:description" content={description} />
    <meta key="og:image" property="og:image" content={image} />
    <meta key="og:title" property="og:title" content={title} />
    <meta key="og:type" property="og:type" content="website" />
    <meta key="googlebot" name="googlebot" content="index,follow" />
    <meta key="robots" name="robots" content="index,follow" />
    <meta key="subject" name="subject" />
    <meta key="description" name="description" content={description} />
    <link key="icon32x32" rel="icon" type="image/png" href={favicon['32x32']} sizes="32x32" />
    <link key="icon16x16" rel="icon" type="image/png" href={favicon['16x16']} sizes="16x16" />
    <title>{title}</title>
  </Helmet>
)

export default Meta
