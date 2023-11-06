import { useState } from 'react'
import { Box } from '@mui/material'

import { Exercises, Hero, Search } from '../components'

// Use React Context API instead of props for Search and Exercises
const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])
    console.log(exercises)

    return (
        <Box>
            <Hero />
            <Search
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
                setExercises={setExercises}
            />
            <Exercises
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
                setExercises={setExercises}
            />
        </Box>
    )
}

export default Home
