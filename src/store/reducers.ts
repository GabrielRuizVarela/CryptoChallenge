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
  },
});

const rootReducer = combineReducers({
  cryptos: fetchSlice.reducer,
});

export default rootReducer;
