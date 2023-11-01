import { Container, Heading } from '@chakra-ui/react'

function HomePage() {
    return (
        <main className='main-section'>
            <Container maxW='4xl' p={4}>
                <Heading as='h2' size='2xl'>
                    Home Page Content
                </Heading>
            </Container>
        </main>
    )
}
export default HomePage