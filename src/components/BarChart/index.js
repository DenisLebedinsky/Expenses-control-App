import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default ({data})=> {

    return (
      <div className=' container d-flex justify-content-center'>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="expenses" fill="#8884d8" />
        <Bar dataKey="incomes" fill="#82ca9d" />
      </BarChart>
      </div>
    );
  
}
