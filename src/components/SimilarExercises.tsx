import Exercise from '../models/Exercise'

interface SimilarExercisesProps {
    targetMuscleExercises: Exercise[]
    equipmentExercises: Exercise[]
}

const SimilarExercises = (_props: SimilarExercisesProps) => {
    return <div>SimilarExercises</div>
}

export default SimilarExercises
