import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const TotalCasesChart = ({barSize,handleClick}) => {
  const data = [
    {
      "value": 100,
      "name": "Punjabi Bagh",
      "fill": "#4285F4"
    },
    {
      "value": 120,
      "name": "Saket",
      "fill": "#5BC0DE"
    },
    {
      "value": 60,
      "name": "Green Park",
      "fill": "#FA8072"
    },
    {
      "value": 90,
      "name": "Pitampura",
      "fill": "#FFD700"
    },
    {
      "value": 50,
      "name": "Noida",
      "fill": "#98FB98"
    }
  ];

  
  return (
    <>
    <h3 style={{fontFamily:'Epilogue', fontWeight:'700'}}>Total Cases by Branch</h3>
      <div style={{height: 200 }}>
        <ResponsiveContainer >
          <BarChart
            data={data}
          >
            <CartesianGrid stroke="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend  layout="vertical" verticalAlign="top" align="right"  payload={ [{ value:'Punjabi Bagh' , type: 'circle', color:"#4285F4" },{ value:'Saket' , type: 'circle', color: "#5BC0DE"},{ value:'Green Park' , type: 'circle', color: "#FA8072"},{ value:'Pitampura' , type: 'circle', color: "#FFD700"},{ value:'Noida' , type: 'circle', color: "#98FB98"}]} />
            <Bar dataKey="value" barSize={barSize}  activeBar={<Rectangle fill="blue" stroke="blue" />} onClick={handleClick} />
          </BarChart>
        </ResponsiveContainer>
        </div>
    </>
  );
}

export default TotalCasesChart;
