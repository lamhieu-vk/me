// @flow
import getCloudinaryImage from './getCloudinaryImage'

type TImageSourceReturn = string | { thumbnail: string, large: string }

const regexCloudinary = /^(((http|https):)?(\/\/)(res.cloudinary.com)\/([\w-.]+)\/image\/upload\/(([\w,]+)\/)?([\S]+))$/i

function getImageSource({
  src = '',
  size,
}: {
  src: string,
  size: TSize,
}): TImageSourceReturn {
  if (src && src.match(regexCloudinary)) {
    const matchArr = src.match(regexCloudinary) || []
    const cloudinary = {
      username: (matchArr && matchArr[6]) || '',
      id: (matchArr && matchArr[9]) || '',
    }
    return {
      thumbnail: getCloudinaryImage({
        ...cloudinary,
        size,
        useMinimum: true,
      }),
      large: getCloudinaryImage({
        ...cloudinary,
        size,
        useMinimum: false,
      }),
    }
  }
  return src
}

export default getImageSource
