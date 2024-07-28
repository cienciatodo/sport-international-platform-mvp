import { FC, useRef, useState } from "react";
import './singleNavBarElement.css';
import { Box, MenuItem, Select } from "@mui/material";

interface PropSingleNavBarElement {
  innerText?: string;
  altText?: string;
  svgPath: string;
  svgWidth?: number;
  svgHeight?: number;
  svgStrokeColor?: string;
  svgStrokeWidth?: number; // Changed to number
  svgFillColor?: string; // Added for fill color
  className?: string;
  OptionDropdownList?:string[]
}

const SingleNavBarElement: FC<PropSingleNavBarElement> = ({ 
  svgPath,
  innerText, 
  svgWidth = 20, 
  svgHeight = 18, 
  svgStrokeColor = "#9395B8", 
  svgStrokeWidth = 1.5, 
  svgFillColor = "none", // Default to none if not provided
  className ,
  OptionDropdownList
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] =useState<boolean>(false)

  const handleClick = () => {
    setIsOpen(true);
    buttonRef.current?.focus()
    console.log('golo')
  }

  return (
    <Box>

  
    <button 
     onClick={handleClick}
      ref={buttonRef}
      className={`button ${className}`} // Apply the button class
      tabIndex={0} // Make button focusable
    >
      <div className='click' style={{ display: 'flex' }}>
        <svg
          width={svgWidth} 
          height={svgHeight} 
          viewBox="0 0 16 18" 
          fill={svgFillColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="paulo"
            d={svgPath} 
            stroke={svgStrokeColor} 
            strokeWidth={svgStrokeWidth} // Correct attribute
            strokeLinecap="round" // Correct attribute
            strokeLinejoin="round" // Correct attribute
          />
        </svg>
      </div>
      <span className='navLetters'>{innerText}</span>
    </button>




    <Select value={'jogo'} open={isOpen}  onClose={() => setIsOpen(false)} displayEmpty  inputProps={{ 'aria-label': 'Without label' }}
        sx={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
          marginLeft:'46px',
          marginTop:'-60px',
          
       

        }}
        MenuProps={{
          PaperProps: {
            style: {
              boxShadow: 'none',
            },
          },
        }}>
        {OptionDropdownList?.map((value) => {
          return <MenuItem > 
          <Box display="flex" alignItems="center">
          <span className="navLetters">{value}</span>
         </Box>
         </MenuItem>
        })}
    </Select>

    </Box>
  );
}

export default SingleNavBarElement;
