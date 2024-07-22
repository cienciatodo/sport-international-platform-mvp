

import './logo.css'

import redPoint from '../../../public/icons/sportRecLogo/redPoint.svg'
import sportRecLogo from '../../../public/icons/sportRecLogo/sportRecLogo.svg'

const Logo = () => {
  return(
    <>

    <div className="container">
      <div style={{ alignItems:'flex-start' , display:'flex',}}>
      <img src={redPoint} style={{position:'relative', left:'7.86px', top:'7.86px', width:'3.55px', height:'3.55px'}} />
       
      </div>
      <div style={{display:'flex', alignItems:'center',  padding:'0px', margin:'opx'}}>
      

        <img src={sportRecLogo} style={{width:'109.95px', height:'16px' }} />
      </div>
    </div>


    </>
  )
}


export default Logo























// <Stack direction={'row'} sx={{ display:'flex', alignItems:'center'}}  >   
// <Box sx={{display:'flex', alignItems:'flexStart' ,  width:'3.55px', height:'14.06px', justifyConten:'center' , alignItem:'flexStart', backgroundColor:'yellow'}}>
//   <Icons iconFolder="sportRecLogo" type="redPoint" className="point"/>
// </Box>
// <Box sx={{display:'flex', flexDirection:'row' ,backgroundColor: '#f700ff'}}>
//   <Box >
//     <Icons iconFolder="sportRecLogo" type="letterS" className="icon"/>
//   </Box>
//   <Box sx={{display:'flex', flexDirection:'row' ,backgroundColor: '#06311a'}}>
//     <Icons iconFolder="sportRecLogo" type="letterP" className="icon"/>
//   </Box>
  
//     <Box sx={{backgroundColor: '#303106'}}>
//       <Icons iconFolder="sportRecLogo" type="letterO" className="icon" />
//     </Box>
   

//   <Box>
//     <Icons iconFolder="sportRecLogo" type="letterRBlack" className="icon"/>
//   </Box>
//   <Box>
//     <Icons iconFolder="sportRecLogo" type="letterT" className="icon"/>
//   </Box>
//   <Box>
//     <Icons iconFolder="sportRecLogo" type="letterRRed" className="icon"/>
//   </Box>
//   <Box>
//     <Icons iconFolder="sportRecLogo" type="letterE" className="icon"/>
//   </Box>
//   <Box>
//     <Icons iconFolder="sportRecLogo" type="letterC" className="icon"/>
//   </Box>

// </Box>

// </Stack>