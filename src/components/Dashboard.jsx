import React from 'react'
import { Card, CardContent, Grid, Stack,Typography } from '@mui/material'
import one from '../assests/3.png'
import two from '../assests/1.png'
import three from '../assests/4.png'
import four from '../assests/2.png'
import TotalCasesChart from './TotalCasesChart'
import PortfolioChart from './PortfolioChart'
import ChannelsChart from './ChannelsChart'

const Dashboard = () => {
  return (
    
        <Grid container  spacing={2} >
             <Grid item xs={12} >
                <Card variant="outlined">
                    <CardContent className='dashboardHeader'>
                    <Typography variant="h6" component="h1" fontWeight={'bold'}>Dashboard</Typography>
                    <Stack direction={'row'} gap={[1,2]}>
                        <button>
                            <img src='' alt="" />
                        </button>
                        <button>
                            <img src="" alt="" />
                        </button>
                        <button>
                            <img src="" alt="" />
                        </button>
                    </Stack>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} >
                <Card variant="outlined">
                    <CardContent className='datatiles' style={{backgroundColor:'skyblue'}}>
                        <Stack >
                            <Stack direction={'row'} gap={2}>
                                <img src={one} alt="" width={'40px'} height={'40px'}/>
                                <Typography variant="subtitle1" component="subtitle1" >Fund Deposited</Typography>
                            </Stack>
                                <Typography variant="subtitle1" component="subtitle1" align='center'>9</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} className='datatiles'>
                <Card variant="outlined" style={{backgroundColor:'skyblue'}}>
                    <CardContent >
                        <Stack >
                            <Stack direction={'row'}  gap={2}>
                                <img src={two} alt="" width={'40px'} height={'40px'}/>
                                <Typography variant="subtitle1" component="subtitle1">Additional Collateral</Typography>
                            </Stack>
                                <Typography variant="subtitle1" component="subtitle1" align='center'>12</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} className='datatiles'>
                <Card variant="outlined" style={{backgroundColor:'skyblue'}}>
                    <CardContent>
                        <Stack >
                            <Stack direction={'row'} gap={2}>
                                <img src={three} alt="" width={'40px'} height={'40px'}/>
                                <Typography variant="subtitle1" component="subtitle1">Partial Sell</Typography>
                            </Stack>
                                <Typography variant="subtitle1" component="subtitle1"  align='center'>5</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} className='datatiles'>
                <Card variant="outlined" style={{backgroundColor:'skyblue'}}>
                    <CardContent>
                        <Stack >
                            <Stack direction={'row'} gap={2}>
                                <img src={four} alt="" width={'40px'} height={'40px'}/>
                                <Typography variant="subtitle1" component="subtitle1">Completed Sell</Typography>
                            </Stack>
                                <Typography variant="subtitle1" component="subtitle1" align='center'>4</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card variant="outlined" >
                    <CardContent >
                        <TotalCasesChart/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} >
                <Card variant="outlined">
                    <CardContent>
                        <PortfolioChart />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card variant="outlined">
                    <CardContent>
                        <ChannelsChart/>
                        {/* hi */}
                    </CardContent>
                </Card>
            </Grid>
            <Grid container xs={6} spacing={2}>
                <Grid item xs={6} >
                    <Card variant="outlined">
                        <CardContent></CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} >
                    <Card variant="outlined">
                        <CardContent></CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} >
                    <Card variant="outlined">
                        <CardContent></CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    
  )
}

export default Dashboard
