import React,{useState,useEffect} from 'react'
import { Card, CardContent, Grid, Stack,Typography,AvatarGroup,Avatar, Box} from '@mui/material'
import one from '../assests/3.png'
import two from '../assests/1.png'
import three from '../assests/4.png'
import four from '../assests/2.png'
import p2 from '../assests/profiles/p2.png'
import p3 from '../assests/profiles/p3.png'
import p4 from '../assests/profiles/p4.png'
import p5 from '../assests/profiles/p5.png'
import i1 from '../assests/profiles/i1.png'
import i2 from '../assests/profiles/i2.png'
import i3 from '../assests/profiles/i3.png'

import TotalCasesChart from './TotalCasesChart'
import PortfolioChart from './PortfolioChart'
import ChannelsChart from './ChannelsChart'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import userAvtar from '../assests/profile.png'
import upload from '../assests/upload.png'
import filter from '../assests/filter.png'
import edit from '../assests/edit.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
const Dashboard = () => {
    // const [funddata,setfunddata] = useState([]);
    // const [collateraldata,setcollateraldata] = useState([]);
    // const [partialSeldata,setpartialSeldata] = useState([]);
    // const [completedSelldata,setcompletedSelldata] = useState([]);
    const dispatch = useDispatch();
    const dispatchAction = (funddata,collateraldata,partialSeldata,completedSelldata,portfolioHealthdata,firstNotice,secondNotice,marginUnderReview) =>{
        dispatch({
          type:'fundAction',
          payload:funddata, 
        })
        dispatch({
          type:'collateralAction',
          payload:collateraldata, 
        })
        dispatch({
          type:'partialSellAction',
          payload:partialSeldata, 
        })
        dispatch({
          type:'completedSellAction',
          payload:completedSelldata, 
        })
        dispatch({
          type:'portfolioHealthAction',
          payload:portfolioHealthdata, 
        })
        dispatch({
          type:'firstNotice',
          payload:firstNotice, 
        })
        dispatch({
          type:'secondNotice',
          payload:secondNotice, 
        })
        dispatch({
          type:'marginUnderReview',
          payload:marginUnderReview, 
        })
    }
    useEffect(()=>{
        const fetchData = async () =>{
            try{
            const {data} = await axios.get('https://csgrlosdemo.newgensoftware.net:8443/lasportalbackendservices/?status=FUND_DEPOSITED');
            console.log(data);
            var data1 = data;
            data1.map((e,i)=>e["id"]=i+1);

            }catch(error){
                console.log(error)
            }
            try{
            const {data} = await axios.get('https://csgrlosdemo.newgensoftware.net:8443/lasportalbackendservices/?status=ADDITIONAL_COLLATERAL_DEPOSITED');
            console.log(data);
            var data2 = data;
            data2.map((e,i)=>e["id"]=i+1);
            }catch(error){
                console.log(error)
            }
            try{
            const {data} = await axios.get('https://csgrlosdemo.newgensoftware.net:8443/lasportalbackendservices/?status=PARTIAL_SELL');
            console.log(data);
            var data3 = data;
            data3.map((e,i)=>e["id"]=i+1);
            }catch(error){
                console.log(error)
            }
            try{
            const {data} = await axios.get('https://csgrlosdemo.newgensoftware.net:8443/lasportalbackendservices/?status=FULL_SELL');
            console.log(data);
            var data4 = data;
            data4.map((e,i)=>e["id"]=i+1);
            }catch(error){
                console.log(error)
            }
            try{
            const {data} = await axios.get('https://csgrlosdemo.newgensoftware.net:8443/lasportalbackendservices/?status=MARGIN_BREACHED');
            console.log(data);
            var data5 = data;
            data5.map((e,i)=>e["id"]=i+1);
            }catch(error){
                console.log(error)
            }
            try{
            const {data} = await axios.get('https://csgrlosdemo.newgensoftware.net:8443/lasportalbackendservices/?status=FIRST_NOTICE_INITIATED');
            console.log(data);
            var data6 = data;
            data6.map((e,i)=>e["id"]=i+1);
            }catch(error){
                console.log(error)
            }
            try{
            const {data} = await axios.get('https://csgrlosdemo.newgensoftware.net:8443/lasportalbackendservices/?status=SECOND_NOTICE_INITIATED');
            console.log(data);
            var data7 = data;
            data7.map((e,i)=>e["id"]=i+1);
            }catch(error){
                console.log(error)
            }
            try{
            const {data} = await axios.get('https://csgrlosdemo.newgensoftware.net:8443/lasportalbackendservices/?status=MARGIN_UDER_REVIEW');
            console.log(data);
            var data8 = data;
            data8.map((e,i)=>e["id"]=i+1);
            }catch(error){
                console.log(error)
            }
            
            dispatchAction(data1,data2,data3,data4,data5,data6,data7,data8);
        }
        fetchData();

    },[]);

  return (  

    <> 
        <Grid container  spacing={2} bgcolor={'#f9f9f9'} pr={2}>
             <Grid item xs={12} md={12}>
                <Box  >
                    <CardContent className='dashboardHeader' >
                    <Typography variant="h6" component="h6" fontFamily={'Epilogue'} fontWeight={'800'}>Dashboard</Typography>
                    <Stack direction={'row'} gap={[1,2]}>
                        <button>
                            <img src={upload} alt="upload" width={20} height={20} onClick={()=>(document.getElementById("hiddenUpload").click())}/>
                            <input type="file" name="uploadexcel" id="hiddenUpload" />
                        </button>
                        <button>
                            <img src={filter} alt="filter" width={20} height={20}/>
                        </button>
                        <button>
                            <img src={edit} alt="edit" width={20} height={20}/>
                        </button>
                    </Stack>
                    </CardContent>
                </Box>
            </Grid>
            <Grid item xs={6} md={3} >
                <Link to={'/dashboard/fundDeposited'} style={{ textDecoration: 'none' }}>
                <Card variant="outlined">
                    <CardContent className='datatiles' style={{backgroundColor:'#F1F5FE'}}>
                        <Stack >
                            <Stack direction={'row'} gap={2}>
                                <img src={one} alt="" width={'40px'} height={'40px'}/>
                                <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontWeight={'700'} color={'primary'}>Fund Deposited</Typography>
                            </Stack>
                                <Typography variant="h5" component="h5" align='center' fontFamily={'Inter'} fontWeight={'700'}>9</Typography>
                        </Stack>
                    </CardContent>
                </Card>
                </Link>
            </Grid>
            <Grid item xs={6} md={3} className='datatiles'>
            <Link to={'/dashboard/collateral'} style={{ textDecoration: 'none' }}>
                <Card variant="outlined" style={{backgroundColor:'#F1F5FE'}}>
                    <CardContent >
                        <Stack >
                            <Stack direction={'row'}  gap={2}>
                                <img src={two} alt="" width={'40px'} height={'40px'}/>
                                <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontWeight={'700'}  color={'primary'}>Additional Collateral</Typography>
                            </Stack>
                                <Typography variant="h5" component="h5" align='center' fontFamily={'Inter'} fontWeight={'700'}>12</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Link>
            </Grid>
            <Grid item xs={6} md={3} className='datatiles'>
            <Link to={'/dashboard/partialSell'} style={{ textDecoration: 'none' }}>
                <Card variant="outlined" style={{backgroundColor:'#F1F5FE'}}>
                    <CardContent>
                        <Stack >
                            <Stack direction={'row'} gap={2}>
                                <img src={three} alt="" width={'40px'} height={'40px'}/>
                                <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontWeight={'700'}  color={'primary'}>Partial Sell</Typography>
                            </Stack>
                                <Typography variant="h5" component="h5"  align='center' fontFamily={'Inter'} fontWeight={'700'}>5</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Link>
            </Grid>
            <Grid item xs={6} md={3} className='datatiles'>
            <Link to={'/dashboard/completedSell'} style={{ textDecoration: 'none' }}>
                <Card variant="outlined" style={{backgroundColor:'#F1F5FE'}}>
                    <CardContent>
                        <Stack >
                            <Stack direction={'row'} gap={2}>
                                <img src={four} alt="" width={'40px'} height={'40px'}/>
                                <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontWeight={'700'}  color={'primary'}>Completed Sell</Typography>
                            </Stack>
                                <Typography variant="h5" component="h5" align='center'  fontFamily={'Inter'} fontWeight={'700'}>4</Typography>
                        </Stack>
                    </CardContent>
                </Card>
                </Link>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card  >
                    <CardContent >
                        <PortfolioChart />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} >
            <Link to={'/portfolioHealth'} style={{ textDecoration: 'none' }}>
                <Card >
                    <CardContent>
                        <TotalCasesChart/>
                    </CardContent>
                </Card>
            </Link>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card >
                    <CardContent>
                        <ChannelsChart/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container xs={12} md={12} spacing={2} >
                    <Grid item xs={6} >
                        <Card >
                            <CardContent>
                                <Stack direction={'column'}>
                                    <Typography variant="subtitle1" component="subtitle1" fontFamily={'Epilogue'} fontWeight={'500'} color={'#FF5151'}>Customer 360</Typography>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <img src={userAvtar} alt="avtar" width={50} height={50}/>
                                       <button style={{backgroundColor:'#fd7e14', color:'white', border:'none', height:'40px', borderRadius:'5px', width:'70%', marginTop:'5px', fontFamily:'Inter', fontWeight:'600'}} onClick={() => window.open('https://hnbdemo.newgensoftware.net/LASMonitoring/#/customer')}>Search Customer</button>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} >
                        <div>
                                <Stack direction={'column'} gap={1} height={'130px'}>
                                <Link to={'/dashboard/secondNotice'} style={{ textDecoration: 'none' }}>
                                    <Card >
                                        <CardContent style={{backgroundColor:'#FFD8D4'}}>
                                            <Stack direction={'row'} gap={2} alignItems={'center'} mt={-1}>
                                                <div className='numberCircle' style={{background:'#FF5151'}}><p >2</p></div>
                                                <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontWeight={'400'} color={'#FF5151'}>Second Notice</Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Link to={'/dashboard/firstNotice'} style={{ textDecoration: 'none' }}>
                                    <Card >
                                        <CardContent style={{backgroundColor:'#F1F5FE'}}>
                                            <Stack direction={'row'} gap={2} alignItems={'center'}  mt={-1}>
                                            <div className='numberCircle' style={{background:'blue'}}><p>1</p></div>
                                            <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontWeight={'400'} color={'#4B7BEC'}>First Notice</Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Link>
                                </Stack>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <Card >
                            <CardContent >
                            <Typography variant="subtitle1" component="subtitle1" fontFamily={'Epilogue'} fontWeight={'700'} >Highlighted Profiles</Typography>
                            <Grid container xs={12} spacing={1}>
                                <Grid item xs={12}>
                                <Link to={'/dashboard/secondNotice'} style={{ textDecoration: 'none' }}>
                                    <Card  >
                                        <CardContent style={{backgroundColor:'#F1F5FE'}}>
                                            <Stack direction={'row'} justifyContent={'space-between'} height={40}>
                                                <Stack direction={'column'} alignItems={'center'}>
                                                    <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontWeight={'500'}>Cases with 3 Days Deadline</Typography>
                                                    <Typography variant="h5" component="h5" >9</Typography>
                                                </Stack>
                                                <img src={i1} alt="alert" width={40} height={40}/>
                                                <AvatarGroup max={4}>
                                                <Avatar alt="Travis Howard" src={p2} />
                                                <Avatar alt="Cindy Baker" src={p3} />
                                                <Avatar alt="Agnes Walker" src={p4} />
                                                <Avatar alt="Trevor Henderson" src={p5} />
                                                </AvatarGroup>
                                                <MoreVertOutlinedIcon style={{marginTop:'10px'}}/>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Link>
                                </Grid>
                                <Grid item xs={12}>
                                <Link to={'/dashboard/firstNotice'} style={{ textDecoration: 'none' }}>
                                    <Card  >
                                        <CardContent style={{backgroundColor:'#FFD8D4'}}>
                                            <Stack direction={'row'} justifyContent={'space-between'} height={40}>
                                                <Stack direction={'column'} alignItems={'center'}>
                                                    <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontWeight={'500'}>Cases with 5days Deadline</Typography>
                                                    <Typography variant="h5" component="h5" >16</Typography>
                                                </Stack>
                                                <img src={i2} alt="denger" width={40} height={40}/>
                                                <AvatarGroup max={4}>
                                                <Avatar alt="Travis Howard" src={p2} />
                                                <Avatar alt="Cindy Baker" src={p3} />
                                                <Avatar alt="Agnes Walker" src={p4} />
                            
                                                </AvatarGroup>
                                                <MoreVertOutlinedIcon style={{marginTop:'10px'}}/>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                    </Link>
                                </Grid>
                                <Grid item xs={12}>
                                    <Link to={'/dashboard/marginUnderReview'} style={{ textDecoration: 'none' }}>
                                    <Card  >
                                        <CardContent style={{backgroundColor:'#F1F5FE'}}>
                                            <Stack direction={'row'} justifyContent={'space-between'} height={40}>
                                                <Stack direction={'column'} alignItems={'center'}>
                                                    <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontWeight={'500'}>Margin Under Review</Typography>
                                                    <Typography variant="h5" component="h5" >12</Typography>
                                                </Stack>
                                                <img src={i3} alt="alert" width={40} height={40}/>
                                                <AvatarGroup max={4}>
                                                <Avatar alt="Travis Howard" src={p2} />
                                                <Avatar alt="Cindy Baker" src={p3} />
                                                <Avatar alt="Agnes Walker" src={p4} />
                                                <Avatar alt="Trevor Henderson" src='' />
                                                </AvatarGroup>
                                                <MoreVertOutlinedIcon style={{marginTop:'10px'}}/>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                    </Link>
                                </Grid>
                            </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    
  )
}

export default Dashboard
