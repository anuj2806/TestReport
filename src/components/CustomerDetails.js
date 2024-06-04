import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Phone, Email, Home, Info, WhatsApp, Chat } from '@mui/icons-material';
import CustomerTab from './CustomerTab';
import customer from '../assests/customer.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
  '& .MuiCard-root': {
    marginBottom: theme.spacing(2),
  },
  '& .MuiAvatar-root': {
    width: theme.spacing(14),
    height: theme.spacing(14),
    margin: '0 auto',
  },
  '& .MuiTypography-h6': {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  '& .MuiListItemText-primary': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiListItemText-secondary': {
    marginLeft: 'auto',
  },
}));

function CustomerDetails() {
  return (
    <Root>
      <Grid container spacing={2} bgcolor={'#f9f9f9'} pr={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
            <div style={{
  border: '1px solid #ccc', // Add a 1-pixel border
  borderRadius: '0px', // Remove the circular border
  width: '100px', // Set the width of the frame
  height: '100px', // Set the height of the frame
  overflow: 'hidden', // Ensure the image doesn't exceed the frame
  display: 'inline-block', // Make it inline
  margin: '5px', // Add some margin
  marginLeft:'101px',
}}>
  <img src={customer} alt="Nandini Singh" style={{
    width: '100%', // Make the image fill the frame
    height: '100%', // Make the image fill the frame
    objectFit: 'cover', // Ensure the image is scaled to fit the frame
    marginLeft:'1px',
  }} />
</div>
              <Typography variant="h6" sx={{ color: '#4B7BEC' }}  >Ms. Nandini Singh</Typography>
              <Grid container justifyContent="center" spacing={1}>
                <Grid item>
                  <IconButton>
                    <WhatsApp sx={{ color: '#25D366' }} /> {/* WhatsApp green */}
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <Chat sx={{ color: '#0084FF' }} /> {/* Messenger blue */}
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <Email sx={{ color: '#D44638' }} /> {/* Gmail red */}
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <Phone sx={{ color: '#34B7F1' }} /> {/* Light blue for phone */}
                  </IconButton>
                </Grid>
              </Grid>
              <div style={{color:'#323842',marginBottom: '21px', marginTop: '16px',fontFamily: 'Inter, sans-serif'}}>General Info</div>
              <div style={{ marginTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '21px' }}>
                  <InfoOutlinedIcon sx={{ color: '#0000FF', marginRight: 1 }} /> {/* Blue color */}
                  <div  sx={{ color: '#6E7787',fontFamily: 'Inter, sans-serif'}}>CIF</div>
                  <div style={{ marginLeft: 'auto',color: '#6E7787' }}>22707978</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '21px' }}>
                  <HomeOutlinedIcon sx={{ color: '#0000FF', marginRight: 1 }} /> {/* Blue color */}
                  <div sx={{ color: '#6E7787',fontFamily: 'Inter, sans-serif'}}>Branch</div>
                  <div style={{ marginLeft: 'auto',color: '#6E7787' }}>Navi Nerul</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '21px' }}>
                  <PhoneOutlinedIcon sx={{ color: '#0000FF', marginRight: 1 }} /> {/* Blue color */}
                  <div sx={{ color: '#6E7787',fontFamily: 'Inter, sans-serif'}}>Phone number</div>
                  <div style={{ marginLeft: 'auto',color: '#379AE6' }}>(430) 065-7387</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '21px' }}>
                  <AlternateEmailOutlinedIcon sx={{ color: '#0000FF', marginRight: 1 }} /> {/* Blue color */}
                  <div sx={{ color: '#6E7787',fontFamily: 'Inter, sans-serif'}}>Email</div>
                  <div style={{ marginLeft: 'auto',color: '#379AE6' }}>nandini.singh@gmail.com</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '21px'}}>
                  <LocationOnOutlinedIcon sx={{ color: '#0000FF', marginRight: 1 }} /> {/* Blue color */}
                  <div sx={{ color: '#6E7787',fontFamily: 'Inter, sans-serif'}}>Address</div>
                  <div style={{ marginLeft: 'auto',color: '#6E7787' }}>Navi Nerul, Maharashtra, IN</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CustomerTab />
          </Card>
        </Grid>
      </Grid>
    </Root>
  );
}

export default CustomerDetails;