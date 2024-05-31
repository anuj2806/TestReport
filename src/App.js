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
    <Grid container spacing={2}>
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
              <Route path="/customer" element={<TotalCasesChart />} />
              <Route path="/settings" element={<TotalCasesChart />} />
              <Route path="/genratereport" element={<TotalCasesChart />} />
              <Route path="/uploadexcel" element={<TotalCasesChart />} />
              <Route path="/card1" element={<FundDeposited />} />
              <Route path="/card/:id" element={<OtherCard />} />
              <Route path="/card/:id" element={<OtherCard />} />
              <Route path="/card/:id" element={<OtherCard />} />
              <Route path="/card/5" element={<SearchBar />} />
            </Routes>
          </Grid>
        </Grid>
    </Grid>
  );
}

export default App;
