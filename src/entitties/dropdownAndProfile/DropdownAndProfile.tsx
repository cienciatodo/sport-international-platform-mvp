import { useState } from 'react';
import { Select, MenuItem, Box, Avatar, IconButton, SelectChangeEvent, Typography } from '@mui/material';
import russianFlag from '../../../public/icons/navigation/russianFlag.svg';
import lettersRU from '../../../public/icons/navigation/RU.svg';
import dropdownIcon from '../../../public/icons/navigation/dropdown.svg';
import personIcon from '../../../public/icons/navigation/person.svg';

import enflag from '../../../public/icons/navigation/ENflag.svg'
import enletters from '../../../public/icons/navigation/enLetters.svg'
import ch from '../../../public/icons/navigation/china-flag-icon.svg'
import { useTranslation } from 'react-i18next';

const DropdownAndProfile = () => {
  const { i18n } = useTranslation();
 const [language, setLanguage] = useState('RU');
  const [open, setOpen] = useState(false);



  const handleChange = async (event: SelectChangeEvent<string>) => {
    setLanguage( await i18n.changeLanguage(event.target.value));
    setOpen(false); // Close dropdown on selection
  };

  const handleOpen = () => {
    setOpen(true);
  };

  console.log(language, 'segundo');

  const currentLanguage = i18n.language;
  console.log(currentLanguage, 'vamos')

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" width="133px" height="40px" bgcolor="white">
      <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }} onClick={handleOpen}>
        <Avatar src={currentLanguage === 'RU' ? russianFlag : currentLanguage === 'EN' ? enflag : ch} sx={{ width: 20, height: 16, mr: 1, borderRadius:'4px' }} />
        {
          currentLanguage === 'RU' || currentLanguage === 'EN' 
          ?  <img src={currentLanguage === 'RU' ? lettersRU : currentLanguage === 'EN' ? enletters : 'CN'} alt="Language" style={{ width: 19, height: 20, marginRight: '5px' }} /> : <Typography style={{fontFamily:'Inter', fontWeight:'600', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#01010d' }}>CN</Typography>
        }
       
        <IconButton>
          <img src={dropdownIcon} alt="Dropdown Icon" style={{ width: 20, height: 20 }} />
        </IconButton>
      </Box>

      <Select
        value={currentLanguage}
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
            <Avatar src={russianFlag} sx={{ width: 20, height: 16, mr: 1, borderRadius:'4px' }} />
            <img src={lettersRU} alt="RU" style={{ width: 19, height: 20 }} />
          </Box>
        </MenuItem>
        <MenuItem value="EN">
          <Box display="flex" alignItems="center">
            <Avatar src={enflag} sx={{ width: 20, height: 16, mr: 1, borderRadius:'4px' }} />
            <img src={enletters} alt="EN" style={{ width: 19, height: 20 }} />
          </Box>
        </MenuItem>
        <MenuItem value="CN">
          <Box display="flex" alignItems="center">
            <Avatar src={ch} sx={{ width: 20, height: 16, mr: 1, borderRadius:'4px' }} />
            <Typography style={{fontFamily:'Inter', fontWeight:'600', fontSize:'14px', lineHeight:'20px', letterSpacing:'-0.5px', color:'#000000' }}>CN</Typography>
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


