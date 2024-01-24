'use client'

import { UserProvider, useUser } from '@auth0/nextjs-auth0/client'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'

const InContext = () => {
    const user = useUser()
    const link = user.user ? '/myaccount' : '/api/auth/login'
    return (
        <Button as={Link} href={link} size='lg' isLoading={user.isLoading}>
            {user.user ? 'My Account' : 'Sign In'}
        </Button>
    )
}

export default function Navmenu () {
    return (
        <UserProvider>
            <InContext/>
        </UserProvider>
    )
}
