import List from '../../components/List/List';
import CoinData from '../../types/CoinData';
import {
  AddCryptoText,
  AvatarImg,
  Title,
  TopBar,
  TouchableAddCrypto,
} from './styles';
import React from 'react';
import {FlatList, View} from 'react-native';

// TODO: Replace when calling API
const Bitcoin = require('../../assets/img/bitcoin.png');
const Ethereum = require('../../assets/img/ethereum.png');
const XRP = require('../../assets/img/xrp.png');

const cryptos: CoinData[] = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 7215.68,
    percent: 1.82,
    img: Bitcoin,
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 146.83,
    percent: 1.46,
    img: Ethereum,
  },
  {
    id: '3',
    name: 'XRP',
    symbol: 'XRP',
    price: 0.220568,
    percent: -2.47,
    img: XRP,
  },
];

const CryptoList = () => (
  <>
    <TopBar>
      <Title>CryptoTracker Pro</Title>
      <AvatarImg source={{uri: 'https://i.pravatar.cc/100'}} />
    </TopBar>
    <View>
      <FlatList
        data={cryptos}
        renderItem={({item}) => <List item={item} />}
        keyExtractor={({id}) => id}
      />
      <TouchableAddCrypto>
        <AddCryptoText>+ Add a Cryptocurrency</AddCryptoText>
      </TouchableAddCrypto>
    </View>
  </>
);

export default CryptoList;
