import React from 'react'
import { PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';

const BreachedChart = () => {
    const data1 = [
        { name: 'Breached Margin', value:75,fill: "#fb1d1d" },
        { name: 'Margin Under Review', value: 10,fill: "#fab740" },
        { name: 'Within Margin', value: 15,fill: "#1dd75b" }
      ];
  return (
    <>
      <h3 style={{fontFamily:'Epilogue', fontWeight:'700',textAlign:'center'}}>Breached Margin Breakup</h3>
      <div style={{height: 350}}>
        <ResponsiveContainer>
          <PieChart width={280} height={280}>
            <Pie data={data1} dataKey="value" cx="50%" cy="30%" innerRadius={55} outerRadius={80} fill="#82ca9d" label />
            <Legend layout="vertical" verticalAlign="bottom" align="centre" iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
    </div>
    </>
  )
}

export default BreachedChart
