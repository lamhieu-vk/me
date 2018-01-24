// @flow

import getGradientColor from './getGradientColor'

function getBackground({
  overlayColor,
  image,
}: {
  overlayColor?: string | string[],
  image?: string,
}) {
  const gradientColor =
    (overlayColor && getGradientColor(overlayColor)) ||
    'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))'
  return !image ? gradientColor : `${gradientColor}, url(${image || ''})`
}

export default getBackground
