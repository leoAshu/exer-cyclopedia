import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import { Detail, SimilarExercises } from '../components'
import Exercise from '../models/Exercise'

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({} as Exercise)
    // const [exerciseVideos, setExerciseVideos] = useState([])
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })

        const fetchExerciseDetail = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'

            const exerciseDetailData = await fetchData(
                `${exerciseDbUrl}/exercises/exercise/${id}`,
                exerciseOptions
            )
            setExerciseDetail(exerciseDetailData)

            const targetMuscleExercisesData = await fetchData(
                `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
                exerciseOptions
            )
            setTargetMuscleExercises(targetMuscleExercisesData)

            const equipmentExercisesData = await fetchData(
                `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
                exerciseOptions
            )
            setEquipmentExercises(equipmentExercisesData)
        }

        fetchExerciseDetail()
    }, [id])

    return (
        <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
            <Detail exerciseDetail={exerciseDetail} />
            {/* <ExerciseVideos
                exerciseVideos={exerciseVideos}
                name={exerciseDetail.name}
            /> */}
            <SimilarExercises
                targetMuscleExercises={targetMuscleExercises}
                equipmentExercises={equipmentExercises}
            />
        </Box>
    )
}

export default ExerciseDetail
