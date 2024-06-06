import { Grid,Typography,Stack,Card,Box,CardContent,AvatarGroup,Avatar, Button } from '@mui/material'
import React, { useState,useEffect } from 'react'
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

import {useParams} from 'react-router-dom'
import SearchBar from './SearchBar';
import {useSelector} from 'react-redux'
const OtherCard = () => {
    const [data,setData]=useState([]);
    const [cardLabel,setCardLabel]=useState();
    const {fund,collateral,partialSell,completedSell,firstNotice,secondNotice,marginUnderReview} = useSelector((state)=>state.portfolioSummary);
    const params =useParams();
    useEffect(() => {
        if (params.id==='fundDeposited'){
          setData(fund)
          setCardLabel('Fund Deposited')
        }else if (params.id === 'collateral') {
          setData(collateral);
          setCardLabel('Additional Collateral')
        } else if (params.id === 'partialSell') {
          setData(partialSell);
          setCardLabel('Partial Sell')
        } else if (params.id === 'completedSell') {
          setData(completedSell);
          setCardLabel('Completed Sell')
        }else if (params.id === 'firstNotice') {
          setData(firstNotice);
          setCardLabel('First Notice')
        }else if (params.id === 'secondNotice') {
          setData(secondNotice);
          setCardLabel('Second Notice')
        }else if (params.id === 'marginUnderReview') {
            setData(marginUnderReview);
            setCardLabel('Margin Under Review')
        }
      }, [params.id]);
    return (
        <Grid container spacing={2} bgcolor={'#f9f9f9'} pr={2}>
                <Grid item xs={4} md={3} className='datatiles'>
                    <Box >
                        <Stack direction={'column'} alignItems={'center'}>
                            <Typography variant="h4" component="h4" fontFamily={'Epilogue'} fontWeight={'900'} textAlign={'center'} pt={5}>Quick<br/>Actions</Typography>
                         </Stack>
                    </Box>
             </Grid>
              <Grid item xs={4} md={6}>
                <Box alignItems={'center'} mt={8}>
                    <SearchBar/>
                </Box> 
              </Grid>
              <Grid item xs={4} md={3} className='datatiles'>
                    <Card variant="outlined">
                        <CardContent>
                            <Stack direction={'column'} alignItems={'center'}>
                                <Stack direction={'row'} gap={2}>
                                {/* <GoAlert size={25} color="red"/> */}
                                <Typography variant="subtitle1" component="subtitle1" fontFamily={'Epilogue'} fontWeight={'700'}>{cardLabel}</Typography>
                                </Stack>
                                <AvatarGroup max={4}>
                                    <Avatar alt="Travis Howard" src={p2} />
                                    <Avatar alt="Cindy Baker" src={p3} />
                                    <Avatar alt="Agnes Walker" src={p4} />
                                    <Avatar alt="Trevor Henderson" src={p5} />
                                    </AvatarGroup>
                                <CiMail size={40} color="blue"/>
                                <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontSize={'12px'}>Send Email For Sell</Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Card >
                        <CardContent>
                           <FundTable tabledata={data}/>
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
                <Grid item xs={12} md={12}>
                </Grid>
        </Grid>
      )
    }
    

export default OtherCard
