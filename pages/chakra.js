import { ThemeProvider, CSSReset, Box, Heading } from '@chakra-ui/core'

const chakra = () => {
    return (
        <div>
            <ThemeProvider>
                <CSSReset />
                <Box border="1px" borderRadius={8} padding={10}>
                    <Heading fontsize={['xs', 'x']}>Let's see chakra</Heading>
                </Box>
            </ThemeProvider>

        </div>
    )
}

export default chakra
