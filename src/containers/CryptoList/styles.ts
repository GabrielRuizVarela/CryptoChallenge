import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

export const TopBar = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 60px 24px 34px 24px;
  background-color: ${({theme}) => theme.colors.primary};
  border-bottom: 1px solid black;
`;
export const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const AvatarImg = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

export const AddCryptoText = styled(Text)`
  font-size: 16px;
  color: ${({theme}) => theme.colors.primary};
  text-align: center;
`;

export const TouchableAddCrypto = styled(TouchableOpacity)`
  margin: 40px;
`;
