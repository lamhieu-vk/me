// @flow

import React from 'react'
import cn from 'classnames'

function Icon ({
  tag: Component = 'i',
  className,
  name,
  ...props
}: {
  tag?: string,
  className?: string,
  name: string,
}) {
  return <Component className={cn(className, 'fa', `fa-${name}`)} {...props} />
}

export default Icon
