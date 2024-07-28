// import pattern from  '../../../public/icons/navigation/pattern1.jpg'
// import xclose from '../../../public/icons/navigation/x-close.png'
// import profile from '../../../public/icons/navigation/propro.png'
// import flag from '../../../public/icons/navigation/flag2.png'

// const Accounts = () => {
//   return(
//     <>
//     <div style={{backgroundColor:'#FFFFFF', display:'flex', flexDirection:'column', width:'765px', borderRadius:'20px'}}>
//       <div style={{display:'flex', flexDirection:'row',  gap:'10px', paddingLeft:'20px', width:'765px', paddingTop:'28px', paddingBottom:'28px'}}>
//         <div style={{backgroundImage:`url(${pattern})`, width:'173.75px', height:'230px', borderRadius:'14px', backgroundSize:'cover', display:'flex', flexDirection:'column', alignItems:'center'}}>
//           <div style={{position:'relative',top:'8px', display:'flex', justifyContent:'flex-end',right:'-70.75px', marginBottom:'10px'}}>
//           <img src={xclose} />
//           </div>
         
//           <div style={{marginBottom:'22px'}}>
//             <img src={profile}/>
//             <img src={flag} style={{position:'relative' ,left:'-25px'}}/>

//           </div>
//           <div style={{marginBottom:'10px', width:'140px', textAlign:'center', color:'#FFFFFF', fontFamily:'Inter', fontWeight:'548'}}>
//            Александр Магомедов
//           </div>
//           <button style={{cursor:'pointer',width:'140px', backgroundColor:'#EEF0F7', paddingTop:'10px', paddingBottom:'10px', paddingLeft:'24px', paddingRight:'24px', border:'none', display:'flex', justifyContent:'center',alignItems:'center', borderRadius:'10px', gap:'10px', color:'#06082C', fontFamily:'Inter', fontWeight:'548', lineHeight:'20px', letterSpacing:'-0.5px', textAlign:'center'}}>
//             Подписаться
//           </button>

//         </div>





//         <div style={{backgroundImage:`url(${pattern})`, width:'173.75px', height:'230px', borderRadius:'14px', backgroundSize:'cover', display:'flex', flexDirection:'column', alignItems:'center'}}>
//           <div style={{position:'relative',top:'8px', display:'flex', justifyContent:'flex-end',right:'-70.75px', marginBottom:'10px'}}>
//           <img src={xclose} />
//           </div>
         
//           <div style={{marginBottom:'22px'}}>
//             <img src={profile}/>
//             <img src={flag} style={{position:'relative' ,left:'-25px'}}/>

//           </div>
//           <div style={{marginBottom:'10px', width:'140px', textAlign:'center', color:'#FFFFFF', fontFamily:'Inter', fontWeight:'548'}}>
//            Александр Магомедов
//           </div>
//           <button style={{cursor:'pointer',width:'140px', backgroundColor:'#EEF0F7', paddingTop:'10px', paddingBottom:'10px', paddingLeft:'24px', paddingRight:'24px', border:'none', display:'flex', justifyContent:'center',alignItems:'center', borderRadius:'10px', gap:'10px', color:'#06082C', fontFamily:'Inter', fontWeight:'548', lineHeight:'20px', letterSpacing:'-0.5px', textAlign:'center'}}>
//             Подписаться
//           </button>

//         </div>



//         <div style={{backgroundImage:`url(${pattern})`, width:'173.75px', height:'230px', borderRadius:'14px', backgroundSize:'cover', display:'flex', flexDirection:'column', alignItems:'center'}}>
//           <div style={{position:'relative',top:'8px', display:'flex', justifyContent:'flex-end',right:'-70.75px', marginBottom:'10px'}}>
//           <img src={xclose} />
//           </div>
         
//           <div style={{marginBottom:'22px'}}>
//             <img src={profile}/>
//             <img src={flag} style={{position:'relative' ,left:'-25px'}}/>

//           </div>
//           <div style={{marginBottom:'10px', width:'140px', textAlign:'center', color:'#FFFFFF', fontFamily:'Inter', fontWeight:'548'}}>
//            Александр Магомедов
//           </div>
//           <button style={{cursor:'pointer',width:'140px', backgroundColor:'#EEF0F7', paddingTop:'10px', paddingBottom:'10px', paddingLeft:'24px', paddingRight:'24px', border:'none', display:'flex', justifyContent:'center',alignItems:'center', borderRadius:'10px', gap:'10px', color:'#06082C', fontFamily:'Inter', fontWeight:'548', lineHeight:'20px', letterSpacing:'-0.5px', textAlign:'center'}}>
//             Подписаться
//           </button>

//         </div>



//         <div style={{backgroundImage:`url(${pattern})`, width:'173.75px', height:'230px', borderRadius:'14px', backgroundSize:'cover', display:'flex', flexDirection:'column', alignItems:'center'}}>
//           <div style={{position:'relative',top:'8px', display:'flex', justifyContent:'flex-end',right:'-70.75px', marginBottom:'10px'}}>
//           <img src={xclose} />
//           </div>
         
//           <div style={{marginBottom:'22px'}}>
//             <img src={profile}/>
//             <img src={flag} style={{position:'relative' ,left:'-25px'}}/>

//           </div>
//           <div style={{marginBottom:'10px', width:'140px', textAlign:'center', color:'#FFFFFF', fontFamily:'Inter', fontWeight:'548'}}>
//            Александр Магомедов
//           </div>
//           <button style={{cursor:'pointer',width:'140px', backgroundColor:'#EEF0F7', paddingTop:'10px', paddingBottom:'10px', paddingLeft:'24px', paddingRight:'24px', border:'none', display:'flex', justifyContent:'center',alignItems:'center', borderRadius:'10px', gap:'10px', color:'#06082C', fontFamily:'Inter', fontWeight:'548', lineHeight:'20px', letterSpacing:'-0.5px', textAlign:'center'}}>
//             Подписаться
//           </button>

//         </div>


//       </div>
//     </div>
    
//     </>
//   )
// }

// export default Accounts


import pattern from  '../../../public/icons/navigation/pattern1.jpg'
import xclose from '../../../public/icons/navigation/x-close.png'
import profile from '../../../public/icons/navigation/propro.png'
import flag from '../../../public/icons/navigation/flag2.png'
import { Box, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Accounts = () => {
  const {t} = useTranslation()
  return(
    <>
    <Box sx={{ overflow:{xs:'hidden'},backgroundColor:'#FFFFFF', display:'flex', flexDirection:'column', width:{sm:'765px', xs:'auto'}, borderRadius:'20px'}}>
      <Box sx={{ display:'flex', flexDirection:'row',  gap:'10px', paddingLeft:'20px', width:{sm:'765px', xs:'343px'}, paddingTop:'28px', paddingBottom:'28px',}}>
      <Box sx={{backgroundImage:`url(${pattern})`, width:{xs:'173.75px'}, height:'230px', borderRadius:'14px', backgroundSize:'cover', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Box sx={{position:'relative',top:'8px', display:'flex', justifyContent:'flex-end',right:'-70.75px', marginBottom:'10px'}}>
          <img src={xclose} />
          </Box>
         
          <Box sx={{marginBottom:'22px'}}>
            <img src={profile}/>
            <img src={flag} style={{position:'relative' ,left:'-25px'}}/>

          </Box>
          <Box sx={{marginBottom:'10px', width:'140px', textAlign:'center', color:'#FFFFFF', fontFamily:'Inter', fontWeight:'548'}}>
           Александр Магомедов
          </Box>
          <Button
      sx={{
        backgroundColor: '#EEF0F7',
        borderRadius: '10px',
        padding: '10px 24px', // Match the HTML button's padding
        fontWeight: '548',
        color: '#06082C',
        letterSpacing: '-0.5px',
        textTransform:'none',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: '14px',
        lineHeight: '20px', // Match the line-height from HTML button
        gap: '10px', // Add a gap to match the flex gap in HTML button
        display: 'flex', // Ensure the button uses flexbox
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        border: 'none', // Remove default border
        cursor: 'pointer', // Pointer cursor on hover
        '&:hover': {
          backgroundColor: '#D0D8E2' // Optional: Add hover effect to match HTML button's look
        }
      }}
    >
        {t('subscribe')}
    </Button>

        </Box>






        <Box sx={{backgroundImage:`url(${pattern})`, width:'173.75px', height:'230px', borderRadius:'14px', backgroundSize:'cover', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Box sx={{position:'relative',top:'8px', display:'flex', justifyContent:'flex-end',right:'-70.75px', marginBottom:'10px'}}>
          <img src={xclose} />
          </Box>
         
          <Box sx={{marginBottom:'22px'}}>
            <img src={profile}/>
            <img src={flag} style={{position:'relative' ,left:'-25px'}}/>

          </Box>
          <Box sx={{marginBottom:'10px', width:'140px', textAlign:'center', color:'#FFFFFF', fontFamily:'Inter', fontWeight:'548'}}>
           Александр Магомедов
          </Box>
          <Button
      sx={{
        backgroundColor: '#EEF0F7',
        borderRadius: '10px',
        padding: '10px 24px', // Match the HTML button's padding
        fontWeight: '548',
        color: '#06082C',
        letterSpacing: '-0.5px',
        textAlign: 'center',
        textTransform:'none',
        fontFamily: 'Inter',
        fontSize: '14px',
        lineHeight: '20px', // Match the line-height from HTML button
        gap: '10px', // Add a gap to match the flex gap in HTML button
        display: 'flex', // Ensure the button uses flexbox
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        border: 'none', // Remove default border
        cursor: 'pointer', // Pointer cursor on hover
        '&:hover': {
          backgroundColor: '#D0D8E2' // Optional: Add hover effect to match HTML button's look
        }
      }}
    >
      {t('subscribe')}
    </Button>

        </Box>




        <Box sx={{backgroundImage:`url(${pattern})`, width:'173.75px', height:'230px', borderRadius:'14px', backgroundSize:'cover', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Box sx={{position:'relative',top:'8px', display:'flex', justifyContent:'flex-end',right:'-70.75px', marginBottom:'10px'}}>
          <img src={xclose} />
          </Box>
         
          <Box sx={{marginBottom:'22px'}}>
            <img src={profile}/>
            <img src={flag} style={{position:'relative' ,left:'-25px'}}/>

          </Box>
          <Box sx={{marginBottom:'10px', width:'140px', textAlign:'center', color:'#FFFFFF', fontFamily:'Inter', fontWeight:'548'}}>
           Александр Магомедов
          </Box>
          <Button
      sx={{
        backgroundColor: '#EEF0F7',
        borderRadius: '10px',
        padding: '10px 24px', // Match the HTML button's padding
        fontWeight: '548',
        color: '#06082C',
        letterSpacing: '-0.5px',
        textAlign: 'center',
        textTransform:'none',
        fontFamily: 'Inter',
        fontSize: '14px',
        lineHeight: '20px', // Match the line-height from HTML button
        gap: '10px', // Add a gap to match the flex gap in HTML button
        display: 'flex', // Ensure the button uses flexbox
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        border: 'none', // Remove default border
        cursor: 'pointer', // Pointer cursor on hover
        '&:hover': {
          backgroundColor: '#D0D8E2' // Optional: Add hover effect to match HTML button's look
        }
      }}
    >
      {t('subscribe')}
    </Button>

        </Box>




        <Box sx={{backgroundImage:`url(${pattern})`, width:'173.75px', height:'230px', borderRadius:'14px', backgroundSize:'cover', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Box sx={{position:'relative',top:'8px', display:'flex', justifyContent:'flex-end',right:'-70.75px', marginBottom:'10px'}}>
          <img src={xclose} />
          </Box>
         
          <Box sx={{marginBottom:'22px'}}>
            <img src={profile}/>
            <img src={flag} style={{position:'relative' ,left:'-25px'}}/>

          </Box>
          <Box sx={{marginBottom:'10px', width:'140px', textAlign:'center', color:'#FFFFFF', fontFamily:'Inter', fontWeight:'548'}}>
           Александр Магомедов
          </Box>
          <Button
      sx={{
        backgroundColor: '#EEF0F7',
        borderRadius: '10px',
        padding: '10px 24px', // Match the HTML button's padding
        fontWeight: '548',
        color: '#06082C',
        letterSpacing: '-0.5px',
        textAlign: 'center',
        textTransform:'none',
        fontFamily: 'Inter',
        fontSize: '14px',
        lineHeight: '20px', // Match the line-height from HTML button
        gap: '10px', // Add a gap to match the flex gap in HTML button
        display: 'flex', // Ensure the button uses flexbox
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        border: 'none', // Remove default border
        cursor: 'pointer', // Pointer cursor on hover
        '&:hover': {
          backgroundColor: '#D0D8E2' // Optional: Add hover effect to match HTML button's look
        }
      }}
    >
      {t('subscribe')}
    </Button>

        </Box>


      </Box>
    </Box>
    
    </>
  )
}

export default Accounts