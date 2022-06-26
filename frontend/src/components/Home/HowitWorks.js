import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Typography from '@mui/material/Typography';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Testimonials from './Testimonials'
import TabOne from './VerticalWithAlternateImageAndText'
import TabTwo from './VerticalWithAlternateImageAndTextTwo'

const Working=()=> {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt:4,typography: 'body1', display:"flex", flexDirection: 'column' ,justifyContent: 'center',alignItems: 'center' }}>
    <Typography variant="h3" sx={{
        fontWeight:"bold"
    }}>How it works</Typography>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="For Students" value="1" />
            <Tab label="For Professionals" value="2" />
          </TabList>
        </Box>
        <Box sx={{width:"100%"}}>
        <TabPanel value="1"><TabOne/></TabPanel>
        <TabPanel value="2"><TabTwo/></TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}
export default Working