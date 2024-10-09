import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { fetchBarChartData } from '../api';

const BarChartComponent = ({ month }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const loadChartData = async () => {
            const data = await fetchBarChartData(month);
            setChartData(data);
        };
        loadChartData();
    }, [month]);

    return (
        <BarChart
            width={800}
            height={300}
            data={chartData}
            barSize={20}
            barCategoryGap={10} 
        >
            <XAxis
                dataKey="range"
                interval={0}

            />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
    );
};

export default BarChartComponent;
