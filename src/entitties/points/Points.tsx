import React from 'react';
import elipseGray from '../../../public/images/Banner/letters/Ellipse 27137.svg';
import elipseblack from '../../../public/icons/navigation/EllipseBlack.svg'

interface PointsProps {
  number: number;
  slide: number
}

const Points: React.FC<PointsProps> = ({ number, slide }) => {
  if (number !== slide ){
    return <img src={elipseGray} style={{ width: '6px', height: '6px' }} alt="ellipse" />;

  } else if(number === slide || number === -1){
    return <img src={elipseblack} style={{ width: '6px', height: '6px' }} alt="ellipse" />;

  }

 
};

export default Points;
