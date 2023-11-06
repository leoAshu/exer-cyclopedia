import { Dispatch, SetStateAction } from 'react'

interface ExercisesProps {
    bodyPart: String
    setBodyPart: Dispatch<SetStateAction<string>>
    setExercises: Dispatch<SetStateAction<never[]>>
}

const Exercises = (props: ExercisesProps) => {
    return <div>Exercises</div>
}

export default Exercises
