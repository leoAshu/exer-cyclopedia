// import { useEffect, useState } from 'react'
// import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

// import { exerciseOptions, fetchData } from '../utils/fetchData'
import Exercise from '../models/Exercise'
import { ExerciseCard } from '.'

interface ExercisesProps {
    bodyPart: String
    exercises: Exercise[]
    setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>
}

const Exercises = (props: ExercisesProps) => {
    return (
        <Box
            id="exercises"
            mt="50px"
            p="20px"
            sx={{
                mt: { lg: '110px' },
            }}
        >
            <Typography variant="h3" mb="46px">
                Showing Results
            </Typography>

            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                sx={{
                    gap: { lg: '110px', xs: '50px' },
                }}
            >
                {props.exercises.map((exercise, idx) => (
                    <ExerciseCard key={idx.toString()} exercise={exercise} />
                ))}
            </Stack>
        </Box>
    )
}

export default Exercises
