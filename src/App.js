import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './components/SideNavBar';
import Dashboard from './components/Dashboard';
import { Stack } from '@mui/material';
import './Styles/sidenav.css';
import './Styles/dashboard.css';
import TotalCasesChart from './components/TotalCasesChart';
import Header from './components/Header';
import Loader from './components/Loader';
import FundDeposited from './components/FundDeposited';
import OtherCard from './components/OtherCard';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/*" element={<AuthenticatedRoutes />} />
      </Routes>
    </Router>
  );
}

function AuthenticatedRoutes() {
  return (
    <div style={{display:'flex'}}>
      <NavBar />
      <div style={{width:'90%'}}>
        <Header/>
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
      </div>
    </div>
  );
}

export default App;
