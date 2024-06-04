import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Button } from '@mui/material';

function createData(sno, isin, company, currentValue, totalShares, nav, total, numToSell, sellValue) {
  return { sno, isin, company, currentValue, totalShares, nav, total, numToSell, sellValue };
}

const rows = [
  createData(1, 'INE002A01018', 'Reliance Ltd', 70, 510, 35700, 35700, '', ''),
  createData(2, 'INE081A01012', 'TCS', 5, 1010, 5050, 5050, '', ''),
  createData(3, 'INE152A01029', 'Infosys', 5, 4139, 20695, 20695, '', ''),
  createData(4, 'INE112A01023', 'Kotak Mahindra', 10, 2760, 27600, 27600, '', ''),
];

export default function SellShares() {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>ISIN Number</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Current Share Value(NAV)</TableCell>
              <TableCell>Total Shares</TableCell>
              <TableCell>NAV</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>No. of shares to be sold</TableCell>
              <TableCell>Sell Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.sno}>
                <TableCell component="th" scope="row">{row.sno}</TableCell>
                <TableCell>{row.isin}</TableCell>
                <TableCell>{row.company}</TableCell>
                <TableCell>{row.currentValue}</TableCell>
                <TableCell>{row.totalShares}</TableCell>
                <TableCell>{row.nav}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>{row.numToSell}</TableCell>
                <TableCell>{row.sellValue}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={7} align="right">Portfolio Value</TableCell>
              <TableCell>89045</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ mt: 2, p: 2, border: '1px solid #ccc', borderRadius: 1, textAlign: 'center', backgroundColor: 'blue', color: 'white'}}>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography variant="h6" >Additional Collateral required</Typography>
    <Typography variant="h8" color="white" sx={{ paddingTop: '18px', marginRight: '95px' }}>INR 10,000</Typography>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography variant="h6">Total Share Value:</Typography>
    <Typography variant="h8" color="white" sx={{ paddingTop: '18px', marginRight: '95px' }}>INR 1,000</Typography>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography variant="h6">Penalty:</Typography>
    <Typography variant="h8" color="white"></Typography>
  </div>
</Box>
<Box sx={{ textAlign: 'center' }}>
  <Button variant="contained" color="error" sx={{ mt: 2 }}>SELL</Button>
</Box>

{/* pp */}
    </Box>
  );
}
