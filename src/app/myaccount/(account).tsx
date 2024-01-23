'use client'
import { comfortaa } from 'asasvirtuais/src/next/fonts'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import { Text, Button, Card, CardBody, CardFooter, CardHeader, Heading, Spinner, Link, Avatar } from '@chakra-ui/react'

export default withPageAuthRequired(function Account() {
    const auth = useUser()

    if ( auth.isLoading )
        return <Spinner/>
    return (
        <Card minW='320px'>
            <CardHeader>
                <Heading fontSize='2xl' style={comfortaa.style}>Account Deatils</Heading>
            </CardHeader>
            <CardBody>
                <Avatar display='block' mx='auto' size='xl' src={auth?.user?.picture as string | undefined} />
                <Text>
                    <b>Name</b>
                    <br/>
                    {auth.user?.name || 'undefined'}
                </Text>
                <Text>
                    <b>Email</b>
                    <br/>
                    {auth.user?.email || 'undefined'}
                </Text>
            </CardBody>
            <CardFooter>
                <Button as={Link} href='/api/auth/logout' ml='auto'>Log out</Button>
            </CardFooter>
        </Card>
    )
}, {
    returnTo: '/myaccount'
})
