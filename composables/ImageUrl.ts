import { CustomImageProvider } from '~~/CustomImageProvider'
import { SimpleCustomImageProvider } from '~~/SimpleCustomImageProvider'

export const useImageUrl = (simple = false) => {
  const classProvider = simple
    ? SimpleCustomImageProvider
    : CustomImageProvider
  const cip = reactive(new classProvider('https://edgeio.whitecdn.com/demo.jpg'))

  return {
    cip,
  }
}