import Logo from '../logo/Logo';
import './navBar.css';
import { useTranslation } from 'react-i18next';
import SingleNavBarElement from '../singleNavBarElement/SingleNavBarElement';
import { bag, trophy, people, network, house, bank } from '../constants/svgPathConstants';
import { Hidden } from '@mui/material';

const NavBar = () => {
  const { t } = useTranslation();


  

  const marketListKeys = [
    "marketAbout",
    "marketOurHistory",
    "marketHeadquarter",
    "marketBestCases"
  ];

  const feedListKeys = [
    "feedLatestNews",
    "feedMatchReports",
    "feedPlayerInterviews",
    "feedTeamUpdates",
    "feedInjuryUpdates",
    "feedTransferNews",
    "feedGameRecaps",
    "feedFanPosts",
    "feedOpinionArticles",
    "feedVideoHighlights"
  ];

  const profileListKeys = [
    "profileInfo1",
    "profileInfo2",
    "profileInfo3",
    "profileInfo4",
    "profileInfo5"
  ];

  const competitionsListKeys = [
    "competitionPremierLeague",
    "competitionWorldCup",
    "competitionUCL",
    "competitionNBAFinals",
    "competitionWimbledon",
    "competitionSuperBowl",
    "competitionTheMasters",
    "competitionTourDeFrance",
    "competitionF1",
    "competitionCWC"
  ];

  const organizationListKeys = [
    "organizationCInternational",
    "organizationNHL",
    "organizationICC",
    "organizationATP"
  ];
  
  const liveListKeys = [
    "liveMatch",
    "livePress",
    "liveStreaming",
    "livePlayer",
    "liveGame",
    "liveFan",
    "liveUpdates",
    "liveTeamStats",
    "liveInterviews",
    "liveEvent"
  ];
  
  

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Logo />
        <Hidden smDown>
          <div style={{ display: 'flex', gap: '16px' }}>
            <SingleNavBarElement svgPath={house} innerText={t('FeedLabel')} className='bag' OptionDropdownList={feedListKeys} />
            <SingleNavBarElement svgPath={bag} innerText={t("MarketplaceLabel")} className='bag' OptionDropdownList={marketListKeys} />
            <SingleNavBarElement svgPath={people} innerText={t("RatingLabel")} className='bag' OptionDropdownList={profileListKeys} />
            <SingleNavBarElement svgPath={trophy} innerText={t("Competition")} className='bag' OptionDropdownList={competitionsListKeys} />
            <SingleNavBarElement svgPath={bank} innerText={t("OrganizationsLabel")} className='bag' OptionDropdownList={organizationListKeys} />
            <SingleNavBarElement svgPath={network} innerText={t("LiveLabel")} className='bag' OptionDropdownList={liveListKeys} />
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





