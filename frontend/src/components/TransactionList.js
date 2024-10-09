import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../api';
import '../table.css'
const TransactionList = ({ month, search }) => {
    const [transactions, setTransactions] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage] = useState(10);

    useEffect(() => {
        const loadTransactions = async () => {
            const data = await fetchTransactions(search, page, perPage, month);
            setTransactions(data.transactions);
        };
        loadTransactions();
    }, [search, page, month]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Sold</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.title}</td>
                            <td>{transaction.description}</td>
                            <td>${transaction.price}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.sold ? 'Sold' : 'Not Sold'}</td>
                            <td><img src={transaction.image} alt={transaction.title} width={50} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
    <div className="pagination-container">
        <span className="page-number">Page No: {page}</span>

        <div className="pagination-buttons">
            <button onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Previous</button>
            <button onClick={() => setPage(prev => prev + 1)}>Next</button>
        </div>

        <span className="per-page">Per Page: {perPage}</span>
    </div>
</div>



        </div>
    );
};

export default TransactionList;
