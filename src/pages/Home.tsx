import { useState } from 'react'
import { Box } from '@mui/material'

import { Exercises, Hero, Search } from '../components'
import Exercise from '../models/Exercise'

// Use React Context API instead of props for Search and Exercises
const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([] as Exercise[])

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
                exercises={exercises}
                setExercises={setExercises}
            />
        </Box>
    )
}

export default Home
