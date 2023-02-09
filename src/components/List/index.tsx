import arrowDown from '../../assets/img/arrow-down.png';
import arrowUp from '../../assets/img/arrow-up.png';
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
  SymbolImage,
} from './styles';
import React from 'react';
import {Image, Text} from 'react-native';

const List = ({item}: {item: CoinData}) => (
  <CryptoContainer>
    <CryptoInfo>
      <SymbolImage source={{uri: item.img}} />
      <CryptoText>
        <CryptoName>{item.name}</CryptoName>
        <CryptoSymbol>{item.symbol}</CryptoSymbol>
      </CryptoText>
    </CryptoInfo>
    <CryptoPrice>
      <CryptoPriceText>{item.price}</CryptoPriceText>
      <CryptoPercent percent={item.percent}>
        <PercentArrow>
          <Image source={item.percent > 0 ? arrowUp : arrowDown} />
        </PercentArrow>
        <Text>{item.percent}%</Text>
      </CryptoPercent>
    </CryptoPrice>
  </CryptoContainer>
);

export default List;
