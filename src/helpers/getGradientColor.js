// @flow

function getGradientColor (color: string | string[]) {
  return typeof color === 'string'
    ? `linear-gradient(${color}, ${color})`
    : `linear-gradient(${color[0]}, ${color[1]})`
}

export default getGradientColor
