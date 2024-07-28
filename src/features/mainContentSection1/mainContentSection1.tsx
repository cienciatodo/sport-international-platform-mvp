import React from 'react';
import { Box, Typography, Button, Divider, Avatar, Grid } from '@mui/material';
import elipse from '../../../public/images/Banner/letters/Ellipse 27137.svg';
import boxer1 from '../../../public/images/boxer/image1.png';
import boxer2 from '../../../public/images/boxer/image2.png';
import boxer3 from '../../../public/images/boxer/image3.png';
import boxer4 from '../../../public/images/boxer/image4.png';
import boxer5 from '../../../public/images/boxer/image5.png';
import boxer6 from '../../../public/images/boxer/image6.png';
import eye from '../../../public/icons/navigation/eye.svg';
import message from '../../../public/icons/navigation/message-square-02.svg';
import profile1 from '../../../public/icons/navigation/faceProfile1.svg';
import profile2 from '../../../public/icons/navigation/profile3.svg';
import { useTranslation } from 'react-i18next';
import { red } from '@mui/material/colors';

const MainContentSection1 = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: '28px 20px', backgroundColor: '#FFFFFF', width: {sm:'725px', xs:'auto'}, borderRadius: '20px' }}>
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
            <Typography variant="body2" color="#9395B8" sx={{fontSize:{xs:'12px'}, fontWeight:'400', fontFamily:'Inter'}}>
              {t("SportWrestling")}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box component="img" src={elipse} sx={{ width: '3px', height: '3px' }} alt="Ellipse" />
            </Box>
            <Typography variant="body2" color="#9395B8" sx={{fontSize:{xs:'12px',fontWeight:'400', fontFamily:'Inter' }}}>
              {t("InterviewDate")}
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ marginBottom: '20px', fontFamily:'Inter', fontWeight:'600', fontSize:"20px",lineHeight:'26px', letterSpacing:"-0.7px" }}>
            {t("InterviewTitle")}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px', fontFamily:'Inter', fontWeight:'500', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#7B7EA5', backgroundColor:'red' }}>
            {t("InterviewContent")}
            <Button variant="text" sx={{ padding: 0, minWidth: 'auto' , color:'#353754', fontFamily:'Inter', fontWeight:'548', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px' }}>
              {t("ReadMore")}
            </Button>
          </Typography>
        </Box>
        <Grid container spacing={1} sx={{ marginBottom: '16px' , display:{xs:'flex'}, }}>
          {[boxer1, boxer2, boxer3, boxer4, boxer5, boxer6].map((boxer, index) => (
            <Grid item key={index}>
             <Box component="img" src={boxer} alt={`Boxer ${index + 1}`} sx={{ width: { xs: '97.33px', sm: 'auto' }, height: 'auto' }} />

            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component="img" src={eye} alt="Eye Icon" sx={{marginRight:'6px'}}/>
            <Typography variant="body1" color="#7B7EA5" sx={{fontWeight:'500', fontSize:'14px', lineHeight:'20px', fontFamily:'Inter', letterSpacing:'-0.5px'}}>
              {t("Views")}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component="img" src={message} alt="Message Icon" sx={{marginRight:'6px'}}/>
            <Typography variant="body1" color="#7B7EA5" sx={{fontWeight:'500', fontSize:'14px', lineHeight:'20px', fontFamily:'Inter', letterSpacing:'-0.5px'}}>
              4
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: '16px' }} />
        <Box>
          {[
            { img: profile1, name: t("VadimDavydov"), comment: t("Наш чемпион! Горжусь! "), time: t("TimeAgo") },
            { img: profile2, name: "Вадим Давыдов", comment: t("Похоже на шутку. В его возвращении нет ничего плохого, но лучше бои местного масштаба, уверен соперники найдутся, Кудряшов например или  Романов, на крайняк Тищенко."), time: t("TimeAgo") },
            { img: profile1, name: "Вадим Давыдов", comment: t("CommentText3"), time: t("TimeAgo") },
          ].map((profile, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
              <Avatar src={profile.img} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body1" color="#7B7EA5" sx={{ marginBottom: '4px', fontWeight:'500', fontFamily:'Inter', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px' }}>
                  {profile.name}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '8px', color:'#06082C', fontFamily:'Inter', fontSize:'14px', fontWeight:'548', lineHeight:'20px', letterSpacing:'-0.5px'  }}>
                  {profile.comment}
                </Typography>
                <Typography variant="body2" color="#9395B8" sx={{fontFamily:'Inter', fontSize:'14px', fontWeight:'500', lineHeight:'20px', letterSpacing:'-0.5px'}}>
             
                  {profile.time} <Typography component="span" color="primary" sx={{marginLeft:'6px'}}>{t("Reply")}</Typography>
                  
                </Typography>

               
               
              </Box>
            

              

            
            </Box>
            
          ))}
           

        </Box>
        <Divider sx={{ marginBottom: '16px' }} />
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '24px' }}>
          <Avatar src={profile1} />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body1" color="#7B7EA5" sx={{ marginBottom: '4px', fontWeight:'500', fontFamily:'Inter', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px' }}> 
              Вадим Давыдов
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px',  color:'#06082C', fontFamily:'Inter', fontSize:'14px', fontWeight:'548', lineHeight:'20px', letterSpacing:'-0.5px' }}>
              Наконец-то! Рад, что он вернулся в спорт
            </Typography>
            <Typography variant="body2" color="#9395B8" sx={{fontFamily:'Inter', fontSize:'14px', fontWeight:'500', lineHeight:'20px', letterSpacing:'-0.5px'}}>
              {t("CommentTime")}<Typography component="span" color="primary" sx={{marginLeft:'6px'}}>{t("Reply")}</Typography>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent:'flex-start', paddingBottom: '28px' }}>
          <Button variant="contained" sx={{color:'#06082C', fontFamily:'Inter', fontWeight:'548',fontSize:'14px',letterSpacing:'-0.5px',lineHeight:'20px',backgroundColor:'#EEF0F7',  padding: '10px 24px' ,width:{xs:'100%', sm:'auto'}, borderRadius:'10px', textAlign:'center', textTransform:'none' }} disableElevation>
          
          {t('SeeAllComments')}
          </Button>
          
        </Box>
      </Box>
    </Box>
  );
};

export default MainContentSection1;
