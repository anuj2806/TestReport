import React from 'react';
import { Funnel, FunnelChart, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';


const TotalCasesChart = () => {
  const data = [
    {
      "value": 100,
      "name": "Punjabi Bagh",
      "fill": "#4285F4"
    },
    {
      "value": 80,
      "name": "Saket",
      "fill": "#5BC0DE"
    },
    {
      "value": 60,
      "name": "Green Park",
      "fill": "#FA8072"
    },
    {
      "value": 40,
      "name": "New Friends Colony",
      "fill": "#FFD700"
    },
    {
      "value": 20,
      "name": "Noida",
      "fill": "#98FB98"
    }
  ];

  // Calculate the total value
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <>
    <h3 style={{fontFamily:'Epilogue', fontWeight:'700'}}>Portfolio Health</h3>
    <div style={{height: 200}}>
        <div style={{position:'relative'}}>
            <div style={{ width:'80%', height: 200 }}>
            <ResponsiveContainer>
                <FunnelChart >
                <Tooltip />
                <Funnel
                    dataKey="value"
                    data={data}
                    isAnimationActive
                    width={400} 
                >
                    <LabelList position="centre" fill="#000" stroke="none" dataKey="value"/>
                </Funnel>
                </FunnelChart>
            </ResponsiveContainer>
            </div>
            <div style={{position:'absolute',right:'10px',top:'50px'}}>
                <div>
                    <ul>
                        {data.map(item => (
                            <li style={{color:item.fill,fontFamily:'Inter'}} className="legend-item">{item.name}</li>
                        ))}
                    </ul>        
                </div>
            </div>
            <text
            dominantBaseline="middle"
            style={{ fontSize: '16px', fontWeight: 'bold',marginLeft:'33%'}}
          >
            Total {totalValue}
        </text>
        </div>
        
    </div>
    
    </>
  );
}

export default TotalCasesChart;
