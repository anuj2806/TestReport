import React from 'react'
import { PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';

const PortfolioChart = () => {
    const data1 = [
        { name: 'Breached Margin', value:75,fill: "#fb1d1d" },
        { name: 'Margin Under Review', value: 10,fill: "#fab740" },
        { name: 'Within Margin', value: 15,fill: "#1dd75b" }
      ];
  return (
    <>
      <h3 >Total Cases by Branch</h3>
      <div style={{height: 200 }}>
        <ResponsiveContainer>
          <PieChart width={300} height={300}>
            <Pie data={data1} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            <Legend layout="vertical" verticalAlign="middle" align="right" iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
    </div>
    </>
  )
}

export default PortfolioChart
