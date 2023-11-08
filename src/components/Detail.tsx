import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

interface DetailProps {
    exerciseDetail: {
        bodyPart: string
        equipment: string
        gifUrl: string
        name: string
        target: string
        instructions: string[]
    }
}

const Detail = (props: DetailProps) => {
    const { bodyPart, gifUrl, name, target, equipment, instructions } =
        props.exerciseDetail

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]

    return (
        <Stack
            gap="30px"
            sx={{
                flexDirection: { lg: 'row' },
                p: '12px',
                alignItems: { lg: 'flex-start', md: 'center' },
            }}
        >
            <img
                src={gifUrl}
                alt={name}
                loading="lazy"
                className="h-[300px] w-[300px] lg:h-[742px] lg:w-[729px]"
            />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }} key={'detail'}>
                <Typography
                    sx={{ fontSize: { lg: '64px', xs: '30px' } }}
                    fontWeight={700}
                    textTransform="capitalize"
                >
                    {name}
                </Typography>

                <Stack>
                    {instructions &&
                        instructions.map((instruction) => (
                            <Typography
                                sx={{ fontSize: { lg: '18px', xs: '16px' } }}
                            >
                                {instruction}
                            </Typography>
                        ))}
                </Stack>

                {extraDetail?.map((item) => (
                    <Stack
                        key={item.name}
                        direction="row"
                        gap="12px"
                        alignItems="center"
                    >
                        <Button
                            sx={{
                                background: '#FFF2DB',
                                borderRadius: '100%',
                                width: '80px',
                                height: '80px',
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={bodyPart}
                                style={{ width: '40px', height: '40px' }}
                            />
                        </Button>
                        <Typography
                            textTransform="capitalize"
                            sx={{ fontSize: { lg: '24px', xs: '16px' } }}
                        >
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail
