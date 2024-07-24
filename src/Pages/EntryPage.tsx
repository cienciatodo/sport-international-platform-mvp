
import Header from "../features/header/Header"
import Banner from "../features/banner/Banner"

import './entryPage.css'
import MainContentSection1 from "../features/mainContentSection1/mainContentSection1"
import MainContentSection2 from "../features/mainContentSection2/MainContentSection2"
import BannerAdvertisment from "../features/bannerAdvertisment/BannerAdvertisment"
import Notification from "../features/notification/Notification"
import Accounts from "../features/accounts/Accounts"
import FotoGalery from "../features/fotoGallery/FotoGalery"
import VideoRecorder from "../features/videorecorder/VideoRecorder";



import all from '../../public/icons/navigation/ka.svg'

import all1 from '../../public/icons/navigation/ke.svg'

import all2 from '../../public/icons/navigation/ki.svg'

import all3 from '../../public/icons/navigation/ko.svg'

import bicicleta from '../../public/icons/navigation/bicicleta.png'
import { useTranslation } from "react-i18next"

const EntryPage = () => {

  const {t} = useTranslation()
  return(
    <>    
    <Header/>
    <div style={{height:'1000vh', backgroundColor:'#f5f1f7', display:'flex', flexDirection:'row'}}>
      <div className="mainPage">
            <Banner/>
            <MainContentSection1/>
            <MainContentSection2/>
            <BannerAdvertisment/>
            <Notification/>
            <Accounts/>
            <FotoGalery/>
            <VideoRecorder/>
      </div>
      <div style={{position:'relative', top:'457px', left:'-231px'}}>
        
        <div style={{backgroundColor:'white', width:'331px', height:'245px', borderRadius:'20px', paddingTop:'24px', paddingBottom:'24px', paddingLeft:'20px', paddingRight:'20px', marginBottom:'24px' }}>

      
          <span style={{fontFamily:'Inter', fontWeight:'600', fontSize:'20px', lineHeight:'26px', letterSpacing:'-0.7px', }}>          
           {t('PageFilter')}

          </span>
          <div style={{display:'flex', flexDirection:'column', marginTop:'24px', gap:'12px'}}>
            <button style={{cursor:'pointer', backgroundColor:'#EEF0F7', height:'40px', border:'none', borderRadius:'10px', display:'flex', alignItems:'center', padding:'10px', gap:'12px'}}>
              <img src={all}/>
              <span style={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', textAlign:'center', color:'#06082C',}}>
                {t('All')}
              </span>
            </button>
            <button style={{ cursor:'pointer',backgroundColor:'#FFFFFF',  height:'40px', border:'none',borderRadius:'10px', display:'flex', alignItems:'center', padding:'10px', gap:'12px'}}>
            <img src={all1}/>
              <span style={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', textAlign:'center', color:'#7B7EA5', }}>
              
              {t('CompetitionResults')}
              </span>
            </button>
            <button  style={{backgroundColor:'#FFFFFF',  height:'40px', border:'none',borderRadius:'10px', display:'flex', alignItems:'center', padding:'10px', gap:'12px', cursor:'pointer'}}>
            <img src={all2}/>
              <span style={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', textAlign:'center', color:'#7B7EA5'}}>
           
              {t('Video')}
              </span>
            </button>
            <button  style={{cursor:'pointer',backgroundColor:'#FFFFFF',  height:'40px', border:'none',borderRadius:'10px', display:'flex', alignItems:'center', padding:'10px', gap:'12px'}}>
            <img src={all3}/>
              <span style={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', textAlign:'center', color:'#7B7EA5'}}>
            
              {t('Achievements')}
              </span>
            </button>
          </div>

        </div>
        <img src={bicicleta} />
        
      
     
    
      </div>
    </div>

    </>
  )

}

export default  EntryPage
