import { FC, ReactElement } from "react";

import { iconTypes, logoTypes } from "../models/icons";
import { iconFolderTypes } from "../models/iconFolder";
import { Box } from "@mui/material";

import './icon.css';



interface IconProps {
  type: iconTypes | logoTypes;
  iconFolder: iconFolderTypes;
  className?: string;
  
}

const Icons: FC<IconProps> = ({ type, iconFolder ,className }): ReactElement => {
  return (

      <Box
      
        sx={{ backgroundImage: `url('/icons/${iconFolder}/${type}.svg')` }}
        className={ className}
       
      />
    
  );
};

export default Icons;

<Box
sx={{
  backgroundImage: `url('/icons/navigation/signal.svg')`, // Adjust the path for the public folder
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  width: '100px',  // Set appropriate width and height
  height: '100px',
}}
>
{/* Other content can go here */}
</Box>


