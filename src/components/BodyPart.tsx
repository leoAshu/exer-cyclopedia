import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

interface BodyPartProps {
    item: String
    bodyPart: String
    setBodyPart: React.Dispatch<React.SetStateAction<string>>
}

const BodyPart = (props: BodyPartProps) => {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            className="transform scale-100 transition-all duration-300 ease-in-out hover:scale-110"
            sx={{
                borderTop:
                    props.bodyPart === props.item ? '4px solid #FF2625' : '',
                backgroundColor: '#FFF',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px',
            }}
            onClick={() => {
                props.setBodyPart(props.item.toString())
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            }}
        >
            <img src={Icon} alt="dumbell" className="h-10 w-10" />

            <Typography
                fontSize="24px"
                fontWeight="bold"
                color="#3A1212"
                textTransform="capitalize"
            >
                {props.item}
            </Typography>
        </Stack>
    )
}

export default BodyPart
