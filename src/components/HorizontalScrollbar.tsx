import { useContext } from 'react'
import { Box, Typography } from '@mui/material'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'

import { BodyPart } from '.'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)

    return (
        <Typography
            onClick={() => scrollPrev()}
            className="cursor-pointer bg-transparent outline-none border-none flex justify-center items-center text-[#FF2625] rounded-md static lg:absolute bottom-[-20px] left-16 transform scale-95 transition-all duration-300 ease-in-out hover:scale-125"
        >
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)

    return (
        <Typography
            onClick={() => scrollNext()}
            className="cursor-pointer bg-transparent outline-none border-none flex justify-center items-center text-[#FF2625] rounded-md static lg:absolute bottom-[-20px] right-16 transform scale-95 transition-all duration-300 ease-in-out hover:scale-125"
        >
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    )
}

interface HorizontalScrollbarProps {
    data: String[]
    bodyPart: String
    setBodyPart: React.Dispatch<React.SetStateAction<string>>
}

const HorizontalScrollbar = (props: HorizontalScrollbarProps) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {props.data.map((item, idx) => (
                <Box
                    key={idx}
                    itemID={'menu-item-' + idx.toString()}
                    title={item.toString()}
                    m="0 40px"
                >
                    <BodyPart
                        item={item}
                        bodyPart={props.bodyPart}
                        setBodyPart={props.setBodyPart}
                    />
                </Box>
            ))}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar
