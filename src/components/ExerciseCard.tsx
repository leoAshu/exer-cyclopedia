import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

import Exercise from '../models/Exercise'

interface ExerciseCardProps {
    exercise: Exercise
}

const ExerciseCard = (props: ExerciseCardProps) => {
    // return (
    //     <Link className="exercise-card" to={`/exercise/${props.exercise.id}`}>
    //         <img
    //             src={props.exercise.gifUrl}
    //             alt={props.exercise.name}
    //             loading="lazy"
    //         />
    //         <Stack direction="row">
    //             <Button
    //                 sx={{
    //                     ml: '21px',
    //                     color: '#fff',
    //                     background: '#FFA9A9',
    //                     fontSize: '14px',
    //                     borderRadius: '20px',
    //                     textTransform: 'capitalize',
    //                 }}
    //             >
    //                 {props.exercise.bodyPart}
    //             </Button>
    //             <Button
    //                 sx={{
    //                     ml: '21px',
    //                     color: '#fff',
    //                     background: '#FCC757',
    //                     fontSize: '14px',
    //                     borderRadius: '20px',
    //                     textTransform: 'capitalize',
    //                 }}
    //             >
    //                 {props.exercise.target}
    //             </Button>
    //         </Stack>
    //         <Typography
    //             ml="21px"
    //             color="#000"
    //             fontWeight="bold"
    //             sx={{ fontSize: { lg: '24px', xs: '20px' } }}
    //             mt="11px"
    //             pb="10px"
    //             textTransform="capitalize"
    //         >
    //             {props.exercise.name}
    //         </Typography>
    //     </Link>
    // )

    // Breakpoint prefix	Minimum width	CSS
    // sm	640px	@media (min-width: 640px) { ... }
    // md	768px	@media (min-width: 768px) { ... }
    // lg	1024px	@media (min-width: 1024px) { ... }
    // xl	1280px	@media (min-width: 1280px) { ... }
    // 2xl	1536px

    return (
        <Link
            to={`/exercise/${props.exercise.id}`}
            className="w-[400px] h-[445px] max-[1200px]:w-[320px] max-[400px]:w-[280px] bg-white border-t-4 border-red-600 rounded-bl-2xl no-underline flex flex-col justify-between pb-10 scale-100 transition-transform duration-300 ease-in-out hover:scale-110"
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
