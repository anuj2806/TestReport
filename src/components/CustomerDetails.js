import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Phone, Email, Home, Info, WhatsApp, Chat } from '@mui/icons-material';
import CustomerTab from './CustomerTab';
import customer from '../assests/customer.png'
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
              <Avatar
                alt="Nandini Singh"
                src={customer} 
              />
              <Typography variant="h6" >Ms. Nandini Singh</Typography>
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
              
              
              <div style={{color:'#323842',marginBottom: '21px', marginTop: '16px'}}>General Info</div>
              <div style={{ marginTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '21px' }}>
                  <Info sx={{ color: '#0000FF', marginRight: 1 }} /> {/* Blue color */}
                  <div  sx={{ color: '#6E7787'}}>CIF</div>
                  <div style={{ marginLeft: 'auto',color: '#6E7787' }}>22707978</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '21px' }}>
                  <Home sx={{ color: '#0000FF', marginRight: 1 }} /> {/* Blue color */}
                  <div sx={{ color: '#6E7787'}}>Branch</div>
                  <div style={{ marginLeft: 'auto',color: '#6E7787' }}>Navi Nerul</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '21px' }}>
                  <Phone sx={{ color: '#0000FF', marginRight: 1 }} /> {/* Blue color */}
                  <div sx={{ color: '#6E7787'}}>Phone number</div>
                  <div style={{ marginLeft: 'auto',color: '#379AE6' }}>(430) 065-7387</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '21px' }}>
                  <Email sx={{ color: '#0000FF', marginRight: 1 }} /> {/* Blue color */}
                  <div sx={{ color: '#6E7787'}}>Email</div>
                  <div style={{ marginLeft: 'auto',color: '#379AE6' }}>nandini.singh@gmail.com</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '21px'}}>
                  <Home sx={{ color: '#0000FF', marginRight: 1 }} /> {/* Blue color */}
                  <div sx={{ color: '#6E7787'}}>Address</div>
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
