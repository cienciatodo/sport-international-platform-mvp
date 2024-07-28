import { Box, Button, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

import calendar from '../../../public/icons/navigation/calendar.svg'


const LastNews = () => {

  const {t} = useTranslation()

  return(
    <>
    <Box sx={{width:['auto','371px'], backgroundColor:'white',height:'595px', borderRadius:'20px'}}>
      <Box sx={{ paddingTop:'24px', paddingBottom:'24px', paddingLeft:'20px', paddingRight:'20px'}}>

      <Typography sx={{fontFamily:'Inter' , fontSize:'20px', fontWeight:'600', lineHeight:'26px', letterSpacing:'-0.7px', color:'#06082C', marginBottom:'24px'}}>
            {t( "lastNews")}
        </Typography>
        <Box sx={{ gap:'24px', display:'flex', backgroundColor:'white' , width:'auto', marginBottom:'20px', }}>


          <Box sx={{borderRadius:'20px', backgroundColor:'white', width: '100%'}}>


            <Box  >

           



            
            <Box sx={{borderRadius:'12px',paddingTop:'10px', backgroundColor:"#F8F8F9", paddingBottom:'10px', paddingLeft:'10px', paddingRight:'10px', marginBottom:'16px', width:'auto' }}>
            <Typography style={{fontFamily:'Inter', fontWeight:'600', fontSize:'12px', lineHeight:'18px', letterSpacing:'-0.1px', color:'#9395B8', marginBottom:'12px'}}>{t("SportWrestling")}</Typography>
            <Typography style={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', width:'311px', marginBottom:'8px'}}>{t("News")}</Typography>
            <Box display='flex' flexDirection="row" gap="6px" bgcolor="#F8F8F9" width="auto">
              <img src={calendar}/>
              <Typography style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', display:'flex', alignItems:'center'}}>{t('data')}</Typography>
            </Box>

            </Box>


            </Box>













            <Box style={{borderRadius:'12px',paddingTop:'10px', backgroundColor:'#F8F8F9', paddingBottom:'10px', paddingLeft:'10px', paddingRight:'10px',marginBottom:'16px'}}>
            <Typography style={{fontFamily:'Inter', fontWeight:'600', fontSize:'12px', lineHeight:'18px', letterSpacing:'-0.1px', color:'#9395B8', marginBottom:'12px'}}>{t("SportWrestling")}</Typography>
            <Typography style={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', width:'311px', marginBottom:'8px'}}>{t("News")}</Typography>
            <Box display='flex' flexDirection="row" gap="6px" bgcolor="#F8F8F9" width="auto">
              <img src={calendar}/>
              <Typography style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', display:'flex', alignItems:'center'}}>{t('data')}</Typography>
            </Box>

            </Box>











            <Box style={{borderRadius:'12px',paddingTop:'10px', backgroundColor:'#F8F8F9', paddingBottom:'10px', paddingLeft:'10px', paddingRight:'10px'}}>
            <Typography style={{fontFamily:'Inter', fontWeight:'600', fontSize:'12px', lineHeight:'18px', letterSpacing:'-0.1px', color:'#9395B8', marginBottom:'12px'}}>{t("SportWrestling")}</Typography>
            <Typography style={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', width:'311px', marginBottom:'8px'}}>{t("News")}</Typography>
            <Box display='flex' flexDirection="row" gap="6px" bgcolor="#F8F8F9" width="auto">
              <img src={calendar}/>
              <Typography style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', display:'flex', alignItems:'center'}}>{t('data')}</Typography>
            </Box>

            </Box>










          
          
          

          </Box>
        </Box>

        <Button sx={{paddingTop:'10px', paddingBottom:'10px', paddingLeft:'24px', paddingRight:'24px', height:'40px', width:'100%', borderRadius:'10px', backgroundColor:'#EEF0F7', border:'none'}}>
          <Typography sx={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', }}>{t("SportWrestling")}</Typography>
        </Button>

      </Box>
      
    </Box>
    
    </>
  )
}

export default LastNews