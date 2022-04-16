import { Box, Typography, ImageList, ImageListItem } from "@mui/material"
import { items } from "../dummyData"
const ImageListMobile = () => {
  return (
    <Box component="section" sx={{mt: 5, display: {xs: "block", mobile: "none"}}}>
        <Typography variant="h6" component="h6" sx={{color: "#202140", fontWeight: "bold", mb: 1}}>Gallery</Typography>
        <ImageList sx={{width: "100%", height: "250vh", overflow: "hidden"}} cols={1} rowHeight={120} gap={4}>
            {items.map((item)=>
                <ImageListItem key={item.key} sx={{cursor: "pointer"}}>
                    <img 
                        src={item.image}
                        srcSet={item.image} 
                        alt={item.title}
                        loading="lazy"
                        style={{borderRadius: 14, height: 250}}
                        />
                </ImageListItem>
            )}
        </ImageList>
    </Box>
  )
}

export default ImageListMobile