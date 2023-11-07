import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

import Exercise from '../models/Exercise'

interface ExerciseCardProps {
    exercise: Exercise
}

const ExerciseCard = (props: ExerciseCardProps) => {
    return (
        <Link to={`/exercise/${props.exercise.id}`} className="exercise-card">
            <img
                src={props.exercise.gifUrl}
                alt={props.exercise.name}
                loading="lazy"
            />
            <Stack direction="row">
                <Button
                    sx={{
                        ml: '21px',
                        color: '#FFF',
                        background: '#FFA9A9',
                        fontSize: '12px',
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                    }}
                >
                    {props.exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: '21px',
                        color: '#FFF',
                        background: '#FCC757',
                        fontSize: '12px',
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                    }}
                >
                    {props.exercise.target}
                </Button>
            </Stack>

            <Typography
                ml="21px"
                color="#000"
                fontWeight="bold"
                mt="11px"
                pb="10px"
                textTransform="capitalize"
                fontSize="16px"
            >
                {props.exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard
