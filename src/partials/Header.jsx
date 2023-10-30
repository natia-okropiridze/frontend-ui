import { Container, Flex, Box, Spacer } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
function Header() {
    return (
        <header className="header-section">
            <Container maxW='4xl' p={4}>
                <Flex gap={4}>
                    <Box>
                        <Link to="/">Home
                            <span class="material-symbols-outlined">
                                home
                            </span>
                        </Link>
                    </Box>
                    <Box>
                        <Link to="/teachers">Teachers
                            <span class="material-symbols-outlined">
                                person
                            </span>
                        </Link>
                    </Box>
                </Flex>
            </Container>
        </header>
    )
}
export default Header