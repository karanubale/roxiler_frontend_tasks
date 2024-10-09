import React, { useState } from 'react';
import TransactionList from './components/TransactionList';
import TransactionStats from './components/TransactionStats';
import BarChartComponent from './components/BarChart';
import PieChartComponent from './components/PieChart'; 
import './App.css';

const App = () => {
    const [month, setMonth] = useState('3');
    const [search, setSearch] = useState('');

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
    };

    const getMonthName = (month) => {
        const monthNames = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];
        return monthNames[month - 1];
    };

    return (
        <div className="dashboard-container">
            <h1>Transaction Dashboard</h1>

            <div className="controls">
                <input
                    type="text"
                    placeholder="Search transaction"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select value={month} onChange={handleMonthChange}>
                    <option value='1'>January</option>
                    <option value='2'>February</option>
                    <option value='3'>March</option>
                    <option value='4'>April</option>
                    <option value='5'>May</option>
                    <option value='6'>June</option>
                    <option value='7'>July</option>
                    <option value='8'>August</option>
                    <option value='9'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                </select>
            </div>

            <TransactionList month={month} search={search} />

            <TransactionStats month={month} />

            <div className="stats-section">
                <h2>Bar Chart Stats - {getMonthName(month)}</h2>
                <BarChartComponent month={month} />
            </div>
            <div className="stats-section2">
                <h3>Pie Chart Stats - {getMonthName(month)}</h3>
                <PieChartComponent month={month} />
            </div>
        </div>
    );
};

export default App;
