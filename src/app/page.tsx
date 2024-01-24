import { comfortaa } from '@/next/fonts'
import { Heading, Link } from '@chakra-ui/react'
import Center from 'asasvirtuais/src/components/screen-center'

export default function Home() {
  return (
    <Center>
      <Heading>asas virtuais auth</Heading>
      <Heading fontSize='2xl' style={comfortaa.style}>Next + Auth0 example</Heading>
      <Link href='https://github.com/icarocapobianco/auth.asasvirtuais.com'>github.com/icarocapobianco/auth.asasvirtuais.com</Link>
    </Center>
  )
}
