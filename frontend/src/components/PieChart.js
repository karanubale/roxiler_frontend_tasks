import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { fetchPieChartData } from '../api';

const PieChartComponent = ({ month }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const loadChartData = async () => {
            const data = await fetchPieChartData(month);
            setChartData([
                { name: 'Sold', value: data.sold },
                { name: 'Not Sold', value: data.notSold }
            ]);
        };
        loadChartData();
    }, [month]);

    return (
        <PieChart width={400} height={400}>
            <Pie data={chartData} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
                {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#00C49F' : '#FF8042'} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    );
};

export default PieChartComponent;
