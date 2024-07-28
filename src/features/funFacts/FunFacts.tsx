import { Box,  Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import perfil from '../../../public/icons/navigation/amor.svg'
import flag from '../../../public/icons/navigation/terreno.svg'
import elipseBlack from '../../../public/icons/navigation/EllipseBlack.svg'

import personIcon from '../../../public/icons/navigation/person.svg';

import verified from '../../../public/icons/navigation/verified.svg'

const FunFacts = ( )=> {

  const {t} = useTranslation()

  return(
    <>
    <Box sx={{width:['auto','371px'], paddingBottom:'24px' ,backgroundColor:'#f5f1f7', height:'453px', borderRadius:'20px',  marginBottom:'22px'}}>
      <Box sx={{backgroundColor:'white', borderRadius:'20px' ,paddingTop:'24px', paddingLeft:'20px', paddingRight:'20px', gap:'20px', display:'flex', flexDirection:'column',  height:'453'}}>
        <Typography sx={{fontFamily:'Inter' , fontSize:'20px', fontWeight:'600', lineHeight:'26px', letterSpacing:'-0.7px', color:'#06082C'}}>
            {t('coolNews')}
        </Typography>
        <Box display={{display:'flex',  flexDirection: 'column',gap:'24px'}}>
          <Box sx={{display:'flex',  gap:'24px' , cursor:'pointer'}}>
            <Box  sx={{width:'40px', height:'40px',}}>
              <img src={perfil}/>
              <img src={flag} style={{position:'relative', top:'-20px', left:'25px'}}/>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column'}}>
              <Typography sx={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#06082C' }}>
                Александр Магомедов <img src={verified}/>
              </Typography>
              <div>
             
              <div style={{ marginTop:'5px', display:'flex'}}>
                <span style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#06082C',}}>
                {t("AthleteRole")}
                </span>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <img src={elipseBlack} style={{marginLeft:'5px', marginRight:'5px', }}/>

                </div>
          
                <span style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#06082C',overflow:'hidden',  width:'115px', height:'18px', textOverflow:'ellipsis', whiteSpace:"nowrap"}}>
                 {t("AchievementsPlayer")} 
                </span>
              </div>
            </div>
            </Box>
            <Box bgcolor="#EEF0F7" height="40px" width="40px" borderRadius="10px" display="flex" alignItems="center" justifyContent="center">
        <img src={personIcon} alt="Profile" style={{ width: 20, height: 20, cursor: 'pointer' }} />
      </Box>

          </Box>


























          <Box sx={{display:'flex',  gap:'24px' , cursor:'pointer'}}>
            <Box  sx={{width:'40px', height:'40px',}}>
              <img src={perfil}/>
              <img src={flag} style={{position:'relative', top:'-20px', left:'25px'}}/>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column'}}>
              <Typography sx={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#06082C' }}>
                Александр Магомедов <img src={verified}/>
              </Typography>
              <div>
             
              <div style={{ marginTop:'5px', display:'flex'}}>
                <span style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#06082C',}}>
                {t("AthleteRole")}
                </span>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <img src={elipseBlack} style={{marginLeft:'5px', marginRight:'5px', }}/>

                </div>
          
                <span style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#06082C',overflow:'hidden',  width:'115px', height:'18px', textOverflow:'ellipsis', whiteSpace:"nowrap"}}>
                 {t("AchievementsPlayer")} 
                </span>
              </div>
            </div>
            </Box>
            <Box bgcolor="#EEF0F7" height="40px" width="40px" borderRadius="10px" display="flex" alignItems="center" justifyContent="center">
        <img src={personIcon} alt="Profile" style={{ width: 20, height: 20, cursor: 'pointer' }} />
      </Box>

          </Box>















































          <Box sx={{display:'flex',  gap:'24px' , cursor:'pointer'}}>
            <Box  sx={{width:'40px', height:'40px',}}>
              <img src={perfil}/>
              <img src={flag} style={{position:'relative', top:'-20px', left:'25px'}}/>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column'}}>
              <Typography sx={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#06082C' }}>
                Александр Магомедов <img src={verified}/>
              </Typography>
              <div>
             
              <div style={{ marginTop:'5px', display:'flex'}}>
                <span style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#06082C',}}>
                {t("AthleteRole")}
                </span>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <img src={elipseBlack} style={{marginLeft:'5px', marginRight:'5px', }}/>

                </div>
          
                <span style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#06082C',overflow:'hidden',  width:'115px', height:'18px', textOverflow:'ellipsis', whiteSpace:"nowrap"}}>
                 {t("AchievementsPlayer")} 
                </span>
              </div>
            </div>
            </Box>
            <Box bgcolor="#EEF0F7" height="40px" width="40px" borderRadius="10px" display="flex" alignItems="center" justifyContent="center">
        <img src={personIcon} alt="Profile" style={{ width: 20, height: 20, cursor: 'pointer' }} />
      </Box>

          </Box>




































          <Box sx={{display:'flex',  gap:'24px' , cursor:'pointer'}}>
            <Box  sx={{width:'40px', height:'40px',}}>
              <img src={perfil}/>
              <img src={flag} style={{position:'relative', top:'-20px', left:'25px'}}/>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column'}}>
              <Typography sx={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#06082C' }}>
                Александр Магомедов <img src={verified}/>
              </Typography>
              <div>
             
              <div style={{ marginTop:'5px', display:'flex'}}>
                <span style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#06082C',}}>
                {t("AthleteRole")}
                </span>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <img src={elipseBlack} style={{marginLeft:'5px', marginRight:'5px', }}/>

                </div>
          
                <span style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#06082C',overflow:'hidden',  width:'115px', height:'18px', textOverflow:'ellipsis', whiteSpace:"nowrap"}}>
                 {t("AchievementsPlayer")} 
                </span>
              </div>
            </div>
            </Box>
            <Box bgcolor="#EEF0F7" height="40px" width="40px" borderRadius="10px" display="flex" alignItems="center" justifyContent="center">
        <img src={personIcon} alt="Profile" style={{ width: 20, height: 20, cursor: 'pointer' }} />
      </Box>

          </Box>

































          <Box sx={{display:'flex',  gap:'24px' , cursor:'pointer'}}>
            <Box  sx={{width:'40px', height:'40px',}}>
              <img src={perfil}/>
              <img src={flag} style={{position:'relative', top:'-20px', left:'25px'}}/>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column'}}>
              <Typography sx={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#06082C' }}>
                Александр Магомедов <img src={verified}/>
              </Typography>
              <div>
             
              <div style={{ marginTop:'5px', display:'flex'}}>
                <span style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#06082C',}}>
                {t("AthleteRole")}
                </span>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <img src={elipseBlack} style={{marginLeft:'5px', marginRight:'5px', }}/>

                </div>
          
                <span style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#06082C',overflow:'hidden',  width:'115px', height:'18px', textOverflow:'ellipsis', whiteSpace:"nowrap"}}>
                 {t("AchievementsPlayer")} 
                </span>
              </div>
            </div>
            </Box>
            <Box bgcolor="#EEF0F7" height="40px" width="40px" borderRadius="10px" display="flex" alignItems="center" justifyContent="center">
        <img src={personIcon} alt="Profile" style={{ width: 20, height: 20, cursor: 'pointer' }} />
      </Box>

          </Box>

          <button style={{color:'#06082C', backgroundColor:'#EEF0F7', borderRadius:'10px', paddingTop:"10px", paddingBottom:"10px", paddingLeft:'24px', paddingRight:'24px', border:'none', fontFamily:'Inter', fontWeight:'548', fontSize:'14px'}}>{t("ViewAll")}</button>
















          











          
          <Box>

          </Box>
        </Box>
      </Box>
      
    </Box>
    </>
  )
}


export default FunFacts