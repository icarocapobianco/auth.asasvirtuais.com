import { PropsWithChildren } from 'react'
import { Center, Container, HStack, Heading, Box, Link, BoxProps, Button } from '@chakra-ui/react'
import ThemeButton from '@/components/theme-button'
import Icon from '@/components/icon'

function Navbar( { children, ...props } : PropsWithChildren<BoxProps> ) {
    return (
        <Box as='nav' shadow='md' w='100%' {...props}>
            <Container maxW='container.lg'>
                <Center justifyContent='space-between' minH='72px'>
                    <Heading as={Link} href='/'
                        display={{base: 'none', md: 'block'}}>
                            Asas Virtuais</Heading>
                    <Box as={Link} href='/' display={{base: 'block', md: 'none'}}>
                        <Icon/>
                    </Box>
                    <HStack ml='auto' alignItems='center' >
                        {children}
                        <ThemeButton/>
                    </HStack>
                </Center>
            </Container>
        </Box>
    )
}

export default Navbar