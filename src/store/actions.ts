import CoinData from '../types/CoinData';
import {createAsyncThunk} from '@reduxjs/toolkit';

const API_URL = (symbol: string) =>
  `https://data.messari.io/api/v1/assets/${symbol}/metrics`;

export const fetchCryptoWithSymbol = createAsyncThunk(
  'fetchCryptoWithSymbol',
  async (symbol: string) => {
    const response = await fetch(API_URL(symbol));
    const data = await response.json();
    const formatedData: CoinData = {
      id: data.data.id,
      name: data.data.name,
      symbol: data.data.symbol,
      price: data.data.market_data.price_usd.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      }),
      percent:
        data.data.market_data.percent_change_usd_last_24_hours.toFixed(2),
      img: `https://messari.io/asset-images/${data.data.id}/128.png`,
    };
    return formatedData;
  },
);
