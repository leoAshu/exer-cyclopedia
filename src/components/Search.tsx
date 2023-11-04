import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const Search = () => {
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
                    value=""
                    onChange={(e) => {}}
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
                >
                    Search
                </Button>
            </Box>
        </Stack>
    )
}

export default Search
