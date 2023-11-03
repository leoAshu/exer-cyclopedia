import { Box, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'

const Hero = () => {
    return (
        <Box
            sx={{
                mt: { lg: '120px', xs: '70px' },
                ml: { sm: '50px' },
            }}
            position="relative"
            p="20px"
        >
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                ExerCyclopedia
            </Typography>
            <Typography
                fontWeight="700"
                sx={{ fontSize: { lg: '44px', xs: '40px' } }}
                mb="23px"
                mt="30px"
            >
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb="24px">
                Browse through our collection of exercises
            </Typography>
            <Button
                variant="contained"
                color="error"
                href="#exercises"
                sx={{
                    backgroundColor: '#FF2625',
                    padding: '10px',
                    mt: '16px',
                }}
            >
                Explore Catalogue
            </Button>
            <Typography
                fontWeight="600"
                color="#FF2625"
                fontSize="200px"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block' },
                }}
            >
                Exercise
            </Typography>
            <img
                src={HeroBannerImage}
                alt="banner"
                className="absolute right-10 top-0 w-[700px] h-[900px] mt-[-200px] hidden lg:block"
            />
        </Box>
    )
}

export default Hero
