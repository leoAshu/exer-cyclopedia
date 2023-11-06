import { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { HorizontalScrollbar } from '.'
import { exerciseOptions, fetchData } from '../utils/fetchData'

interface SearchProps {
    bodyPart: String
    setBodyPart: React.Dispatch<React.SetStateAction<string>>
    setExercises: React.Dispatch<React.SetStateAction<never[]>>
}

const Search = (props: SearchProps) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([] as String[])

    useEffect(() => {
        const fetchExercises = async () => {
            const bodyParts = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                exerciseOptions
            )

            setBodyParts(['all', ...bodyParts])
        }

        fetchExercises()
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercises = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises/',
                exerciseOptions
            )

            const searchResults = exercises.filter(
                (exercise: {
                    name: String
                    target: String
                    equipment: String
                    bodyPart: String
                }) =>
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
            )

            setSearch('')
            props.setExercises(searchResults)
        }
    }

    return (
        <Stack alignItems="center" mt="36px" justifyContent="center" p="20px">
            <Typography
                fontWeight="700"
                sx={{ fontSize: { lg: '44px', xs: '36px' } }}
                mb="50px"
                textAlign="center"
            >
                Awesome Exercises <br /> You Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px',
                        },
                        width: { lg: '800px', xs: '350px' },
                        backgroundColor: '#FFF',
                        borderRadius: '40px',
                    }}
                />
                <Button
                    className="hover:text-[#FF2625] hover:border hover:border-solid hover:border-[#FF2625]"
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#FFF',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0',
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    p: '20px',
                }}
            >
                <HorizontalScrollbar
                    data={bodyParts}
                    bodyPart={props.bodyPart}
                    setBodyPart={props.setBodyPart}
                />
            </Box>
        </Stack>
    )
}

export default Search
