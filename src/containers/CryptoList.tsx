import List from "../components/List";
import CoinData from "../types/CoinData";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

const cryptos: CoinData[] = [
	{
		id: "1",
		name: "Bitcoin",
		symbol: "BTC",
		price: 7215.68,
		percent: 1.82,
		img: require("../assets/img/bitcoin.png"),
	},
	{
		id: "2",
		name: "Ethereum",
		symbol: "ETH",
		price: 146.83,
		percent: 1.46,
		img: require("../assets/img/ethereum.png"),
	},
	{
		id: "3",
		name: "XRP",
		symbol: "XRP",
		price: 0.220568,
		percent: -2.47,
		img: require("../assets/img/xrp.png"),
	},
];

const TopBar = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  padding-top: 40px;
  height: 130px;
  background-color: rgb(51,89,118);
  border-bottom: 1px solid black;
`;
const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const AddCryptoText = styled(Text)`
  font-size: 16px;
  color: rgb(51,89,118);
  text-align: center;
`;

const TouchableAddCrypto = styled(TouchableOpacity)`
  margin: 40px;
`;

export default function CryptoList() {
	return (
		<>
			<TopBar>
				<Title>CryptoTracker Pro</Title>
				<Image source={require("../assets/img/avatar.png")} />
			</TopBar>
			<View>
				<FlatList
					data={cryptos}
					renderItem={({ item }) => <List item={item} />}
					keyExtractor={(item) => item.id}
				/>
				<TouchableAddCrypto>
					<AddCryptoText>+ Add a Cryptocurrency</AddCryptoText>
				</TouchableAddCrypto>
			</View>
		</>
	);
}
