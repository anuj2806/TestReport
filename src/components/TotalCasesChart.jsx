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
      <h3 >Portfolio Health</h3>
      <div>
        <div style={{position:'relative'}}>
      <div style={{  height: 200 }}>
      <ResponsiveContainer>
        <FunnelChart >
          <Tooltip />
          <Funnel
            dataKey="value"
            data={data}
            isAnimationActive
            width={400} 
          >
            {/* <LabelList position="right" fill="#000" stroke="none" dataKey="name" /> */}
            <LabelList position="centre" fill="#000" stroke="none" dataKey="value"/>
          </Funnel>
          {/* <Legend layout="vertical" verticalAlign="centre" align="right" payload={data.map(item => ({ value: item.name, type: 'circle', color: item.fill }))} /> */}
        </FunnelChart>
      </ResponsiveContainer>
      </div>
      <div style={{position:'absolute'}}>
                <div>
                        <ul><li>Name</li></ul>

                </div>
      </div>
      </div>
      <text
            
            
            dominantBaseline="middle"
            style={{ fontSize: '16px', fontWeight: 'bold',marginLeft:'30%'}}
          >
            Total {totalValue}
          </text>
    </div>
    
    </>
  );
}

export default TotalCasesChart;
