import React from 'react'
import { Paper, Card, CardHeader, CardContent, Typography, Avatar, Box, Stack, Button } from '@mui/material'
import { Cards } from '../dummyData'
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@mui/icons-material'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Mousewheel, Keyboard } from "swiper";
import { useState } from 'react';
const TestimonialCard = () => {
    const [swiper, setSwiper] = useState("")
  return (
    <Paper sx={{height: 340, width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}> 
        <Box sx={{width: "90%", height: "75%"}} elevation={0}>
        <Swiper
                onInit={(ev)=>{
                    setSwiper(ev)
                }}
                init={false}
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Mousewheel, Keyboard]}
                style={{width: "100%", height: "100%"}}
            > 
                {Cards.map((card) =>
                    <SwiperSlide key={card.id}>
                        <Card sx={{width: "100%", height: "100%", my: 2,}} elevation={0}>
                            <CardHeader
                                avatar={
                                    <Avatar src={card.profilePic} alt="" sx={{width: 80, height: 80}}/>
                                }
                                title={
                                    <Typography color="#202140" sx={{fontSize: 18, fontWeight: "bold"}}>{card.title}</Typography>
                                }
                                subheader={<Typography color="lightgray" sx={{fontSize: 18}}>{card.subheader}</Typography>}
                                />
                            <CardContent>
                                <Typography color="#202140" sx={{fontSize: 18, fontWeight: "bold"}}>"{card.content}"</Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide> 
                )}
            </Swiper>
            <Stack direction="row" spacing={2} sx={{ml: 1}}>
                <Button variant="outlined" color="secondary" onClick={()=>swiper.slidePrev()}>
                    <KeyboardArrowLeftOutlined color="black"/>
                </Button>
                <Button variant="outlined" color="secondary" onClick={()=>swiper.slideNext()}>
                    <KeyboardArrowRightOutlined/>
                </Button>
            </Stack>
        </Box>
    </Paper>
  )
}

export default TestimonialCard