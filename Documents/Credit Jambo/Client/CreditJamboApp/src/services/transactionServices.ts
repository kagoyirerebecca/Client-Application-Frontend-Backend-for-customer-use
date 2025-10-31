import api from './api';

export const deposit = (amount: number) => api.post('/transactions/deposit', { amount });
export const withdraw = (amount: number) => api.post('/transactions/withdraw', { amount });
export const getTransactions = () => api.get('/transactions');
