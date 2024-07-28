
import './mainContentSection2.css'; // Import the CSS file
import elispse from '../../../public/images/Banner/letters/Ellipse 27137.svg';
import champions from '../../../public/icons/navigation/champions.svg';
import story1 from '../../../public/icons/navigation/story1.png';
import story2 from '../../../public/icons/navigation/story2.png';
import story3 from '../../../public/icons/navigation/story3.png';
import story4 from '../../../public/icons/navigation/story4.png';

import vector from '../../../public/icons/navigation/Vector.svg';
import { useRef, useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography } from '@mui/material';

const MainContentSection2 = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  const {t } = useTranslation()

  return (
    <Box className="main-container"  >
      <Box className="content-wrapper" >
        <Box className="header" >
          <Typography className="header-text" sx={{fontSize:'12px', color:'#9395B8'}}>{t("SportWrestling")}</Typography>
          <Box className="header-icon" style={{backgroundColor:'#FFFFFF'}}>
            <img src={elispse} alt="Ellipse" />
          </Box>
          <Typography className="header-text" sx={{fontSize:'12px', color:'#9395B8'}}>{t("InterviewDate")}</Typography>
        </Box>
        <Box className="title">
          {t("CompetitionResultsgeneral")}
        </Box>
        <Box className="champions-img" sx={{}}>
          <Box component="img" src={champions} alt="Champions" sx={{width:{sm:'600px', xs: '303px'}, marginLeft:{xs:'-85px', sm:'0px'}, marginTop:{xs:'-30px'}}}/>
        </Box>
        <Typography className="moments-title" sx={{fontFamily:'Inter', fontSize:'14px', fontWeight:'500',lineHeight:'20px', letterSpacing:'-0.5px',backgroundColor:'white' }}>{t("BestMoments")}</Typography>
        <div
          ref={containerRef}
          onMouseDown={mouseGrab}
          onMouseUp={mouseUp}
          onMouseLeave={mouseUp}
          onMouseMove={handleMouseMove}
          className="scroll-container"
        >
          <Box className="scroll-content">
            <div
              draggable="false"
              onDragStart={preventDragHandler}
              className="story"
              style={{ backgroundImage: `url(${story1})` }}
            >
              <div className="story-info">
                <img src={vector} alt="Vector" />
                <Typography className="story-info-text">{t("Viewsgeneral")}</Typography>
              </div>
              <Typography className="story-duration">04:15</Typography>
            </div>
          </Box>

          <Box className="scroll-content">
            <Box
              draggable="false"
              onDragStart={preventDragHandler}
              className="story"
              style={{ backgroundImage: `url(${story2})` }}
            >
              <Box className="story-info">
                <img src={vector} alt="Vector" />
                <Typography className="story-info-text">392</Typography>
              </Box>
              <Typography className="story-duration">03:10</Typography>
            </Box>
          </Box>

          <div className="scroll-content">
            <Box
              draggable="false"
              onDragStart={preventDragHandler}
              className="story"
              style={{ backgroundImage: `url(${story3})` }}
            >
              <Box className="story-info">
                <img src={vector} alt="Vector" />
                <Typography className="story-info-text">72.8 тыс..</Typography>
              </Box>
              <Typography className="story-duration">02:01</Typography>
            </Box>
          </div>

          <Box className="scroll-content">
            <Box
              draggable="false"
              onDragStart={preventDragHandler}
              className="story"
              style={{ backgroundImage: `url(${story4})` }}
            >
              <Box className="story-info">
                <img src={vector} alt="Vector" />
                <Typography className="story-info-text">5</Typography>
              </Box>
              <Typography className="story-duration">00:56</Typography>
            </Box>
          </Box>

          <Box className="scroll-content">
            <Box
              draggable="false"
              onDragStart={preventDragHandler}
              className="story"
              style={{ backgroundImage: `url(${story1})` }}
            >
              <div className="story-info">
                <img src={vector} alt="Vector" />
                <Typography className="story-info-text">4.1 тыс.</Typography>
              </div>
              <Typography className="story-duration">04:15</Typography>
            </Box>
          </Box>

          <div className="scroll-content">
            <div
              draggable="false"
              onDragStart={preventDragHandler}
              className="story"
              style={{ backgroundImage: `url(${story2})` }}
            >
              <div className="story-info">
                <img src={vector} alt="Vector" />
                <Typography className="story-info-text">4.1 тыс.</Typography>
              </div>
              <Typography className="story-duration">04:15</Typography>
            </div>
          </div>

          <div className="scroll-content">
            <div
              draggable="false"
              onDragStart={preventDragHandler}
              className="story"
              style={{ backgroundImage: `url(${story3})` }}
            >
              <div className="story-info">
                <img src={vector} alt="Vector" />
                <Typography className="story-info-text">{t("Viewsgeneral")}</Typography>
              </div>
              <Typography className="story-duration">04:15</Typography>
            </div>
          </div>

          <div className="scroll-content">
            <div
              draggable="false"
              onDragStart={preventDragHandler}
              className="story"
              style={{ backgroundImage: `url(${story4})` }}
            >
              <div className="story-info">
                <img src={vector} alt="Vector" />
                <Typography className="story-info-text">{t("Viewsgeneral")}.</Typography>
              </div>
              <Typography className="story-duration">04:15</Typography>
            </div>
          </div>

          <div className="scroll-content">
            <div
              draggable="false"
              onDragStart={preventDragHandler}
              className="story"
              style={{ backgroundImage: `url(${story1})` }}
            >
              <div className="story-info">
                <img src={vector} alt="Vector" />
                <Typography className="story-info-text">{t("Viewsgeneral")}</Typography>
              </div>
              <Typography className="story-duration">04:15</Typography>
            </div>
          </div>

          <div className="scroll-content">
            <div
              draggable="false"
              onDragStart={preventDragHandler}
              className="story"
              style={{ backgroundImage: `url(${story2})` }}
            >
              <div className="story-info">
                <img src={vector} alt="Vector" />
                <Typography className="story-info-text">{t("Viewsgeneral")}</Typography>
              </div>
              <Typography className="story-duration">04:15</Typography>
            </div>
          </div>

          <div className="scroll-content">
            <div
              draggable="false"
              onDragStart={preventDragHandler}
              className="story"
              style={{ backgroundImage: `url(${story3})` }}
            >
              <div className="story-info">
                <img src={vector} alt="Vector" />
                <Typography className="story-info-text">{t("Viewsgeneral")}</Typography>
              </div>
              <Typography className="story-duration">04:15</Typography>
            </div>
          </div>

          <div className="scroll-content">
            <div
              draggable="false"
              onDragStart={preventDragHandler}
              className="story"
              style={{ backgroundImage: `url(${story4})` }}
            >
              <div className="story-info">
                <img src={vector} alt="Vector" />
                <Typography className="story-info-text">{t("Viewsgeneral")}</Typography>
              </div>
              <Typography className="story-duration">04:15</Typography>
            </div>
          </div>

          <div className="scroll-content" >
            <div
              draggable="false"
              onDragStart={preventDragHandler}
              className="story"
              style={{ backgroundImage: `url(${story1})` }}
            >
              <div className="story-info">
                <img src={vector} alt="Vector" />
                <Typography className="story-info-text">{t("Viewsgeneral")}</Typography>
              </div>
              <Typography className="story-duration" sx={{marginRight:'60px'}}>04:15</Typography>
            </div>
          </div>



        </div>
        <Button sx={{textTransform:'none',borderRadius:'10px',cursor:'pointer', backgroundColor:'#EEF0F7', color:'#06082C', fontFamily:'Inter', width:{xs:'100%', sm:'auto'}, fontWeight:'548', lineHeight:'20px', letterSpacing:'-0.5px', }} className="view-all-button" >{t("ViewAll")}</Button>
      </Box>
    </Box>
  );
};

export default MainContentSection2;
