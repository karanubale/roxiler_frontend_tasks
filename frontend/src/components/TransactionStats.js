import React, { useEffect, useState } from 'react';
import { fetchTransactionStats } from '../api';
import "../transactionstats.css"
const TransactionStats = ({ month }) => {
    const [stats, setStats] = useState({ totalSale: 0, totalSoldItems: 0, totalNotSoldItems: 0 });

    useEffect(() => {
        const loadStats = async () => {
            const data = await fetchTransactionStats(month);
            setStats(data);
        };
        loadStats();
    }, [month]);
    
    const getMonthName = (month) => {
        const monthNames = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];
        return monthNames[month - 1]; 
    };

    return (
        <div className="transaction-stats">
            <h2>Statistics - {getMonthName(month)}</h2>
            <div className="stats-box">
                <p>Total sale - {stats.totalSale}</p>
                <p>Total sold item - {stats.totalSoldItems}</p>
                <p>Total not sold item - {stats.totalNotSoldItems}</p>
            </div>
        </div>
    );
};


export default TransactionStats;
