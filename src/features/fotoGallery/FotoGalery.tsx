import { useState } from 'react';
import elipse from '../../../public/images/Banner/letters/Ellipse 27137.svg';
import image1 from '../../../public/icons/navigation/fotoa.png';
import image2 from '../../../public/icons/navigation/fotob.png';
import image3 from '../../../public/icons/navigation/fotoc.png';
import eye from '../../../public/icons/navigation/eye.svg';
import image5 from '../../../public/icons/navigation/fotoe.png';
import image6 from '../../../public/icons/navigation/fotof.png';
import message from '../../../public/icons/navigation/message-square-02.svg';
import DialogBoxPhoto from '../../entitties/dialogBoxFoto/DialogBoxPhoto';
import left from '../../../public/icons/navigation/leftbutton.svg';
import rigth from '../../../public/icons/navigation/rigthButton.svg';
import run from '../../../public/icons/navigation/great1.png';

import xClose from '../../../public/icons/navigation/x-close.svg'

const FotoGalery = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div style={{ width: '765px', backgroundColor: '#FFFFFF', borderRadius:'20px' }}>
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '6px', backgroundColor: '#FFFFFF', marginBottom: '12px' }}>
            <span style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '12px', color: '#9395B8' }}>
              Велоспорт
            </span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor:'white' }}>
              <img src={elipse} style={{ width: '3px', height: '3px' }} />
            </div>
            <span style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '12px', color: '#9395B8' }}>
              2 февраля, 2024 в 23:09
            </span>
          </div>
          <span style={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '20px', lineHeight: '26px', letterSpacing: '-0.7px', }}>
            Этапы Тура Альп-2024
          </span>
          <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.5px' }}>
            Фото с соревнований
          </span>
          <div style={{ width: '725px', gap: '12px', backgroundColor: '#FFFFFF', display: 'flex', flexWrap: 'wrap', marginBottom: '16px', marginTop:'20px' }}>
            <img onClick={openDialog} src={image1} style={{ flex: '1 1 30%', maxWidth: 'calc(33.33% - 12px)' , cursor:'pointer'}} />
            <img onClick={openDialog} src={image2} style={{ flex: '1 1 30%', maxWidth: 'calc(33.33% - 12px)' , cursor:'pointer'}} />
            <img src={image3} style={{ flex: '1 1 30%', maxWidth: 'calc(33.33% - 12px)' }} />
            <img src={image1} style={{ flex: '1 1 30%', maxWidth: 'calc(33.33% - 12px)' }} />
            <img src={image5} style={{ flex: '1 1 30%', maxWidth: 'calc(33.33% - 12px)' }} />
            <img src={image6} style={{ flex: '1 1 30%', maxWidth: 'calc(33.33% - 12px)' }} />
          </div>

          <div style={{ display: 'flex', backgroundColor: '#FFFFFF', gap: '16px', height: '37px', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={eye} />
              <span style={{ fontFamily: 'Inter', fontWeight: '500', fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.5px', color: '#7B7EA5' }}>
                4.1 K
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={message} />
              <span style={{ fontFamily: 'Inter', fontWeight: '500', fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.5px', color: '#7B7EA5', marginLeft: '6px' }}>
                0
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="dialogBox" style={{backgroundColor:'khaki', position:'relative', zIndex:'600'}}></div>
      {isDialogOpen && (
        <DialogBoxPhoto isOpen={isDialogOpen}>
          <div style={{ width: '878px', height: '614px',  position:'relative', zIndex:'100' }}>
          
            
         
             
           
            <img onClick={closeDialog} src={xClose}  style={{width:'20px', height:'20px', cursor:'pointer', marginLeft:'590px'}}/>

            
           
            
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'16px', justifyContent:'center'}} >
              <div >
                <img onClick={closeDialog} src={left} style={{cursor:'pointer'}} />
              </div>
              
              <div>
                <img src={run} style={{width:'500px', height:'450px', borderRadius:'10px'}} />
              </div>
              <div  style={{cursor:'pointer'}}>
                <img src={rigth} style={{cursor:'pointer'}}/>
              </div>
            </div>
          </div>
        </DialogBoxPhoto>
      )}
    </>
  );
};

export default FotoGalery;




