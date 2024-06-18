import React from 'react';
import { Grid } from '@mui/material';
import { Email, Home, AttachMoney, AccountBalance, Error, Warning, Done, Security, TrendingUp, Report } from '@mui/icons-material';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function LoanInfo() {
  const iconStyle = { color: 'blue', marginRight: '8px' };
  const iconStyle1 = { color: 'red', marginRight: '245px' };
  const labelStyle = { marginLeft: 'auto',marginRight:'245px' };
  const listItemStyle = { marginBottom: '21px' }; // Added spacing between each line
  const labellight={color:'#6E7787'}

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <AlternateEmailOutlinedIcon style={iconStyle} />
        <div style={labellight}>Total Pledge Value</div>
        <div style={labelStyle}>INR 1,00,000</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <HomeOutlinedIcon style={iconStyle} />
        <div style={labellight}>Branch</div>
        <div style={labelStyle}>Navi Nerul</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <CurrencyRupeeIcon style={iconStyle} />
        <div style={labellight}>Sanctioned Amount</div>
        <div style={labelStyle}>INR 50,000</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <Security style={iconStyle} />
        <div style={labellight}>Current Security Value</div>
        <div style={labelStyle}>INR 90,055</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <ErrorOutlineOutlinedIcon style={iconStyle} />
        <div style={labellight}>Allowed Margin</div>
        <div style={labelStyle}>50%</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <CurrencyRupeeIcon style={iconStyle} />
        <div style={labellight}>Drawing Power</div>
        <div style={labelStyle}>INR 45,028</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <WarningAmberOutlinedIcon style={iconStyle} />
        <div style={labellight}>Outstanding</div>
        <div style={labelStyle}>INR 50,000</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <ReportOutlinedIcon style={iconStyle} />
        <div style={labellight}>Current Overdue</div>
        <div style={labelStyle}>INR 4,972</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <CurrencyRupeeIcon style={iconStyle} />
        <div style={labellight}>Additional Collateral Required</div>
        <div style={labelStyle}>INR 9,944</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <ErrorOutlineOutlinedIcon style={iconStyle} />
        <div style={labellight}>Margin Breached</div>
        <div style={{ marginLeft: 'auto', ...iconStyle1 }}>44.50%</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <MarkEmailReadOutlinedIcon style={iconStyle} />
        <div style={labellight}>Action Taken</div>
        <div style={{ marginLeft: 'auto',marginRight:'99px' }}>Email initiated for 5 day deadline</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <WarningAmberOutlinedIcon style={iconStyle} />
        <div style={labellight}>No. of Margin Breaches</div>
        <div style={labelStyle}>2</div>
      </div>
    </div>
  );
}

export default LoanInfo;
