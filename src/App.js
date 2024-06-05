import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './components/SideNavBar';
import Dashboard from './components/Dashboard';
import './Styles/sidenav.css';
import './Styles/dashboard.css';
import TotalCasesChart from './components/TotalCasesChart';
import Header from './components/Header';
import FundDeposited from './components/FundDeposited';
import OtherCard from './components/OtherCard';
import SearchBar from './components/SearchBar';
import Login from './components/LogIn';
import { Grid } from '@mui/material';
import CustomerDetails from './components/CustomerDetails';
import CustomerHeader from './components/CustomerHeader'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<AuthenticatedRoutes />} />
      </Routes>
    </Router>
  );
}

function AuthenticatedRoutes() {
  return (
    <Grid container spacing={1}>
        <Grid item xs={3} md={2}>        
          <NavBar />
        </Grid>
        <Grid item xs={9} md={10}>
          <Grid item xs={12} md={12}>         
            <Header/>
          </Grid>
          <Grid item xs={12} md={12}> 
            <Routes >
              <Route path="/dashboard" element={<Dashboard />} />
              
              <Route path="/customer" element={<CustomerPage />} />
              <Route path="/settings" element={<></>} />
              <Route path="/genratereport" element={<></>} />
              <Route path="/uploadexcel" element={<></>} />
              <Route path="/portfolioHealth" element={<FundDeposited />} />
              <Route path="/dashboard/:id" element={<OtherCard />} />
            </Routes>
          </Grid>
        </Grid>
    </Grid>
  );
}

function CustomerPage() {
  return (
    <>
      <CustomerHeader />
      <CustomerDetails />
    </>
  );
}

export default App;
