// @flow

import React from 'react'
import cn from 'classnames'
import Icon from '../Icon'

export const IconItem = ({ icon, href, label, value, className, ...props }: any) => (
  <div {...props} data-component="IconItem" className={cn('w-100', className)}>
    <a className="flex items-center w-100 no-underline" href={href}>
      <Icon
        className="dib pa2 bg-light-gray hover-bg-gray br-100 gray hover-white f3-ns f4 t-all-ease t-vf"
        name={icon}
      />
      <div className="ml2-ns ml1s gray hover-dark-gray fw3 t-all-ease t-vf">
        <div>
          <span className="f7 ttu">
            {label}
          </span>
        </div>
        <span className="f6">
          {value}
        </span>
      </div>
    </a>
  </div>
)

export const ProgressLine = ({ name, value, className, ...props }: any) => (
  <div
    {...props}
    data-component="ProgressLine"
    className={cn('w-100', className)}
  >
    <div className="flex items-center justify-around f6-ns f7 ttu ph1">
      <div className="flex-auto tl dark-gray pa1">{name}</div>
      <div className="flex-auto tr gray pa1">{value}%</div>
    </div>
    <div className="mt1s-ns mt1 relative min-vw-25 max-w-100 h1 bg-light-gray br3 t-all-ease">
      <div
        className="ma1 loaded absolute absolute--fill bg-gray br3 t-all-ease"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
)

export const TimeLine = ({
  title,
  subtitle,
  date,
  description,
  className,
  ...props
}: any) => (
  <div
    {...props}
    data-component="TimeLine"
    className={cn('max-w-100', className)}
  >
    {title && (
      <div className="w-100 bl pl2 bw1 b--light-gray">
        <span className="fw3 f4-ns f5 dark-gray">{title}</span>
      </div>
    )}
    {(subtitle || date) && (
      <div className="mt2-ns mt1s flex flex-wrap items-center justify-around">
        {subtitle && (
          <div className="flex-auto-ns w-auto-ns w-100 tl pa1">
            <span className="fw3 f6 gray ttu">{subtitle}</span>
          </div>
        )}
        {date && (
          <div className="flex-auto-ns w-auto-ns w-100 tr-ns tl pa1">
            <span className="fw3 f6-ns f7 gray ttu">{date}</span>
          </div>
        )}
      </div>
    )}
    {description && (
      <div className="mt2-ns mt1s ph1s w-100">
        <span className="fw3 f6-ns f7 gray">{description}</span>
      </div>
    )}
  </div>
)
