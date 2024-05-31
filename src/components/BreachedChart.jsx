import React from 'react'
import { PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';

const BreachedChart = () => {
    
    const data1 = [
        { name: 'Margin 26-40%', value:25,fill: "#2589FB" },
        { name: 'Margin Below 25%', value: 40,fill: "#F42200" },
        { name: 'Margin 41-50%', value: 35,fill: "#03D952" }
      ];
  return (
    <>
      <h3 style={{fontFamily:'Epilogue', fontWeight:'700',textAlign:'center'}}>Breached Margin Breakup</h3>
      <div style={{position:'relative'}}>
        <div style={{height: 350}}>
            <ResponsiveContainer>
            <PieChart width={280} height={280}>
                <Pie data={data1} dataKey="value" cx="50%" cy="30%" innerRadius={55} outerRadius={80} fill="#82ca9d" label />
                {/* <Legend layout="vertical" verticalAlign="bottom" align="centre" iconType="circle" /> */}
            </PieChart>
            </ResponsiveContainer>
        </div>
            <div style={{position:'absolute',bottom:'0px',width:'100%'}} >
                <div>
                    <ul>
                        {data1.map(item => (
                            <li style={{color:item.fill,margin:'10px',marginLeft:'-30px'}} className="legend-item">
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <span>{item.name}</span>
                                    <span>{item.value}</span>
                            </div></li>
                            
                        ))}
                    </ul>        
                </div>
            </div>
        
    </div> 
    </>
  )
}

export default BreachedChart
