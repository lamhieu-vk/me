// @flow

import React from 'react'

function Text ({
  tag: Component = 'span',
  className,
  children,
  ...props
}: {
  tag?: string,
  className?: string,
  children: any,
}) {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  )
}

export default Text
