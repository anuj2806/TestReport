import React,{useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Button } from '@mui/material'
const columns = [
    { field: 'id', headerName: 'S. NO', width: 70 },
    { field: 'cifId', headerName: 'CIF', width: 70 },
    { field: 'customerName', headerName: 'Customer Name', width: 130 },
    { field: 'securityType', headerName: 'Security Type', width: 130 },
    { field: 'branch', headerName: 'Branch', width: 130 },
    { field: 'state', headerName: 'State', width: 130 },
    { field: 'sanctionAmount', headerName: 'Sanction Amount', width: 130 },
    { field: 'tenure', headerName: 'Tenure', width: 70 },
    { field: 'sanctionDate', headerName: 'Sanction Date', width: 130 },
    { field: 'endDate', headerName: 'End date', width: 130 },
    { field: 'totalPledgeValue', headerName: 'Total Pledge Value', width: 130 },
    { field: 'marginUsed', headerName: 'Margin Used', width: 130 },
    { field: 'marginAvailable', headerName: 'Margin Available', width: 130 },
    { field: 'marginAvailablePercentage', headerName: 'Margin Available Percentage', width: 130 },
    { field: 'fundDeposited', headerName: 'Fund Deposited', width: 130 },
    { field: 'additionalCollateralDeposited', headerName: 'Additional Collateral Deposited', width: 130 },
    { field: 'currentStatus', headerName: 'Current Status', width: 130 },
    
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        return <Button variant="contained" size='small' style={{marginTop:'-4px'}}>Click</Button>;
      }
    },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const FundTable = ({tabledata}) => {
    console.log(tabledata)
  return (
    <div style={{ height: 424, width: '100%' }}>
      <DataGrid
        rowHeight={35}
        rows={tabledata}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
      />
    </div>
  );
}
export default  FundTable