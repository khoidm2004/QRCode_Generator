import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            >
            {value === index && (
                <Box sx={{ p:3}}>    
                    <Typography sx={{wordBreak:"break-word",wordWrap:"break-word",textAlign:"left",fontSize:"20px"}}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='BasicTabs'>
            <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="What is a QR Code?" {...a11yProps(0)} />
                <Tab label="Benefits of using QR Code" {...a11yProps(1)} />
                <Tab label="Scanning QR Code" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                A QR code, or Quick Response code, is a two-dimensional<br/> barcode that contains information. It can be quickly scanned<br/> by a device, such as a smartphone, to access the information<br/> it holds, which may include URLs, text, or other data.
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                They are gaining popularity because of their versatility. You<br/> can use them to gather feedback to improve your products<br/> or services, increase customer engagement with images or<br/> videos, or even promote your business via events and<br/> coupons. All of these can be done with just a single scan!
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Depending on your device, you might already have a built-in<br/> QR Code reader or scanner. Open the camera app on your<br/> mobile phone and hold it over a Code for a few seconds until<br/> a notification pops up. If this doesn’t happen, check your<br/> settings and see if QR Code scanning is enabled. Still not<br/> working? Don’t worry, all you have to do now is install<br/> third-party QR Code readers from your app stores.
            </CustomTabPanel>
            </Box>
        </div>
    );
}