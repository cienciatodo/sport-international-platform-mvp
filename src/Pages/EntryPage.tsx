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
import { Outlet } from 'react-router-dom';

const EntryPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <>
      <Header />
      <Outlet/>
     
      
    </>
  );
};

export default EntryPage;
