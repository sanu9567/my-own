import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import likeIcon from  './Image/like.png'
import heartIcon from  './Image/heart.png'
import shareIcon from  './Image/share.png'

const Customcard = ({img, price, item, likes, heart, share}) => {
    const DishBox = styled(Box)(({ theme }) => ({
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        maxWidth:200,
        backgroundColor: "#fff",
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down("md")]: {
         margin:theme.spacing(2, 0, 2, 0),
         
        },
        "&:hover":{
           backgroundColor: "#f5f5f5",
           boxShadow: "0 0 10px rgba(0, 0, 0, 0.9)",
           transform: "scale(1.08)",
           transition: "all 0.3s ease-in-out ",

        },
    }));
    const InfoBox = styled(Box)(() => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    }));
    const ImgContainer= styled(Box)(() => ({
        width: "100%",

    }));

  return (

    <DishBox>
        <ImgContainer>

        <img src={img} alt="housephoto" style={{ maxWidth: "100%"}}/>
        </ImgContainer>

        <Box sx={{padding: "1rem"}}>
            <Typography variant="body2" sx={{ fontWeight: "800"}}>
            ₹{price}
            </Typography>
            <Typography variant="body2" sx={{my:2}}>
            {item}
            </Typography>
         <Box
            sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
            }}   
            >
                <InfoBox>
                    <img src={likeIcon} ait="bedroomsIcon"/>
                    <Typography variant="body2" sx={{mt:1}}>
                        {likes}
                    </Typography>
                </InfoBox>

                <InfoBox>
                    <img src={heartIcon} ait="bathroomsIcon"/>
                    <Typography variant="body2" sx={{mt:1}}>
                        {heart}
                    </Typography>
                </InfoBox>

                <InfoBox>
                    <img src={shareIcon} ait="spaceIcon"/>
                    <Typography variant="body2" sx={{mt:1}}>
                        {share}
                    </Typography>
                </InfoBox>
            </Box>
        </Box>
        </DishBox>
  )
}

export default Customcard