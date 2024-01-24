'use client'

import { ChakraProvider } from '@chakra-ui/provider'
import theme from './theme'

export default function({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
