import { useState } from 'react'
import { Box } from '@mui/material'

import { Hero, Search } from '../components'

// Use React Context API instead of props for Search and Exercises
const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])
    console.log(exercises)

    return (
        <Box>
            <Hero />
            <Search
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
        </Box>
    )
}

export default Home
