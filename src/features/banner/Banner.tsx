import './banner.css'

import letterBanner from '../../../public/images/Banner/letters/Group.png'

import personLeft from '../../../public/images/Banner/faceImages/leftImage.png'

import personRight from '../../../public/images/Banner/faceImages/rightImage.png'

import signal from '../../../public/icons/navigation/signal.svg'
import { pink } from '@mui/material/colors'
import turkmenistanFlag from '../../../public/icons/navigation/flagturkmenistan.svg'
import russianFlag from '../../../public/icons/navigation/russianFlag.svg'
import elipseGray from '../../../public/images/Banner/letters/Ellipse 27137.svg'
import { useRef, useState, MouseEvent, useEffect } from 'react'
import Points from '../../entitties/points/Points'

const Banner = () => {

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [slide, setSlide] = useState<number>(-1)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [controller, setControleer] = useState<boolean>(false)





  useEffect(() => {
    // Timer to handle the slide transition

    
    const intervalId = setInterval(() => {
      setSlide((prev) => {
        if(prev === -1 ) return prev + 2
        if (prev >= 4 ) return 0; // Adjust this based on the actual number of slides
        return prev + 1;
      });
    }, 7000); // First slide stays for 5 seconds, others for 4 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
console.log('isto e o slide:', slide)



  useEffect(() => {
    
      if(slide !== -1){
        if (containerRef.current) {
          const scrollAmount = 1160;
          const maxScrollLeft = 4640; // Adjust based on the actual maximum scroll
    
          if (containerRef.current.scrollLeft < maxScrollLeft) {
            setControleer(false);
            if (!controller) {
              containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
          } else if (containerRef.current.scrollLeft >= maxScrollLeft) {
            setControleer(true);
            if (controller  && containerRef.current.scrollLeft !== 0) {
              console.log(containerRef.current.scrollLeft, 'jorge')
              containerRef.current.scrollBy({ left: -4640, behavior: 'smooth' });
            }
          }
        }

      }
  

    
    
  }, [slide, controller]);

  const mouseGrab = (event: MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(event.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const mouseUp = () => {
    if (containerRef.current) {
      setIsDragging(false);
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const x = event.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    const newScrollLeft = scrollLeft - walk;

    // Boundary checks
    if (newScrollLeft < 0) {
      containerRef.current.scrollLeft = 0;
    } else if (newScrollLeft > containerRef.current.scrollWidth - containerRef.current.clientWidth) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    } else {
      containerRef.current.scrollLeft = newScrollLeft;
    }
  };

  const preventDragHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };


  


  return(
    <>
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>

      <div  ref={containerRef}
        onMouseDown={mouseGrab}
        onMouseUp={mouseUp}
        onMouseLeave={mouseUp}
        onMouseMove={handleMouseMove}
        style={{
          display: 'flex',
          width: '1160px',
          overflow: 'hidden',
          cursor: 'grab',
          backgroundColor:'#f5f1f7'
        }}>
        <div style={{ display: 'flex', width: '2600px'}}>





        <div draggable="false" onDragStart={preventDragHandler}  className="banner">
   
   <div className='letterBanner'>
     <img src={letterBanner}/>
   </div>
   <div style={{display: 'flex' , flexDirection:'row', position: 'relative', top:'-204px', justifyContent:'space-between'}}>
   <div>
     <img src={personLeft}/>
   </div>
   
   <div style={{position:'relative' , width: '520px', height:'250px', gap:'16px', display:'flex',flexDirection:'column', marginTop:'35px'}}>

     <div style={{width:'auto', display:'flex', justifyContent:"center"}}>
       <button style={{cursor:'pointer',display:'flex',justifyContent:'center',backgroundColor:'#FF2410', gap:'8px', paddingTop:'8px', paddingLeft:'12px', paddingBottom:'8px' ,paddingRight:'12px', borderRadius:'11px', width:'86px', height:'36px', border:'none',alignItems:'center'}}>
           <img src={signal}/>
           <span style={{font:'Inter', fontWeight:'700', fontSize:'16px', lineHeight:'16px', color:'#FFFFFF'}}>Live</span>
         </button>
     </div>
  
       

  
     
     <div style={{width: 'auto', gap:'16px', display:'flex', justifyContent:'center', alignItems:'center', height:'26px'}}>
       <div style={{ display:'flex', gap:'8px'}}>
         <img src={turkmenistanFlag}/>
         <span style={{fontFamily:'Inter', fontWeight: '600',color:'#FFFFFF', letterSpacing:'-0.7px',lineHeight: '26px',fontSize:'20px', textAlign:'center' }}>
         Матвеев
         
         </span>
         
       </div>
       <span style={{fontFamily:'Inter', fontWeight:'600',fontSize:'20px', lineHeight:'26px', letterSpacing:'-0.7px', textAlign:'center',color:'#9395B8'}}>
         vs
       </span>
       <div style={{ height:'26px' ,gap:'8px', display:'flex', alignItems:'center'}}>
         
         <span style={{fontFamily:'Inter', fontWeight: '600', color:'#FFFFFF' , textAlign:'center', letterSpacing:'-0.7px',lineHeight: '26px', fontSize:'20px'}}>
         Романов

         </span>
         <img src={russianFlag} style={{width:'33.23px', height:'24px'}}/>
        
       </div>
       
     </div>
     <div style={{display:'flex' , justifyContent:'center'}}>
      <span style={{fontFamily:'Inter', fontWeight:'600', fontSize:'40px', lineHeight:'48.1px', letterSpacing:'-0.4px', textAlign:'center', color:'#FFFFFF'}}>
       Финальный матч - вольная борьба
      </span>
     </div>
     <div style={{display:'flex', justifyContent:'center'}}>

     <button style={{cursor:'pointer',backgroundColor:'#EEF0F7', border:'none', paddingTop:'10px', paddingLeft:'24px', paddingBottom:'10px', paddingRight:'24px', gap:'4px', width:'198px', height:'40px', borderRadius:'10px', fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px'}}>Смотрет транслацию</button>

     </div>

    
   </div>
   <div >
     <img src={personRight}/>
   </div>     
   </div>
  
   
 </div>






























 <div draggable="false" onDragStart={preventDragHandler}  className="banner" style={{display:'flex', justifyContent:'center', alignItems:'center', }}>
   
 <span style={{width:'1160px', display:'flex' , justifyContent:'center', alignItems:'center', color:'#FFFFFF', fontFamily:'Inter', fontWeight:'600', fontSize:'40px', }}>
    Your advertisment could be here 
 </span>
   
 </div>




















 <div draggable="false" onDragStart={preventDragHandler}  className="banner" style={{display:'flex', justifyContent:'center', alignItems:'center', }}>
   
 <span style={{width:'1160px', display:'flex' , justifyContent:'center', alignItems:'center', color:'#FFFFFF', fontFamily:'Inter', fontWeight:'600', fontSize:'40px', }}>
    Your advertisment could be here 
 </span>
   
 </div>




 <div draggable="false" onDragStart={preventDragHandler}  className="banner" style={{display:'flex', justifyContent:'center', alignItems:'center', }}>
   
   <span style={{width:'1160px', display:'flex' , justifyContent:'center', alignItems:'center', color:'#FFFFFF', fontFamily:'Inter', fontWeight:'600', fontSize:'40px', }}>
      Your advertisment could be here 
   </span>
     
   </div>





   <div draggable="false" onDragStart={preventDragHandler}  className="banner" style={{display:'flex', justifyContent:'center', alignItems:'center', }}>
   
   <span style={{width:'1160px', display:'flex' , justifyContent:'center', alignItems:'center', color:'#FFFFFF', fontFamily:'Inter', fontWeight:'600', fontSize:'40px', }}>
      Your advertisment could be here 
   </span>
     
   </div>
  
  








































































        </div>
      </div>

    <div style={{width:'1160', backgroundColor:'#f5f1f7', height:'26px', display:'flex', justifyContent:'center'}}>
      <div style={{width:'50px', height:'14px', padding:'4px', gap:'3px', backgroundColor:'#f5f1f7', display:'flex', justifyContent:'space-between', alignItems:'center', marginLeft:'60px'}}>
     
        {slide === 0 ?  <Points number={0} slide={slide}/> : null}
        
        <Points number={-1|| 0} slide={slide}/>
       
        <Points number={1} slide={slide}/>
        <Points number={2} slide={slide}/>
        <Points number={3} slide={slide}/>
        <Points number={4} slide={slide}/>

      </div>
    </div>
   

    </div>
   


    </>
  )
}

export default Banner