import { Box, Stack, Typography } from '@mui/material'

import Exercise from '../models/Exercise'
import { HorizontalScrollbar, Loader } from '.'

interface SimilarExercisesProps {
    targetMuscleExercises: Exercise[]
    equipmentExercises: Exercise[]
}

const SimilarExercises = (props: SimilarExercisesProps) => {
    console.log(props.targetMuscleExercises)

    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
            <Typography variant="h3" mb="12px">
                Similar <span className="text-[#FF2625]">Target Muscle</span>{' '}
                Exercises
            </Typography>
            <Stack
                direction="row"
                sx={{ p: '2px', position: ' relative' }}
                mb="16px"
            >
                {props.targetMuscleExercises.length ? (
                    <HorizontalScrollbar data={props.targetMuscleExercises} />
                ) : (
                    <Loader />
                )}
            </Stack>

            <Typography variant="h3">
                Similar <span className="text-[#FF2625]">Equipment</span>{' '}
                Exercises
            </Typography>
            <Stack
                direction="row"
                sx={{ p: '2px', position: ' relative' }}
                mb="16px"
            >
                {props.equipmentExercises.length ? (
                    <HorizontalScrollbar data={props.equipmentExercises} />
                ) : (
                    <Loader />
                )}
            </Stack>
        </Box>
    )
}

export default SimilarExercises
