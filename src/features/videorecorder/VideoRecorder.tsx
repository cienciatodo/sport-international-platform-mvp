
import { Box, Typography, IconButton, Paper } from '@mui/material';
import './videoRecorder.css';
import elipse from '../../../public/images/Banner/letters/Ellipse 27137.svg';
import videoImage from '../../../public/icons/navigation/bama.png';
import message from '../../../public/icons/navigation/message-square-02.svg';
import eye from '../../../public/icons/navigation/eye.svg';
import profile1 from '../../../public/icons/navigation/faceProfile1.svg';
import play1 from '../../../public/icons/navigation/play1.svg';
import { useTranslation } from 'react-i18next';

const VideoRecorder = () => {

  const {t} =useTranslation();

  return (
    
      <Box className="video-recorder-container" sx={{ width: {sm:'765px', xs:'auto'} }} >
        <Box sx={{paddingLeft: '20px',}}>
      <Box className="video-recorder-header" >
        <Typography variant="body2" className="header-text">
          {t("SportsWrestling")}
        </Typography>
        <Box className="header-icon" style={{backgroundColor:'white'}} >
          <img src={elipse} alt="Ellipse" />
        </Box>
        <Typography variant="body2" className="header-text">
          {t("date1")}
        </Typography>
      </Box>
      <Typography variant="h6" className="video-recorder-title" style={{fontSize:'20px', fontWeight:'600', marginBottom:'24px'}}>
        {t("EventDescription")}
      </Typography>
      <Paper
        className="video-container"
        sx={{ backgroundImage: `url(${videoImage})`, width:{sm:'725px', xs:'95%'}, height:{xs:'200px', sm:'400px'}}}
      >
        <IconButton >
          <img src={play1} alt="Play" />
        </IconButton>
      </Paper>
      <Box className="stats-container">
        <Box className="stats-item">
          <img src={eye} alt="Eye" />
          <Typography variant="body2" className="stats-text">
            82 K
          </Typography>
        </Box>
        <Box className="stats-item">
          <img src={message} alt="Message"  />
          <Typography variant="body2" className="stats-text">
            1
          </Typography>
        </Box>
      </Box>
      <Box className="separator" />
      <Box className="comment-section" >
        <Paper elevation={0} className="comment-item" >
          <img src={profile1} alt="Profile" />
          <Box className="comment-content">
            <Typography variant="body2" className="comment-name">
              {t("ProfileName")}
            </Typography>
            <Typography variant="body2" className="comment-text">
              Наконец-то! Рад, что он вернулся в спорт
            </Typography>
            <Typography variant="body2" className="comment-time">
              {t("TimeAgo")} <span>{t( "ReplyText")}</span>
            </Typography>
          </Box>
        </Paper>
      </Box>
      </Box>
    </Box>

 
    
  );
}

export default VideoRecorder;
