import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { saveAs } from 'file-saver';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ExcelToDataGrid() {
  const [excelData, setExcelData] = useState([]);

  const handleFileChange = (e) => {
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
          }, { id: index + 1 })
        );
        setExcelData(formattedData);
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
      <div style={{ height: 'calc(100vh - 150px)', width: '100%', marginTop: '20px' }}>
        <DataGrid
          rows={excelData}
          columns={excelData.length > 0 ? Object.keys(excelData[0]).map(header => ({ field: header, headerName: header, width: 150 })) : []}
          components={{ Toolbar: GridToolbar }}
          pageSize={5}
        />
      </div>
    </Box>
  );
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
