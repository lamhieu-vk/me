// @flow

const steps = [50, 100, 200, 400, 800, 1200]
const lastStep = steps[steps.length - 1]

export default function getImageSize({
  size: _size,
  useMinimum,
}: {
  size?: TSize,
  useMinimum?: boolean,
}): ?TSize {
  let size = _size
  if (useMinimum) size = { width: steps[0], height: steps[0] }

  if (!size) return null

  const { width = 0, height = 0 } = size

  if ((!width && !height) || width + height === 0) return null

  if (width >= height) {
    return { width: steps.find(step => step >= width) || lastStep }
  }
  return { height: steps.find(step => step >= height) || lastStep }
}
