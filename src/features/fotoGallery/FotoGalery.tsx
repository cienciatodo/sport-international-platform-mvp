import React from 'react';
import elipse from '../../../public/images/Banner/letters/Ellipse 27137.svg';
import image1 from '../../../public/icons/navigation/fotoa.png';
import image2 from '../../../public/icons/navigation/fotob.png';
import image3 from '../../../public/icons/navigation/fotoc.png';
import eye from '../../../public/icons/navigation/eye.svg';
import image5 from '../../../public/icons/navigation/fotoe.png';
import image6 from '../../../public/icons/navigation/fotof.png';
import message from '../../../public/icons/navigation/message-square-02.svg';
import { useTranslation } from 'react-i18next';
import { Avatar, Box, Typography } from '@mui/material';
import { Navigate, useMatch, useNavigate } from 'react-router-dom';

const FotoGalery: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const match  = useMatch('/photos')

  const handleClickPhoto = (path: string): void => {
    console.log(13+16)
    console.log(match ? 'yes' : 'no')
    navigate(path);
  };



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
            {[image1, image2, image3, image1, image5, image6].map((image, index) => (
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
                  onClick={() => handleClickPhoto('photos')}
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
    </>
  );
};

export default FotoGalery;
