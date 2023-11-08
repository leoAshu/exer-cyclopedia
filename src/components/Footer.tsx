import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#FFF3F4">
            <Stack
                gap="40px"
                sx={{ alignItems: 'center' }}
                flexWrap="wrap"
                px="40px"
                pt="36px"
                pb="36px"
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    ml="-30px"
                    gap="8px"
                >
                    <img src={Logo} alt="logo" />
                    <Typography
                        color="#FF2625"
                        fontWeight="600"
                        fontSize="26px"
                        mt="16px"
                    >
                        ExerCyclopedia
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Footer
