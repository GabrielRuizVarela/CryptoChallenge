import {createAsyncThunk} from '@reduxjs/toolkit';

const API_URL = (symbol: string) =>
  `https://data.messari.io/api/v1/assets/${symbol}/metrics`;

export const fetchCryptoWithSymbol = createAsyncThunk(
  'fetchCryptoWithSymbol',
  async (symbol: string) => {
    const response = await fetch(API_URL(symbol));
    const data = await response.json();
    return data;
  },
);
