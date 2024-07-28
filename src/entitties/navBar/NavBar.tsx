import React from 'react';
import Logo from '../logo/Logo';
import './navBar.css';
import { useTranslation } from 'react-i18next';
import SingleNavBarElement from '../singleNavBarElement/SingleNavBarElement';
import { bag, trophy, people, network, house, bank } from '../constants/svgPathConstants';
import { Hidden } from '@mui/material';

const NavBar = () => {
  const { t } = useTranslation();

  const marketList = ['About', 'Our History', 'Headquarter', 'Best Cases'];
  const profileList = ['information 1', 'information 2', 'information 3', 'information 4', 'information 5'];
  const competitionsList = [
    'Premier League',
    'FIFA World Cup',
    'UEFA Champions League',
    'NBA Finals',
    'Wimbledon',
    'Super Bowl',
    'The Masters',
    'Tour de France',
    'Formula 1 World Championship',
    'Cricket World Cup'
  ];

  const feedList = [
    'Latest News',
    'Match Reports',
    'Player Interviews',
    'Team Updates',
    'Injury Updates',
    'Transfer News',
    'Game Recaps',
    'Fan Posts',
    'Opinion Articles',
    'Video Highlights'
  ];

  const liveList = [
    'Live Match Scores',
    'Live Commentary',
    'Live Streaming',
    'Live Player Stats',
    'Live Game Highlights',
    'Live Fan Reactions',
    'Live Updates',
    'Live Team Stats',
    'Live Interviews',
    'Live Event Schedules'
  ];

  const organizationList = [
    'International Olympic Committee (IOC)',
    'NHL (National Hockey League)',
    'ICC (International Cricket Council)',
    'ATP (Association of Tennis Professionals)',
  ];

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Logo />
        <Hidden smDown>
          <div style={{ display: 'flex', gap: '16px' }}>
            <SingleNavBarElement svgPath={house} innerText={t('FeedLabel')} className='bag' OptionDropdownList={feedList} />
            <SingleNavBarElement svgPath={bag} innerText={t("MarketplaceLabel")} className='bag' OptionDropdownList={marketList} />
            <SingleNavBarElement svgPath={people} innerText={t("RatingLabel")} className='bag' OptionDropdownList={profileList} />
            <SingleNavBarElement svgPath={trophy} innerText={t("Competition")} className='bag' OptionDropdownList={competitionsList} />
            <SingleNavBarElement svgPath={bank} innerText={t("OrganizationsLabel")} className='bag' OptionDropdownList={organizationList} />
            <SingleNavBarElement svgPath={network} innerText={t("LiveLabel")} className='bag' OptionDropdownList={liveList} />
          </div>
        </Hidden>
      </div>
    </>
  );
}

export default NavBar;




// <Toolbar>
// <Box>
//  <Box sx={{display:'flex', flexDirection: 'row' , alignItems:'flexStart', backgroundColor:'blue'}}>

//    <Logo/>

  
//   <Stack direction={'row'}>
//      <Stack direction={'row'} sx={{display:'flex', flexDirection:'row', justifyContent:'space-around', width:'84px', height:'36px', padding:'8px' , gap: '10px', alignItems:'center'}}>
       
//        <Box >
//          <Icons  iconFolder='navigation' type='house' className='icon'/>       
//        </Box>
//        <Typography  className='navBarLetters'>Лента</Typography>
//      </Stack>

//      <Stack direction={'row'} sx={{display:'flex', flexDirection:'row', justifyContent:'space-around', width:'84px', height:'36px', padding:'8px' , gap: '10px', alignItems:'center'}}>
//        <Box >
//          <Icons  iconFolder='navigation' type='bag' className='icon'/>       
//        </Box>
//        <Typography className='navBarLetters'>Маркетплейс</Typography>
//      </Stack>
  
//   </Stack>
//  </Box>
// </Box>
// </Toolbar>





