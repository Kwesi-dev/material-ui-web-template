import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Mousewheel, Keyboard } from "swiper";
import SliderCard from './SliderCard';
import { Cards } from '../dummyData';
const SliderSm = () => {
  return (
    <Box component="section" sx={{width: "100%", height: 550, mt: 8, position: "relative"}}>
        <Typography variant="h6"component="h6" sx={{color: "#202140", fontWeight: "bold", mb: 1, textAlign: "center"}}>Slider</Typography>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                cssMode={true}
                mousewheel={true}
                keyboard={true}
                modules={[Pagination, Mousewheel, Keyboard]}
                style={{width: "100%"}}
            >
                {Cards.map((card)=>
                    <SwiperSlide key={card.id}>
                        <SliderCard card={card}/>
                    </SwiperSlide>
                )}
            </Swiper>
    </Box>
  )
}

export default SliderSm