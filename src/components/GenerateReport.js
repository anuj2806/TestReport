import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { saveAs } from 'file-saver';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SpinningCircle from '../assests/SpinningCircle.gif';
import '../Styles/SpinLoader.css'; // Import your CSS styles

export default function ExcelToDataGrid() {
  const [excelData, setExcelData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Fetching Data',
    'Updating NAV Values',
    'Identifying Shares',
    'Updating New Profile Values',
    'Calculating LTV',
    'Calculating Margin Breach',
    'Updating Dashboard'
  ];

  useEffect(() => {
    if (loading) {
      let stepIndex = 0;
      const interval = 5000 / steps.length; // Total 5 seconds divided by number of steps

      const intervalId = setInterval(() => {
        setCurrentStep(stepIndex);
        stepIndex += 1;
        if (stepIndex >= steps.length) {
          clearInterval(intervalId);
        }
      }, interval);

      return () => clearInterval(intervalId);
    }
  }, [loading]);

  const handleFileChange = (e) => {
    setLoading(true);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        const headers = jsonData.shift();
        const formattedData = jsonData.map((row, index) =>
          row.reduce((acc, val, colIndex) => {
            acc[headers[colIndex]] = val;
            return acc;
          }, { id: index + 1, ID: index + 1 }) // Add both 'id' and 'ID' properties
        );

        // Simulate loading for 5 seconds
        setTimeout(() => {
          setExcelData(formattedData);
          setLoading(false);
        }, 5000);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleButtonClick = () => {
    document.getElementById('upload-excel').click();
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: EXCEL_TYPE });
    saveAs(data, 'download.xlsx');
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton>
          <ArrowForwardIcon />
        </IconButton>
        <Typography variant="h4">
          Generate Report
        </Typography>
      </Box>
      <Button variant="contained" onClick={handleButtonClick} style={{ marginRight: '10px' }}>
        Upload Data
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDownload} disabled={excelData.length === 0}>
        Download Report
      </Button>
      <input
        type="file"
        id="upload-excel"
        accept=".xlsx,.xls"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {loading && (
        <div className="dialog-box" id="dialog">
          <p id="heading">Calculating...</p>
          <img src={SpinningCircle} />
          <div className="navmenu">
            <ul id="checks">
              {steps.map((step, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  <a href="#" className={index === currentStep ? 'active' : ''}>
                    {step}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div style={{ height: 'calc(100vh - 150px)', width: '100%', marginTop: '20px' }}>
        <DataGrid
          rows={excelData}
          columns={
            excelData.length > 0
              ? Object.keys(excelData[0])
                .filter(header => header !== 'id') // Exclude 'id' from the columns
                .map(header => ({ field: header, headerName: header, width: 150 }))
              : []
          }
          components={{ Toolbar: GridToolbar }}
          pageSize={5}
          getRowId={(row) => row.id} // Specify custom row id
        />
      </div>
    </Box>
  );
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
