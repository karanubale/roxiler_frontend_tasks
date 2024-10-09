import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; 

export const fetchTransactions = async (search = '', page = 1, perPage = 10, month) => {
    const response = await axios.get(`${API_BASE_URL}/transactions`, {
        params: { search, page, perPage, month }
    });
    return response.data;
};

export const fetchTransactionStats = async (month) => {
    const response = await axios.get(`${API_BASE_URL}/transactions/stats`, {
        params: { month }
    });
    return response.data;
};

export const fetchBarChartData = async (month) => {
    const response = await axios.get(`${API_BASE_URL}/transactions/bar-chart`, {
        params: { month }
    });
    return response.data;
};

export const fetchPieChartData = async (month) => {
    const response = await axios.get(`${API_BASE_URL}/transactions/pie-chart`, {
        params: { month }
    });
    return response.data;
};
