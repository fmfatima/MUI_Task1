import { AppBar, Stack, Toolbar, Typography, Button, ToggleButton, ToggleButtonGroup } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useState } from 'react';

const Footer = () => {
    const [selected, setSelected] = useState([]);

    const handleChange = (event, newSelected) => {
        setSelected(newSelected);
    };
    return (
    <AppBar position="static">
        <Toolbar>
        <Stack direction="row" spacing={2} sx={{flexGrow: 1}}>
            <Typography variant="body2"><a href="#">Match With A Provider</a></Typography>
            <Typography variant="body2"><a href="#">About Us</a></Typography>
            <Typography variant="body2"><a href="#">Services</a></Typography>
            <Typography variant="body2"><a href="#">Contact Us</a></Typography>
            <Typography variant="body2"><a href="#">Careers</a></Typography>
            
        </Stack>

        <Stack direction="row" spacing={2}>
            <Button color='inherit'>Follow Us</Button>
        </Stack>
        </Toolbar>
        <Toolbar>
        <Stack direction="row" spacing={2} sx={{flexGrow: 1}}>
            <Typography variant="body2">2022 match, Inc</Typography>
            <Typography variant="body2"><a href="#">Privacy</a></Typography>
            <Typography variant="body2"><a href="#">Terms $ Conditions</a></Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
        <ToggleButtonGroup value={selected} onChange={handleChange} aria-label="social media"
        size="small" >

            <ToggleButton value="instagram" aria-label="instagram">
            <InstagramIcon />
            </ToggleButton>
            <ToggleButton value="twitter" aria-label="twitter">
            <TwitterIcon />
            </ToggleButton>
            <ToggleButton value="linkedin" aria-label="linkedin">
            <LinkedInIcon />
            </ToggleButton>
            </ToggleButtonGroup>
        </Stack>

        </Toolbar>
    </AppBar>
    
  );
}

export default Footer
