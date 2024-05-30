import { Grid,Typography,Stack,Card,CardContent,AvatarGroup,Avatar, Button } from '@mui/material'
import React from 'react'
import { GoAlert } from "react-icons/go";
import { FaRegThumbsDown } from "react-icons/fa";
import { AiOutlineAlert } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import p2 from '../assests/profiles/p2.png'
import p3 from '../assests/profiles/p3.png'
import p4 from '../assests/profiles/p4.png'
import p5 from '../assests/profiles/p5.png'
import BreachedChart from './BreachedChart';
import FundTable from './FundTable';
import { Link } from 'react-router-dom'

const FundDeposited = () => {
  return (
    <Grid container spacing={2} bgcolor={'#f9f9f9'} pr={2}>
            <Grid item xs={6} md={3} className='datatiles'>
                    <Card >
                        <CardContent>
                            <Stack direction={'column'} alignItems={'center'}>
                                
                                <Typography variant="subtitle1" component="subtitle1" fontFamily={'Epilogue'} fontWeight={'900'}>Quick Actions</Typography>
                                
                            </Stack>
                        </CardContent>
                    </Card>
         </Grid>
          <Grid item xs={6} md={3} className='datatiles'>
                <Card variant="outlined">
                    <CardContent>
                        <Stack direction={'column'} alignItems={'center'}>
                            <Stack direction={'row'} gap={2}>
                            <GoAlert size={25} color="red"/>
                            <Typography variant="subtitle1" component="subtitle1" fontFamily={'Epilogue'} fontWeight={'700'}>Margine Below 25</Typography>
                            </Stack>
                            <AvatarGroup max={4}>
                                <Avatar alt="Travis Howard" src={p2} />
                                <Avatar alt="Cindy Baker" src={p3} />
                                <Avatar alt="Agnes Walker" src={p4} />
                                <Avatar alt="Trevor Henderson" src={p5} />
                                </AvatarGroup>
                            <CiMail size={30} color="blue"/>
                            <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontSize={'12px'}>Send Email For Sell</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
          <Grid item xs={6} md={3} className='datatiles'>
                <Card variant="outlined">
                    <CardContent>
                        <Stack direction={'column'} alignItems={'center'}>
                            <Stack direction={'row'} gap={2}>
                            <FaRegThumbsDown size={25} color="red"/>
                            <Typography variant="subtitle1" component="subtitle1" fontFamily={'Epilogue'} fontWeight={'700'}>Margine Below 25</Typography>
                            </Stack>
                            <AvatarGroup max={4}>
                                <Avatar alt="Travis Howard" src={p2} />
                                <Avatar alt="Cindy Baker" src={p3} />
                                <Avatar alt="Agnes Walker" src={p4} />
                                <Avatar alt="Trevor Henderson" src={p5} />
                                </AvatarGroup>
                            <CiMail size={30} color="blue"/>
                            <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontSize={'12px'}>Send Email For Sell</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
          <Grid item xs={6} md={3} className='datatiles'>
                <Card variant="outlined">
                    <CardContent>
                        <Stack direction={'column'} alignItems={'center'}>
                            <Stack direction={'row'} gap={2}>
                            <AiOutlineAlert size={25} color="red"/>
                            <Typography variant="subtitle1" component="subtitle1" fontFamily={'Epilogue'} fontWeight={'700'}>Margine Below 25</Typography>
                            </Stack>
                            <AvatarGroup max={4}>
                                <Avatar alt="Travis Howard" src={p2} />
                                <Avatar alt="Cindy Baker" src={p3} />
                                <Avatar alt="Agnes Walker" src={p4} />
                                <Avatar alt="Trevor Henderson" src={p5} />
                                </AvatarGroup>
                            <CiMail size={30} color="blue"/>
                            <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontSize={'12px'}>Send Email For Sell</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} >
                <Card >
                    <CardContent>
                        <BreachedChart />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={9}>
                <Card >
                    <CardContent>
                       <FundTable/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={11} md={11}>
            </Grid>
            <Grid item xs={1} md={1}>
                <Button variant="contained"
                color="primary"
                component={Link}
                to="/dashboard" >Back</Button>
            </Grid>
    </Grid>
  )
}

export default FundDeposited
