// @flow

import React from 'react'
import Icon from '../Icon'

const defaultTheme = {
  root: 'pv4-ns pv3-ml pv4 w-100',
  header: 'flex flex-wrap items-center justify-center w-100',
  iconWrapper:
    'a-shake flex items-center justify-center w3s-ns w3 h3s-ns h3 bg-white br-100 shadow-l-2 t-all-ease',
  icon: 'dib f1-ns f2 gray',
  content: 'pv4-ns pv3 relative flex flex-wrap w-100 center',
}

function Section ({ icon, color, children, theme = defaultTheme }: any) {
  return (
    <section className={theme.root}>
      <div className={theme.header}>
        <div className={theme.iconWrapper}>
          <Icon className={theme.icon} style={{ color }} name={icon} />
        </div>
      </div>
      <div className={theme.content}>
        {children}
      </div>
    </section>
  )
}

export default Section
