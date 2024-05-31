import React,{useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {Button } from '@mui/material'
const columns = [
    { field: 'S_NO', headerName: 'S. NO', width: 70 },
    { field: 'Customer_Name', headerName: 'Customer Name', width: 130 },
    { field: 'Security_Type', headerName: 'Security Type', width: 130 },
    { field: 'Branch', headerName: 'Branch', width: 130 },
    { field: 'State', headerName: 'State', width: 130 },
    { field: 'CIF', headerName: 'CIF', width: 130 },
    { field: 'Sanction_Amount', headerName: 'Sanction Amount', width: 130 },
    { field: 'Sanction_Date', headerName: 'Sanction Date', width: 130 },
    { field: 'End_date', headerName: 'End date', width: 130 },
    { field: 'Total_Pledge_Value', headerName: 'Total Pledge Value', width: 130 },
    { field: 'Margin_Used', headerName: 'Margin Used', width: 70 },
    { field: 'Margin_Available', headerName: 'Margin Available', width: 70 },
    { field: 'Margin_Available_Percentage', headerName: 'Margin Available Percentage', width: 70 },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        return <Button>Click</Button>;
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

const FundTable = () => {
    const [rows,setData] = useState([]);
    useEffect(()=>{
        const fetchData = async () =>{
            try{
            const {data} = await axios.get('http://localhost:4500/api/v1/product');
            console.log(data.product);
            data.product.map((e,i)=>e["id"]=i+1)
            setData(data.product);
            }catch{

            }
        }
        fetchData();
    },[]);
  return (
    <div style={{ height: 424, width: '100%' }}>
      <DataGrid
        rowHeight={35}
        rows={rows}
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