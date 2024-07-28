import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import backIcon from '../../../public/icons/navigation/back.svg'

import image1 from '../../../public/icons/navigation/fotoe.png'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import DialogBoxPhoto from "../../entitties/dialogBoxFoto/DialogBoxPhoto"
import xclose from '../../../public/icons/navigation/x-close.svg'
import right from '../../../public/icons/navigation/rigthButton.svg'
import run from '../../../public/icons/navigation/leftbutton.svg'

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

const openDialog = () => {
  setIsDialogOpen(true);
};

const closeDialog = () => {
  setIsDialogOpen(false);
};


  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior:"instant" });

  }, [])

const {t} =useTranslation()
  return(
    <>
    <Box sx={{backgroundColor:'#f5f1f7', marginTop:'64px', paddingLeft:{sm:'140px'}, paddingRight:{sm:'140px'},paddingTop:{sm:'24px'} }}>
      <Box >

      
      <Box sx={{width:'40px', height:'40px', padding:{sm:'10px 24px'}}}>
        <Box component='img' src={backIcon} onClick={() => navigate('/')} />
      </Box>
        
        <Box sx={{overflow:'hidden', paddingLeft:{sm:'24px'}, paddingRight:{sm:'24px'}, backgroundColor:'white', width:{sm:'1160px'}, borderRadius:'20px', paddingTop:'24px'}}>
          <Typography sx={{marginBottom:'24px' , fontFamily:'Inter', fontWeight:'600', fontSize:'20px', lineHeight:'26px', letterSpacing:'-0.7px', color:'#06082C'}}>{t('galery')}  <span style={{color:'#9395B8'}}>94</span></Typography>

          <Box sx={{width:{sm:'1200px'}, backgroundColor:'white', display:'flex', flexWrap:'wrap', gap:'12px'}}>
            {Array.from({length: 50}).map((_) => {
              return <Box component='img' onClick={() => openDialog()} src={image1} sx={{width:{sm:'223.4px'}}}/>
            })}

          </Box>

    

        </Box>


        <Box id="dialogBox" sx={{ backgroundColor: 'khaki', position: 'relative', zIndex: '600' }}></Box>
{isDialogOpen && (
  <DialogBoxPhoto isOpen={isDialogOpen}>
    <Box sx={{ width: '878px', height: '614px', position: 'relative', zIndex: '100', }}>
      <img onClick={closeDialog} src={xclose} style={{ width: '20px', height: '20px', cursor: 'pointer', marginLeft: '690px',  }} />
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', justifyContent: 'center' }}>
        <Box>
          <img onClick={closeDialog} src={run} style={{ cursor: 'pointer' }} />
        </Box>
        <Box>
          <img src={image1} style={{ width: '500px', height: '450px', borderRadius: '10px' }} />
        </Box>
        <Box sx={{ cursor: 'pointer' }}>
          <img src={right} style={{ cursor: 'pointer' }} />
        </Box>
      </Box>
    </Box>
  </DialogBoxPhoto>
)}


      </Box>
    </Box>
    
    </>
  )
}

export default Home