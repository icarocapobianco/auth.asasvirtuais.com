import { PropsWithChildren } from 'react'
import { Center, Container, HStack, Heading, Box, Link, BoxProps } from '@chakra-ui/react'

import Icon from 'asasvirtuais/src/components/icon'
import ThemeButton from 'asasvirtuais/src/components/theme-button'

export function Footer( { children, ...props } : PropsWithChildren<BoxProps> ) {
    return (
        <Box as='nav' mt={12} shadow='md' w='100%' {...props}>
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

export default Footer