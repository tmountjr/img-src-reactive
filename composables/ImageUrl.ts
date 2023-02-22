import { CustomImageProvider } from '../CustomImageProvider'

export const useImageUrl = () => {
  const cip = reactive(new CustomImageProvider('https://edgeio.whitecdn.com/demo.jpg'))

  return {
    cip,
  }
}