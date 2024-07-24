import { useTranslation } from 'react-i18next'
import ads from '../../../public/icons/navigation/ads.jpg'


const BannerAdvertisment = () => {
const {t} = useTranslation()

  return(
    <>
    <div style={{backgroundImage:`url(${ads})`, width:'765px', height:'286px',  backgroundSize:'cover', borderRadius:'20px'}}>
      <div style={{display:'flex', flexDirection:'column', width:'336px',  height:'286px', marginLeft:'429px'}}>
        <span style={{fontFamily:'Inter', fontWeight:'500', fontStyle:'italic',fontSize:'30px', lineHeight:'32px', letterSpacing:'-1px',  width:'316px', textAlign:'right', color:'#FFFFFF', marginBottom:'24px'}}>
         {t("SpringCollection")}
        </span>
        <span style={{width:'250px', height:'116px', fontFamily:'Inter', fontWeight:'600', fontSize:'96px', lineHeight:'116.18px', letterSpacing:'-1px', textAlign:'right', color:'#FFFFFF', paddingLeft:'86px'}}>
          -30%
        </span>
      </div>


    </div>
    </>
  )
}


export default BannerAdvertisment