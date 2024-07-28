import { useTranslation } from 'react-i18next'



import all from '../../../public/icons/navigation/ka.svg'


import all1 from '../../../public/icons/navigation/ke.svg'

import all2 from '../../../public/icons/navigation/ki.svg'

import all3 from '../../../public/icons/navigation/ko.svg'

const RightSectionOne = () => {

  const {t} =useTranslation()

  return(


    <>
            <div style={{backgroundColor:"firebrick", width:'auto', height:'245px', borderRadius:'20px', paddingTop:'24px', paddingBottom:'24px', paddingLeft:'20px', paddingRight:'20px', marginBottom:'24px' }}>

      
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
    
    </>
  )
}

export default RightSectionOne