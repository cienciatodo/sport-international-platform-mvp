import { useTranslation } from 'react-i18next'
import ads from '../../../public/icons/navigation/ads.jpg'
import { Box, Typography } from '@mui/material'


const BannerAdvertisment = () => {
const {t} = useTranslation()

  return(
    <>
    <Box sx={{backgroundImage:`url(${ads})`, width:{xs:'auto', sm:'765px'}, height:'286px',  backgroundSize:'cover', borderRadius:'20px', }}>
      <Box sx={{display:'flex', flexDirection:'column', width:'336px',  height:'286px', marginLeft:'429px'}}>
        <Typography sx={{fontFamily:'Inter', fontWeight:'500', fontStyle:'italic',fontSize:'30px', lineHeight:'32px', letterSpacing:'-1px',  width:'316px', textAlign:'right', color:'#FFFFFF', marginBottom:'24px'}}>
         {t("SpringCollection")}
        </Typography>
        <Typography sx={{width:'250px', height:'116px', fontFamily:'Inter', fontWeight:'600', fontSize:'96px', lineHeight:'116.18px', letterSpacing:'-1px', textAlign:'right', color:'#FFFFFF', paddingLeft:'86px'}}>
          -30%
        </Typography>
      </Box>


    </Box>
    </>
  )
}


export default BannerAdvertisment