import React, { useState } from 'react';
import { Box, Tabs, Tab, IconButton, CircularProgress, Backdrop } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import LoanInfo from './LoanInfo';
import SellShares from './SellShares';
import TestComponent from './TestComponent';

export default function CustomerTab() {
  const [value, setValue] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialLoanData = {
    accountNumber: "DL240707106528",
    cif:"CT00062343",
    pledgeValue: "INR 1,00,000",
    branch: "Navi Nerul",
    sanctionedAmount: "INR 50,000",
    securityValue: "INR 90,055",
    allowedMargin: "50%",
    drawingPower: "INR 45,028",
    outstanding: "INR 50,000",
    overdue: "INR 4,972",
    collateralRequired: "INR 9,944",
    marginBreached: "44.50%",
    actionTaken: "Email initiated for 5 day deadline",
    marginBreaches: "2"
  };

  const updatedLoanData = {
    accountNumber: "DL240707106528",
    cif:"CT00062343",
    pledgeValue: "INR 1,10,298",
    branch: "Navi Nerul",
    sanctionedAmount: " INR 55,149",
    securityValue: "INR 1,00,353",
    allowedMargin: "50%",
    drawingPower: "INR 50,176.50",
    outstanding: "INR 55,149",
    overdue: "0",
    collateralRequired: "0",
    marginBreached: "50%",
    actionTaken: "N.A",
    marginBreaches: "2"
  };

  const [loanData, setLoanData] = useState(initialLoanData);
  const [highlightMargin, setHighlightMargin] = useState(false);
  const [moveActionTakeMargin, setMoveActionTakeMargin] = useState(false);

  const handleRefresh = () => {
    setMoveActionTakeMargin(true);
    console.log("move action take margin reached");
    setLoading(true); // Start loader
    setTimeout(() => {
    setLoanData(updatedLoanData);
    setHighlightMargin(true);
    setMoveActionTakeMargin(true);

    // Toggle refresh state
    setRefresh((prev) => !prev);
    setLoading(false); // Stop loader after 12 seconds
  }, 6000);
    setMoveActionTakeMargin(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMoveActionTakeMargin(true);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Loan Info" />
          <Tab label="Sell Shares" />
          <Tab label="Activity Log" />
        </Tabs>
        <IconButton onClick={handleRefresh} aria-label="refresh" style={{ marginRight: '54px' }}>
          <RefreshIcon />
        </IconButton>
      </Box>
      {/* Loader Overlay */}
      <Backdrop open={loading} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress size={60} thickness={4.5} color="inherit" />
      </Backdrop>

      {value === 0 && <LoanInfo loanData={loanData} highlightMargin={highlightMargin} moveActionTakeMargin={moveActionTakeMargin} />}
      {value === 1 && <SellShares refresh={refresh} />}
      {value === 2 && <TestComponent />}
    </Box>
  );
}
