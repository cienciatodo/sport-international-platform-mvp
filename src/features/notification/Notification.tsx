import sportman from '../../../public/icons/navigation/sportman.png'

import russia from '../../../public/icons/navigation/russiaround.svg'
import button from '../../../public/icons/navigation/button.svg'
import goldIcon from '../../../public/icons/navigation/gold.svg'
import profilepicture from '../../../public/icons/navigation/profile34.svg'

import elipseBlack from '../../../public/icons/navigation/EllipseBlack.svg'
import { useTranslation } from 'react-i18next'

const Notification = () => {
  const {t} =useTranslation()
  return(
    <>
    <div style={{paddingTop:'28px',paddingBottom:'28px',paddingLeft:'20px',paddingRight:'20px', backgroundColor:'#FFFFFF', width:'725px', borderRadius:'20px'}}>
      <div>
        <span  style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#9395B8'}}>
          {t("EventDate")}
        </span>
        <div style={{marginTop:'12px'}}>
          <div style={{display:'flex', flexDirection:'row', backgroundColor:'#FFFFFF', width:'725px',  marginBottom:'16px',justifyContent:'space-between', }}>
            <div style={{display:'flex'}}>
            <div >
            <img src={sportman} />
            <img src={russia} style={{borderRadius:'100px', position:'relative', left:'-15.45px', border:'solid', borderWidth:'2px', borderColor:'#FFFFFF'}}/>

            </div>
            
            <div>
              <span  style={{color:'#06082C',fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px'}}>
              {t("AthleteName")}
              </span>
              <div style={{ marginTop:'5px', display:'flex'}}>
                <span style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#06082C',}}>
                {t("AthleteRole")}
                </span>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <img src={elipseBlack} style={{marginLeft:'5px', marginRight:'5px', }}/>

                </div>
          
                <span style={{fontFamily:'Inter', fontWeight:'400', fontSize:'12px', lineHeight:'18px', color:'#06082C',}}>
                 {t("AchievementsPlayer")}
                </span>
              </div>
            </div>

            </div>
           
            <div>
              <img src={button} />
            </div>

          </div>         
        </div>
        <div>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'725px', backgroundColor:'#F8F8F9', marginBottom:'16px', borderRadius:'12px'}}>
            <div style={{marginBottom:'16px'}}>
              <img src={goldIcon}/>

            </div>
            <span  style={{color:'#06082C',fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', marginBottom:'8px'}}>
              {t("Placement")}
            </span>
            <span style={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'18px', color:'#9395B8',marginBottom:'16px'}}>
             {t("EventDetails")}
            </span>
          </div>
        </div>
        <div style={{backgroundColor:'#FFFFFF'}}>
          <div style={{display:'flex', width:'348px', marginBottom:'20px'}}>
            <img src={profilepicture} style={{marginRight:'6px'}}/>
            <span style={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#06082C'}}>
              {t("CongratulatedBy")}
            </span>
            <span style={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#7B7EA5', marginLeft:'6px'}}>
              {t("moreCongrats")}
            </span>
            
          </div>
          <button style={{cursor:'pointer',backgroundColor:'#06082C', fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', textAlign:'center', color:'#FFFFFF', border:'none', paddingTop:'10px', paddingBottom:'10px', paddingLeft:'24px', paddingRight:'24px', borderRadius:'10px', height:'40px'}}>
           {t("Congratulate")}
          </button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Notification