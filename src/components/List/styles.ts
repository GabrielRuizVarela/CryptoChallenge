import {Image, Text, View} from 'react-native';
import {Platform} from 'react-native';
import styled from 'styled-components';

export const CryptoContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 24px;
  padding: 30px 0px;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.colors.gray};
`;

export const CryptoInfo = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const SymbolImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

export const CryptoText = styled(View)`
  margin-left: 10px;
`;

export const CryptoName = styled(Text)`
  font-size: 16px;
  font-weight: ${Platform.OS === 'ios' ? '600' : '800'};
`;

export const CryptoSymbol = styled(Text)`
  font-size: 14px;
  color: ${({theme}) => theme.colors.darkGray};
`;

export const CryptoPrice = styled(View)`
  align-items: flex-end;
`;

export const CryptoPriceText = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const CryptoPercent = styled(Text)<{percent: number}>`
  color: ${({percent, theme}) =>
    percent > 0 ? theme.colors.green : theme.colors.red};
`;
export const PercentArrow = styled(View)`
  padding-right: 2px;
`;
