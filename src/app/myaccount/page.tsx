import ScreenCenter from '@/components/screen-center'
import { VStack } from '@chakra-ui/react'
import Account from './(account)'
import { UserProvider } from '@auth0/nextjs-auth0/client'

export default async function MyAccount() {
    return (
      <UserProvider>
        <ScreenCenter>
          <VStack maxW='lg' spacing={4}>
            <Account/>
          </VStack>
        </ScreenCenter>
      </UserProvider>
    )
}
