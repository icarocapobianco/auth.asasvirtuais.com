import { comfortaa, majorMonoDisplay } from '@/next/fonts'
import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
    fonts: {
        body: comfortaa.style.fontFamily,
        heading: majorMonoDisplay.style.fontFamily,
    }
})
