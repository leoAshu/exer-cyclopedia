import { useState } from 'react'
import Pagination from '@mui/material/Pagination'
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
    const [currentPage, setCurrentPage] = useState(1)
    const exercisesPerPage = 3

    const indexOfLastExercise = currentPage * exercisesPerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
    const currentExercises = props.exercises.slice(
        indexOfFirstExercise,
        indexOfLastExercise
    )

    const paginate = (e: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 1700, behavior: 'smooth' })
    }

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
                {currentExercises.map((exercise, idx) => (
                    <ExerciseCard key={idx.toString()} exercise={exercise} />
                ))}
            </Stack>

            <Stack mt="100px" alignItems="center">
                {props.exercises.length > 2 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(
                            props.exercises.length / exercisesPerPage
                        )}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises
