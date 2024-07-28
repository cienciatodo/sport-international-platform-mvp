import React from 'react';
import Header from "../features/header/Header";
import Banner from "../features/banner/Banner";
import './entryPage.css';
import MainContentSection1 from "../features/mainContentSection1/mainContentSection1";
import MainContentSection2 from "../features/mainContentSection2/MainContentSection2";
import BannerAdvertisment from "../features/bannerAdvertisment/BannerAdvertisment";
import Notification from "../features/notification/Notification";
import Accounts from "../features/accounts/Accounts";
import FotoGalery from "../features/fotoGallery/FotoGalery";
import VideoRecorder from "../features/videorecorder/VideoRecorder";
import bicicleta from '../../public/icons/navigation/bicicleta.png';
import FunFacts from "../features/funFacts/FunFacts";
import LastNews from "../features/lastNews/LastNews";
import RightSectionOne from "../features/rigthSectionOne/RightSectionOne";
import { Box, useTheme, useMediaQuery, Avatar } from '@mui/material';

const EntryPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <>
      <Header />
      <Box
        sx={{
          height: '1000vh',
          backgroundColor: '#f5f1f7',
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          marginTop:{sx: '1020px'}
        }}
      >
        <Box className="mainPage" sx={{ width: { xs: 'auto', sm: 'auto' } }}>
          <Banner />
          {!isSmallScreen && <MainContentSection1/> }
          {!isSmallScreen && <MainContentSection2/> }
          {!isSmallScreen && <BannerAdvertisment/> }
          {!isSmallScreen && <Notification/> }
          {!isSmallScreen && <Accounts/>}
          {!isSmallScreen && <FotoGalery/> }
          {!isSmallScreen && <VideoRecorder/>}

        </Box>
        

       
        <Box
          sx={{
            position: { xs: 'static', sm: 'relative' },
            top: { sm: '457px', xs: '0px' },
            left: { sm: '-231px' },
            width: { xs: '100%', sm: 'auto' },
            marginTop:{xs:'80px', sm:'0px'},
          
            backgroundColor:{sm:'red', xs:'purple'},
            display:{xs:'flex'},
            flexDirection:{xs:'column'},
            
          
     
            
          

          }}
        >
          <Box sx={{
            paddingLeft:{xs:'20px', sm:'0px'},
            paddingRight:{xs:'20px', sm:'0px'}
          }}>

         
          <RightSectionOne />
          {isSmallScreen && <MainContentSection1/>}
       
          <Box component="img" src={bicicleta} alt={`ads}`} sx={{width:{xs:'350px', sm:'auto'},marginBottom:'20px' }} />
          <FunFacts />
          <LastNews />
          {isSmallScreen && <MainContentSection2/>}
          {isSmallScreen && <BannerAdvertisment/>}
          {isSmallScreen && <Notification/>}
          {isSmallScreen && <Accounts/>}
          {isSmallScreen && <FotoGalery/>}
          {isSmallScreen && <VideoRecorder/>}

          </Box>
        </Box>
        </Box>
      
    </>
  );
};

export default EntryPage;
