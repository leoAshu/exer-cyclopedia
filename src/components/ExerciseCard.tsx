import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

import Exercise from '../models/Exercise'

interface ExerciseCardProps {
    exercise: Exercise
}

const ExerciseCard = (props: ExerciseCardProps) => {
    return (
        <Link
            to={`/exercise/${props.exercise.id}`}
            className="w-400 h-445 md:w-320 lg:w-280 bg-white border-t-4 border-red-600 rounded-bl-2xl no-underline flex flex-col justify-between pb-10 scale-100 transition-transform duration-300 ease-in-out hover:scale-110"
        >
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
