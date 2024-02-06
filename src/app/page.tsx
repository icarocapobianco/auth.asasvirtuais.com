import { comfortaa } from '@/next/fonts'
import { Heading, Link } from '@chakra-ui/react'
import Center from 'asasvirtuais/src/components/screen-center'

export default function Home() {
  return (
    <Center>
      <Heading textAlign='center'>asas virtuais auth</Heading>
      <Heading fontSize='2xl' mt={4} mb={2} style={comfortaa.style}>Next + Auth0 example</Heading>
      <Link maxW='320px' color='blue.700' whiteSpace='normal' px={2} textAlign='center' href='https://github.com/icarocapobianco/auth.asasvirtuais.com'>github.com/icarocapobianco/auth.asasvirtuais.com</Link>
    </Center>
  )
}
