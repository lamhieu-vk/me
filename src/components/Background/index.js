// @flow

import React from 'react'
import sizeMe from 'react-sizeme'
import ProgressiveImage from 'react-progressive-image'
import getImageSource from '../../helpers/getImageSource'
import getBackground from '../../helpers/getBackground'

function Background ({ autoSize = true, image, overlayColor, size, children, ...props }: any) {
  const imageSource = !autoSize ? image : getImageSource({ size, src: image })
  if (typeof imageSource === 'string') {
    return (
      <div
        {...props}
        style={{
          backgroundImage: getBackground({ overlayColor, image: imageSource }),
        }}
      >
        {children}
      </div>
    )
  }
  const { thumbnail, large } = imageSource || {}
  return (
    <ProgressiveImage src={large} placeholder={thumbnail}>
      {imageProgressiveSource => (
        <div
          {...props}
          style={{
            backgroundImage: getBackground({
              overlayColor,
              image: imageProgressiveSource,
            }),
          }}
        >
          {children}
        </div>
      )}
    </ProgressiveImage>
  )
}

export default sizeMe({
  refreshMode: 'debounce',
  refreshRate: 16,
  monitorHeight: true,
  monitorWidth: true,
  enableSSRBehaviour: true,
})(Background)
