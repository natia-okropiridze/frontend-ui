import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react';
import TeacherCard from '../components/teacherCard';
import { useEffect, useState } from "react";
import axios from 'axios';

function TeachersSection(props) {
    const { title } = props
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        (async () => {
            const meta = {}
            // TODO: CLIENT -> REQUEST --> 
            // TODO: <-- SERVER -> RESPONSE
            const response = await axios.get("https://backend-dashboard.store/api/v1/teachers", meta)
            const { data } = response.data
            setTeachers(data)
        })()
    }, [])
    return (

        <Container maxW='4xl' p={4}>
            {title ? <Heading as="h3" size="lg" pb={4}> {title} </Heading> : null}
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                {
                    teachers.map((teacher) =>
                    (<Box key={crypto.randomUUID()}>
                        <TeacherCard teacher={teacher} />
                    </Box>))
                }

            </SimpleGrid>
        </Container>

    )

}
export default TeachersSection