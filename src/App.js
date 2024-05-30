import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import { Stack } from '@mui/material';
import './Styles/nav.css';
import './Styles/dashboard.css';
import TotalCasesChart from './components/TotalCasesChart';
function App() {
  return (
    <Router>
      <div style={{display:'flex'}}>
      <NavBar />

      <Routes >
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/settings' element={<TotalCasesChart/>}/>

      </Routes>
      </div>
    </Router>
    
  )
}

export default App;
