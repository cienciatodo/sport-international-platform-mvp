
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
    <div className="main-container">
      <div className="content-wrapper">
        <div className="header">
          <span className="header-text">{t("SportWrestling")}</span>
          <div className="header-icon" style={{backgroundColor:'#FFFFFF'}}>
            <img src={elispse} alt="Ellipse" />
          </div>
          <span className="header-text">{t("InterviewDate")}</span>
        </div>
        <div className="title">
          {t("CompetitionResultsgeneral")}
        </div>
        <div className="champions-img">
          <img src={champions} alt="Champions" />
        </div>
        <span className="moments-title">{t("BestMoments")}</span>
        <div
          ref={containerRef}
          onMouseDown={mouseGrab}
          onMouseUp={mouseUp}
          onMouseLeave={mouseUp}
          onMouseMove={handleMouseMove}
          className="scroll-container"
        >
          <div className="scroll-content">
            <div
              draggable="false"
              onDragStart={preventDragHandler}
              className="story"
              style={{ backgroundImage: `url(${story1})` }}
            >
              <div className="story-info">
                <img src={vector} alt="Vector" />
                <span className="story-info-text">{t("Viewsgeneral")}</span>
              </div>
              <span className="story-duration">04:15</span>
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
                <span className="story-info-text">392</span>
              </div>
              <span className="story-duration">03:10</span>
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
                <span className="story-info-text">72.8 тыс..</span>
              </div>
              <span className="story-duration">02:01</span>
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
                <span className="story-info-text">5</span>
              </div>
              <span className="story-duration">00:56</span>
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
                <span className="story-info-text">4.1 тыс.</span>
              </div>
              <span className="story-duration">04:15</span>
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
                <span className="story-info-text">4.1 тыс.</span>
              </div>
              <span className="story-duration">04:15</span>
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
                <span className="story-info-text">{t("Viewsgeneral")}</span>
              </div>
              <span className="story-duration">04:15</span>
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
                <span className="story-info-text">{t("Viewsgeneral")}.</span>
              </div>
              <span className="story-duration">04:15</span>
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
                <span className="story-info-text">{t("Viewsgeneral")}</span>
              </div>
              <span className="story-duration">04:15</span>
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
                <span className="story-info-text">{t("Viewsgeneral")}</span>
              </div>
              <span className="story-duration">04:15</span>
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
                <span className="story-info-text">{t("Viewsgeneral")}</span>
              </div>
              <span className="story-duration">04:15</span>
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
                <span className="story-info-text">{t("Viewsgeneral")}</span>
              </div>
              <span className="story-duration">04:15</span>
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
                <span className="story-info-text">{t("Viewsgeneral")}</span>
              </div>
              <span className="story-duration">04:15</span>
            </div>
          </div>



        </div>
        <button style={{cursor:'pointer'}} className="view-all-button">{t("ViewAll")}</button>
      </div>
    </div>
  );
};

export default MainContentSection2;
