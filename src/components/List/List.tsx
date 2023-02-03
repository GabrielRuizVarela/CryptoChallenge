import CoinData from '../../types/CoinData';
import {
  CryptoContainer,
  CryptoInfo,
  CryptoName,
  CryptoPercent,
  CryptoPrice,
  CryptoPriceText,
  CryptoSymbol,
  CryptoText,
  PercentArrow,
} from './styles';
import React from 'react';
import {Image, Text} from 'react-native';

// TODO: Replace when calling API
const arrowDown = require('../../assets/img/arrow-down.png');
const arrowUp = require('../../assets/img/arrow-up.png');

const List = ({item}: {item: CoinData}) => (
  <CryptoContainer>
    <CryptoInfo>
      <Image source={item.img} />
      <CryptoText>
        <CryptoName>{item.name}</CryptoName>
        <CryptoSymbol>{item.symbol}</CryptoSymbol>
      </CryptoText>
    </CryptoInfo>
    <CryptoPrice>
      <CryptoPriceText>${item.price}</CryptoPriceText>
      <CryptoPercent percent={item.percent}>
        <PercentArrow>
          {item.percent > 0 ? (
            <Image source={arrowUp} />
          ) : (
            <Image source={arrowDown} />
          )}
        </PercentArrow>
        <Text>{item.percent}%</Text>
      </CryptoPercent>
    </CryptoPrice>
  </CryptoContainer>
);

export default List;
