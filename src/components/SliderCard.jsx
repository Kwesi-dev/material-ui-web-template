import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material'

const SliderCard = ({card}) => {
  return (
    <Card elevation={0}>
        <CardHeader
            avatar={
                <Avatar src={card.profilePic} alt="avatar" sx={{mb: 2, height: 100, width: 100}} size="large"/>
            }
            title={ <Typography sx={{fontSize: 18}}>{card.title}</Typography>}
            sx={{display: "flex", alignItems: "center", flexDirection: "column"}}
        />
        <CardContent sx={{width: "100%", display: "flex", justifyContent: "center"}}>
            <Typography sx={{textAlign: "center", fontWeight: "bold", mb: 3, width: "90%", fontSize: 18}}>
            "There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
            </Typography>
        </CardContent>
    </Card>
  )
}

export default SliderCard