import List from '../../components/List';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {fetchCryptoWithSymbol} from '../../store/actions';
import {
  AddCryptoText,
  AvatarImg,
  Title,
  TopBar,
  TouchableAddCrypto,
} from './styles';
import React from 'react';
import {FlatList, View} from 'react-native';

const CryptoList = () => {
  const {cryptos: fetchCrypto} = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  const AddCrypto = () => {
    dispatch(fetchCryptoWithSymbol('btc'));
    dispatch(fetchCryptoWithSymbol('eth'));
    dispatch(fetchCryptoWithSymbol('xrp'));
  };

  return (
    <>
      <TopBar>
        <Title>CryptoTracker Pro</Title>
        <AvatarImg source={{uri: 'https://i.pravatar.cc/100'}} />
      </TopBar>
      <View>
        <FlatList
          data={fetchCrypto}
          renderItem={({item}) => <List item={item} />}
          keyExtractor={({id}) => id}
        />
        <TouchableAddCrypto onPress={AddCrypto}>
          <AddCryptoText>+ Add a Cryptocurrency</AddCryptoText>
        </TouchableAddCrypto>
      </View>
    </>
  );
};

export default CryptoList;
