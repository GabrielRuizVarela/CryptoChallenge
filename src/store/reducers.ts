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
      state.push(action.payload);
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
