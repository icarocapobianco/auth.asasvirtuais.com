import type { Metadata } from 'next'

import ChakraProvider from '@/chakra/provider'
import Wrapper from 'asasvirtuais/src/components/wrapper'

import Navbar from '@/navbar'
import Navmenu from '@/navbar/menu'
import Footer from '@/footer'

import { UserProvider } from '@auth0/nextjs-auth0/client'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'Asas Virtuais Auth',
  description: 'Next + Auth0'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <UserProvider>
          <ChakraProvider>
            <Wrapper>
              <Navbar>
                <Navmenu/>
              </Navbar>
              {children}
              <Footer/>
            </Wrapper>
          </ChakraProvider>
        </UserProvider>
        <SpeedInsights/>
      </body>
    </html>
  )
}
