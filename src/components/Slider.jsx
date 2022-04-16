import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Mousewheel, Keyboard } from "swiper";
import innerImage from "../assets/innerpic.webp"
import innerImage1 from "../assets/innerpic1.webp"
import innerImage2 from "../assets/innerpic2.webp"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { useState } from 'react';
const Slider = () => {
    const [swiper, setSwiper] = useState("")
    const [lastSlide, setLastSlide] = useState(false)
    const [firstSlide, setFirstSlide] = useState(false)
  return (
    <Box component="section" sx={{width: "100%", height: 550, mt: 12, position: "relative"}}>
        <Box sx={{width: 40, height: 40 , display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: firstSlide ? "lightgray": "#ffff", position: "absolute", top: 0, left: {xs:-10, md: -20}, bottom: 0, m: "auto", zIndex: 999, cursor: "pointer"}} onClick={()=>swiper.slidePrev()}>
            <ArrowRightAltIcon sx={{transform: "rotate(180deg)"}}/>
        </Box>
            <Swiper
                onInit={(ev)=>{
                    setSwiper(ev)
                }}
                onReachEnd={()=>{
                    setLastSlide(true)
                    setFirstSlide(false)
                }} 
                onReachBeginning={()=>{
                    setLastSlide(false)
                    setFirstSlide(true)
                }}
                init={false}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Pagination, Mousewheel, Keyboard]}
                style={{width: "100%", height: "100%"}}
            >
                <SwiperSlide>
                    <Typography component="img" src={innerImage} sx={{width: "100%", height: "100%", objectFit: "cover"}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Typography component="img" src={innerImage1} sx={{width: "100%", height: "100%", objectFit: "cover"}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Typography component="img" src={innerImage2} sx={{width: "100%", height: "100%", objectFit: "cover"}}/>
                </SwiperSlide>
            </Swiper>
            <Box sx={{width: 40, height: 40 , display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: lastSlide ? "lightgray": "#ffff", position: "absolute", top: 0, right: {xs:-10, md: -20}, bottom: 0, m: "auto", zIndex: 999, cursor: "pointer", }}  onClick={()=>swiper.slideNext()}>
                <ArrowRightAltIcon/>
            </Box>
    </Box>
  )
}

export default Slider