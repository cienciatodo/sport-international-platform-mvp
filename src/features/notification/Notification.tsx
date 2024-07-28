import sportman from '../../../public/icons/navigation/sportman.png'

import russia from '../../../public/icons/navigation/russiaround.svg'
import button from '../../../public/icons/navigation/button.svg'
import goldIcon from '../../../public/icons/navigation/gold.svg'
import profilepicture from '../../../public/icons/navigation/profile34.svg'

import elipseBlack from '../../../public/icons/navigation/EllipseBlack.svg'
import { useTranslation } from 'react-i18next'
import { Box, Button, Typography } from '@mui/material'

const Notification = () => {
  const {t} =useTranslation()
  return(
    <>
    <Box sx={{paddingTop:'28px',paddingBottom:'28px',paddingLeft:'20px',paddingRight:'20px', backgroundColor:'#FFFFFF',  width: {sm:'725px', xs:'auto'}, borderRadius:'20px'}}>
      <Box>
        <Typography  sx={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#9395B8'}}>
          {t("EventDate")}
        </Typography>
        <Box sx={{marginTop:'12px'}}>
          <Box sx={{display:'flex', flexDirection:'row', backgroundColor:'#ff0000', width:{sm:'725px', xs:'auto'},  marginBottom:'16px',justifyContent:'space-between' }}>
            <Box sx={{display:'flex'}}>
            <Box >
            <img src={sportman} />
            <Box component="img" src={russia} sx={{borderRadius:'100px', position:'relative',left:{sm:'-15.45px', xs:'-15.45px'}, border:'solid', borderWidth:'2px', borderColor:'#FFFFFF', top:{sm:'0px', xs:'-0px'}}}/>
            </Box>
            <Box sx={{backgroundColor:'yellowgreen', overflow:'hidden', whiteSpace:'nowrap',  width:{xs:'190px', sm:'auto'}}}>
              <Typography  sx={{color:'#06082C',fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', }}>
              {t("AthleteName")}
              </Typography>
              <Box sx={{ marginTop:'5px', display:'flex'}}>
                <Typography sx={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#06082C',}}>
                {t("AthleteRole")}
                </Typography>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <img src={elipseBlack} style={{marginLeft:'5px', marginRight:'5px', }}/>

                </Box>
          
                <Typography sx={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#06082C',textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap',}}>
                 {t("AchievementsPlayer")}
                </Typography>
              </Box>
            </Box>

            </Box>
           
            <Box>
              <img src={button} />
            </Box>

          </Box>         
        </Box>
        <Box>
          <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',  width: {sm:'725px', xs:'auto'}, backgroundColor:'#0000fe', marginBottom:'16px', borderRadius:'12px'}}>
            <Box sx={{marginBottom:'16px'}}>
              <img src={goldIcon}/>

            </Box>
            <Typography  sx={{color:'#06082C',fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', marginBottom:'8px'}}>
              {t("Placement")}
            </Typography>
            <Typography sx={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'18px', color:'#9395B8',marginBottom:'16px', textAlign:'center', backgroundColor:'khaki'}}>
             {t("EventDetails")}
            </Typography>
          </Box>
        </Box>
        <Box sx={{backgroundColor:'#00d9ff' , whiteSpace:"nowrap", overflow:'hidden', textOverflow:'ellipsis'}}>
          <Box sx={{display:'flex', width:'348px', marginBottom:'20px', backgroundColor:"salmon"}}>
            <Box component="img" src={profilepicture} sx={{marginRight:'6px'}}/>
            <Typography sx={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#06082C'}}>
              {t("CongratulatedBy")}
            </Typography>
            <Typography sx={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#7B7EA5', marginLeft:'6px' ,whiteSpace:"nowrap", overflow:'hidden', textOverflow:'ellipsis'}}>
              {t("moreCongrats")}
            </Typography>
            
          </Box>
          <Button sx={{cursor:'pointer',backgroundColor:'#06082C', fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', textAlign:'center', color:'#FFFFFF', border:'none', paddingTop:'10px', paddingBottom:'10px', paddingLeft:'24px', paddingRight:'24px', borderRadius:'10px', height:'40px', width:{xs:'100%', sm:'auto', textTransform:'none'}}}>
           {t("Congratulate")}
          </Button>
        </Box>
      </Box>
    </Box>
    
    </>
  )
}

export default Notification