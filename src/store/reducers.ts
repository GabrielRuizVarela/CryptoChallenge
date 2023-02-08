import CoinData from '../types/CoinData';
import {fetchCryptoWithSymbol} from './actions';
import {combineReducers, createSlice} from '@reduxjs/toolkit';

const initialState: CoinData[] = [];

const fetchSlice = createSlice({
  name: 'fetchCrypto',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCryptoWithSymbol.fulfilled, (state, action) => {
      const {data} = action.payload;
      const formatedData: CoinData = {
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        price: data.market_data.price_usd.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        }),
        percent: data.market_data.percent_change_usd_last_24_hours.toFixed(2),
        img: `https://messari.io/asset-images/${data.id}/128.png`,
      };
      state.push(formatedData);
    });
    builder.addCase(fetchCryptoWithSymbol.rejected, (state, action) => {
      console.log(action.error.message); // TODO: Add error handling
    });
    builder.addCase(fetchCryptoWithSymbol.pending, () => {
      console.log('Loading...'); // TODO: Add loading state
    });
    builder.addCase(fetchCryptoWithSymbol.rejected, (state, action) => {
      console.log(action.error.message); // TODO: Add error handling
    });
    builder.addCase(fetchCryptoWithSymbol.pending, () => {
      console.log('Loading...'); // TODO: Add loading state
    });
  },
});

const rootReducer = combineReducers({
  cryptos: fetchSlice.reducer,
});

export default rootReducer;
