// @flow

import interpolate from 'interpolate'
import getImageSize from './getImageSize'

function getParams(size: ?TSize) {
  if (!size) return []
  const { width, height } = size
  return [
    'c_scale',
    'q_auto',
    width && `w_${width}`,
    height && `h_${height}`,
  ].filter(x => x)
}

function getCloudinaryImage({
  username,
  id,
  size: _size,
  useMinimum = false,
}: {
  username: string,
  id: string,
  size: TSize,
  useMinimum?: boolean,
}) {
  const template =
    '//res.cloudinary.com/{username}/image/upload/{transform}{id}'
  const size = getImageSize({ size: _size, useMinimum })
  const params = getParams(size)
  const transform = params.length > 0 ? `${params.join(',')}/` : ''
  return interpolate(template, {
    username,
    id,
    transform,
  })
}

export default getCloudinaryImage
