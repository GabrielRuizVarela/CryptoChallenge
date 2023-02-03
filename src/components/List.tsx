import CoinData from "../types/CoinData";
import React from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components";

const CryptoContainer = styled(View)`
    flex-direction: row;
    justify-content: space-between;
		align-items: center;
		margin: 0px 24px;
    padding: 30px 0px;
    border-bottom-width: 1px;
    border-color: #e5e5e5;
`;

const CryptoInfo = styled(View)`
    flex-direction: row;
    align-items: center;
`;

const CryptoText = styled(View)`
    margin-left: 10px;
`;

const CryptoName = styled(Text)`
    font-size: 16px;
    font-weight: bold;
`;

const CryptoSymbol = styled(Text)`
    font-size: 14px;
    color: #434343;
`;

const CryptoPrice = styled(View)`
    align-items: flex-end;
`;

const CryptoPriceText = styled(Text)`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 6px;
`;

const CryptoPercent = styled(Text)<{ percent: number }>`
    color:${(props) => (props.percent > 0 ? "rgb(0,115,59)" : "#DD2C00")};
`;
const PercentArrow = styled(View)`
    padding-right: 2px;
`;

export default function List({ item }: { item: CoinData }) {
	return (
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
							<Image source={require("../assets/img/arrow-up.png")} />
						) : (
							<Image source={require("../assets/img/arrow-down.png")} />
						)}
					</PercentArrow>
					<Text>{item.percent}%</Text>
				</CryptoPercent>
			</CryptoPrice>
		</CryptoContainer>
	);
}
