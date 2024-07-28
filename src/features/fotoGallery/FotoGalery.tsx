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
import { useTranslation } from 'react-i18next';
import { Avatar, Box, IconButton, Typography } from '@mui/material';

const FotoGalery = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  
  const { t } = useTranslation();

  return (
    <>
      <Box sx={{ width: { sm: '765px', xs: 'auto' }, backgroundColor: '#ff0000', borderRadius: '20px' }}>
        <Box sx={{ padding: '20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '6px', backgroundColor: '#FFFFFF', marginBottom: '12px' }}>
            <Typography sx={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '12px', color: '#9395B8' }}>
              {t("Cycling")}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
              <img src={elipse} style={{ width: '3px', height: '3px' }} />
            </Box>
            <Typography sx={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '12px', color: '#9395B8' }}>
              {t("EventDategeneral")}
            </Typography>
          </Box>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '20px', lineHeight: '26px', letterSpacing: '-0.7px' }}>
            {t("TourStages")}
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.5px' }}>
            {t("CompetitionPhotos")}
          </Typography>
          <Box
            sx={{
              width: '100%',
              gap: '12px',
              backgroundColor: '#15ff00',
              display: 'flex',
              flexWrap: 'wrap',
              marginBottom: '16px',
              marginTop: '20px',
            }}
          >
            {[image1, image2, image3, image1, image5, image6,].map((image, index) => (
              <Box
                key={index}
                sx={{
                  flex: '1 1 30%',
                  maxWidth: 'calc(33.33% - 12px)',
                  padding: 0,
                  cursor: 'pointer',
                  '@media (max-width:600px)': {
                    width: '99.33px',
                    height: '99.33px',
                    maxWidth: 'none',
                    flex: 'none',
                  },
                }}
              >
                <Avatar
                  variant="rounded"
                  src={image}
                  sx={{ width: '100%', height: '100%' }}
                  onClick={openDialog}
                />
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', backgroundColor: '#FFFFFF', gap: '16px', height: '37px', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={eye} />
              <Typography sx={{ fontFamily: 'Inter', fontWeight: '500', fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.5px', color: '#7B7EA5', marginLeft:'6px' }}>
                4.1 K
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={message} />
              <Typography sx={{ fontFamily: 'Inter', fontWeight: '500', fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.5px', color: '#7B7EA5', marginLeft: '6px' }}>
                0
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box id="dialogBox" sx={{ backgroundColor: 'khaki', position: 'relative', zIndex: '600' }}></Box>
      {isDialogOpen && (
        <DialogBoxPhoto isOpen={isDialogOpen}>
          <Box sx={{ width: '878px', height: '614px', position: 'relative', zIndex: '100' }}>
            <img onClick={closeDialog} src={xClose} style={{ width: '20px', height: '20px', cursor: 'pointer', marginLeft: '590px' }} />
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', justifyContent: 'center' }}>
              <Box>
                <img onClick={closeDialog} src={left} style={{ cursor: 'pointer' }} />
              </Box>
              <Box>
                <img src={run} style={{ width: '500px', height: '450px', borderRadius: '10px' }} />
              </Box>
              <Box sx={{ cursor: 'pointer' }}>
                <img src={rigth} style={{ cursor: 'pointer' }} />
              </Box>
            </Box>
          </Box>
        </DialogBoxPhoto>
      )}
    </>
  );
};

export default FotoGalery;
