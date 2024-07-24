

import elipse from '../../../public/images/Banner/letters/Ellipse 27137.svg'
import boxer1 from '../../../public/images/boxer/image1.png'
import boxer2 from '../../../public/images/boxer/image2.png'
import boxer3 from '../../../public/images/boxer/image3.png'
import boxer4 from '../../../public/images/boxer/image4.png'
import boxer5 from '../../../public/images/boxer/image5.png'
import boxer6 from '../../../public/images/boxer/image6.png'
import eye from  '../../../public/icons/navigation/eye.svg'
import message from '../../../public/icons/navigation/message-square-02.svg'
import profile1 from '../../../public/icons/navigation/faceProfile1.svg'
import profile2 from '../../../public/icons/navigation/profile3.svg'
import { useTranslation } from 'react-i18next'

import './mainContentSection1.css'



const MainContentSection1 = () => {

  const{t} = useTranslation()

  return(
    <>
    <div className='mainContainer'  style={{paddingLeft:'20px', paddingTop:'28px', backgroundColor:'#FFFFFF', width:'725px', paddingRight:'20px', borderRadius:'20px'}}>
      <div>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', flexDirection:'row', gap:'6px', backgroundColor:'#FFFFFF', marginBottom:'12px'}}>
            <span style={{fontFamily:'Inter', fontWeight:'400' , fontSize:'12px',color:'#9395B8'}}>

              {t("SportWrestling")}

            </span>
            <div style={{display:'flex', alignItems:'center',justifyContent:'center', backgroundColor:'white'}}>
              <img src={elipse} style={{ width:'3px', height:'3px' }} />            
            </div>
            <span style={{fontFamily:'Inter', fontWeight:'400' , fontSize:'12px',color:'#9395B8'}}>
              {t("InterviewDate")}
            </span> 
          </div>
          <span style={{fontFamily:'Inter', fontWeight:'600', fontSize:'20px',lineHeight:'26px', letterSpacing:'-0.7px', marginBottom:'20px' }}>
            {t("InterviewTitle")}
          </span>
          <span style={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'20px',letterSpacing:'-0.5px', width:'725px', marginBottom:'20px'}}>
          {t("InterviewContent")}<button style={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px' , letterSpacing:'-0.5px', lineHeight:'20px', textAlign:'center', backgroundColor:'#FFFFFF', border:'none', cursor:'pointer'}}>{t("ReadMore")}</button>
          </span>
        </div>
        <div style={{width:'725px',alignContent:'space-between',gap:'10px' , backgroundColor:'#FFFFFF', display:'flex', flexWrap:'wrap', marginBottom:'16px'}}>
          <img src={boxer1}/>
          <img src={boxer2}/>
          <img src={boxer3}/>
          <img src={boxer4}/>
          <img src={boxer5}/>
          <img src={boxer6}/>
        </div>
        <div style={{display:'flex', backgroundColor:'#FFFFFF', gap:'16px', height:'37px', alignItems:'flex-start'}}>
          <div style={{display:'flex', alignItems:'center'}} >
            <img src={eye}/>
            <span style={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px',color:'#7B7EA5'}}>
              {t("Views")}
            </span>
          </div>
         
          <div style={{display:'flex', alignItems:'center'}}>
            <img src={message}/>
            <span style={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px',color:'#7B7EA5'}}>
              4
            </span>
                      
          </div>

        </div>

        <div style={{width:'725px' ,height:'1px', backgroundColor:'#EEF0F7', marginBottom:'16px'}}/>

        <div>
          <div style={{marginBottom:'16px'}}>
            <div style={{backgroundColor:'#FFFFFF', display:'flex', alignItems:'flex-start', gap:'12px', marginBottom:'16px'}}>
              <img src={profile1}/>
              <div style={{display:'flex', flexDirection:'column'}}>
                <span style={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#7B7EA5', marginBottom:'4px'}}> {t("VadimDavydov")}  </span>
                <span style={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', marginBottom:'8px'}}>Наконец-то! Рад, что он вернулся в спорт</span>
                <span style={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#9395B8'}}>{t( "TimeAgo")} <span style={{color:'#353754'}}>Ответить</span></span>
              </div>

            </div>
            <div style={{backgroundColor:'#FFFFFF', display:'flex', alignItems:'flex-start', paddingLeft:'32px', gap:'12px'}}>
              <img src={profile2}/>
              <div style={{display:'flex', flexDirection:'column'}}>
              <span style={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#7B7EA5', marginBottom:'4px'}}> Вадим Давыдов </span>
                <span style={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', marginBottom:'8px'}}>Наконец-то! Рад, что он вернулся в спорт</span>
                <span style={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#9395B8'}}><span style={{color:'#353754'}}>Ответить</span></span>
               
              </div>

            </div>
          </div>

          <div style={{width:'725px' ,height:'1px', backgroundColor:'#EEF0F7', marginBottom:'16px'}}/>

         
          <div style={{backgroundColor:'#FFFFFF', display:'flex', alignItems:'flex-start', gap:'12px', marginBottom:'16px'}}>
              <img src={profile1}/>
              <div style={{display:'flex', flexDirection:'column'}}>
                <span style={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#7B7EA5', marginBottom:'4px'}}> Вадим Давыдов </span>
                <span style={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', marginBottom:'8px'}}>Наконец-то! Рад, что он вернулся в спорт</span>
                <span style={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#9395B8'}}>{t( "TimeAgo")} <span style={{color:'#353754'}}>Ответить</span></span>
              </div>
            </div>

            
          <div style={{height:'0.1px', marginBottom:'16px', width:'725px', backgroundColor:'floralwhite'}}></div>

          <div style={{backgroundColor:'#FFFFFF', display:'flex', alignItems:'flex-start', gap:'12px', marginBottom:'24px'}}>
              <img src={profile1}/>
              <div style={{display:'flex', flexDirection:'column'}}>
                <span style={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#7B7EA5', marginBottom:'4px'}}> Вадим Давыдов </span>
                <span style={{fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', marginBottom:'8px'}}>Наконец-то! Рад, что он вернулся в спорт</span>
                <span style={{fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#9395B8'}}>{t("CommentTime")} <span style={{color:'#353754'}}>{t("Reply")}</span></span>
              </div>
            </div>
        </div>

      </div>
      <div style={{paddingBottom:'28px'}}>
        <button style={{cursor:'pointer',width:'232px', height:'40px', gap:'4px', paddingTop:'10px',paddingBottom:'10px', paddingLeft:'24px', paddingRight:'24px', borderRadius:'10px', backgroundColor:'#EEF0F7', border:'none', fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', textAlign:'center', }}>
           {t("SeeAllComments")}
        </button>

      </div>
    </div>
    
    </>
  )
}

export default MainContentSection1