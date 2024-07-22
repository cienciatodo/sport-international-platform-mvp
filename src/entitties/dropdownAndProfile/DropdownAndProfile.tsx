import React, { useState } from 'react';
import { Select, MenuItem, Box, Avatar, IconButton } from '@mui/material';
import russianFlag from '../../../public/icons/navigation/russianFlag.svg';
import lettersRU from '../../../public/icons/navigation/RU.svg';
import dropdownIcon from '../../../public/icons/navigation/dropdown.svg';
import personIcon from '../../../public/icons/navigation/person.svg';
import usaFlag from '../../../public/icons/navigation/russianFlag.svg';
import lettersEN from '../../../public/icons/navigation/RU.svg';
import spanishFlag from '../../../public/icons/navigation/russianFlag.svg';
import lettersES from '../../../public/icons/navigation/RU.svg';

const DropdownAndProfile = () => {
  const [language, setLanguage] = useState('RU');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setLanguage(event.target.value);
    setOpen(false); // Close dropdown on selection
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" width="133px" height="40px" bgcolor="white">
      <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }} onClick={handleOpen}>
        <Avatar src={language === 'RU' ? russianFlag : language === 'EN' ? usaFlag : spanishFlag} sx={{ width: 20, height: 16, mr: 1 }} />
        <img src={language === 'RU' ? lettersRU : language === 'EN' ? lettersEN : lettersES} alt="Language" style={{ width: 19, height: 20, marginRight: '5px' }} />
        <IconButton>
          <img src={dropdownIcon} alt="Dropdown Icon" style={{ width: 20, height: 20 }} />
        </IconButton>
      </Box>

      <Select
        value={language}
        onChange={handleChange}
        open={open}
        onClose={() => setOpen(false)}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
        }}
        MenuProps={{
          PaperProps: {
            style: {
              boxShadow: 'none',
            },
          },
        }}
      >
        <MenuItem value="RU">
          <Box display="flex" alignItems="center">
            <Avatar src={russianFlag} sx={{ width: 20, height: 16, mr: 1 }} />
            <img src={lettersRU} alt="RU" style={{ width: 19, height: 20 }} />
          </Box>
        </MenuItem>
        <MenuItem value="EN">
          <Box display="flex" alignItems="center">
            <Avatar src={usaFlag} sx={{ width: 20, height: 16, mr: 1 }} />
            <img src={lettersEN} alt="EN" style={{ width: 19, height: 20 }} />
          </Box>
        </MenuItem>
        <MenuItem value="ES">
          <Box display="flex" alignItems="center">
            <Avatar src={spanishFlag} sx={{ width: 20, height: 16, mr: 1 }} />
            <img src={lettersES} alt="ES" style={{ width: 19, height: 20 }} />
          </Box>
        </MenuItem>
      </Select>

      <Box bgcolor="#EEF0F7" height="40px" width="40px" borderRadius="10px" display="flex" alignItems="center" justifyContent="center">
        <img src={personIcon} alt="Profile" style={{ width: 20, height: 20, cursor: 'pointer' }} />
      </Box>
    </Box>
  );
};

export default DropdownAndProfile;



{/* <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
<div style={{display: 'flex' , backgroundColor: 'red', alignItems:'baseline', justifyContent:'center', gap:'6px'}}>
  <div>
    <img src={russianFlag}  style={{width:'20px', height:'16px'}}/>
  </div>
  <div>
    <img src={lettersRU}   style={{width:'19px', height:'20px'}}/>
  </div>
  <div>
    <img src={dropdownIcon} style={{width:'20px', height:'20px'}} />
  </div>
</div>
<div style={{backgroundColor: '#EEF0F7', paddingTop:'12px', paddingLeft:'8px', paddingBottom:'12px', paddingRight:'8px', borderRadius: '10px'}}>
  <img src={personIcon}/>
  
</div>


</div> */}