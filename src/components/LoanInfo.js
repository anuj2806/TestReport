import React from 'react';
import { Grid } from '@mui/material';
import { Email, Home, AttachMoney, AccountBalance, Error, Warning, Done, Security, TrendingUp, Report } from '@mui/icons-material';

function LoanInfo() {
  const iconStyle = { color: 'blue', marginRight: '8px' };
  const iconStyle1 = { color: 'red', marginRight: '245px' };
  const labelStyle = { marginLeft: 'auto',marginRight:'245px' };
  const listItemStyle = { marginBottom: '21px' }; // Added spacing between each line
  const labellight={color:'#6E7787'}

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <TrendingUp style={iconStyle} />
        <div style={labellight}>Total Pledge Value</div>
        <div style={labelStyle}>INR 1,00,000</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <Home style={iconStyle} />
        <div style={labellight}>Branch</div>
        <div style={labelStyle}>Navi Nerul</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <AttachMoney style={iconStyle} />
        <div style={labellight}>Sanctioned Amount</div>
        <div style={labelStyle}>INR 50,000</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <Security style={iconStyle} />
        <div style={labellight}>Current Security Value</div>
        <div style={labelStyle}>INR 90,000</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <Error style={iconStyle} />
        <div style={labellight}>Allowed Margin</div>
        <div style={labelStyle}>50%</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <AttachMoney style={iconStyle} />
        <div style={labellight}>Drawing Power</div>
        <div style={labelStyle}>INR 45,000</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <Warning style={iconStyle} />
        <div style={labellight}>Outstanding</div>
        <div style={labelStyle}>INR 50,000</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <Report style={iconStyle} />
        <div style={labellight}>Current Overdue</div>
        <div style={labelStyle}>INR 5,000</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <AttachMoney style={iconStyle} />
        <div style={labellight}>Additional Collateral Required</div>
        <div style={labelStyle}>INR 10,000</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <Error style={iconStyle} />
        <div style={labellight}>Margin Breached</div>
        <div style={{ marginLeft: 'auto', ...iconStyle1 }}>44.44%</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <Email style={iconStyle} />
        <div style={labellight}>Action Taken</div>
        <div style={{ marginLeft: 'auto',marginRight:'99px' }}>Email initiated for 5 day deadline</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...listItemStyle }}>
        <Warning style={iconStyle} />
        <div style={labellight}>No. of Margin Breaches</div>
        <div style={labelStyle}>2</div>
      </div>
    </div>
  );
}

export default LoanInfo;
