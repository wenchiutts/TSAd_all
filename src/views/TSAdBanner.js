import * as React from "react";
import { ScrollView } from "react-native";
import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import Colors from "../constants/Colors";
import { isExist, mapIndexed } from "../utils/ramdaUtils";

let textAreaHeight = 52.4;

const getTextAreaHeight = (e) => {
	let { height } = e.nativeEvent.layout;
	textAreaHeight = height;
};

// TS = TouShih ad banner
const TSAdBanner = ({
	style = {},
	iconSource = {
		uri:
			"https://firebasestorage.googleapis.com/v0/b/ins-reports-prod.appspot.com/o/Logo-3.png?alt=media",
	},
	title = "Reports for Instagram",
	subtitle = "Ins Master 🚀",
	linkUrl,
	scrollBannerContent,
}) => {
	const scrollviewRef = React.useRef();

	React.useEffect(() => {
		if (isExist(scrollBannerContent)) {
			let currentY = 0;

			let interval = setInterval(() => {
				scrollviewRef?.current.scrollTo({ y: currentY, animated: true });
				currentY += textAreaHeight;
				if (currentY > scrollBannerContent.length * textAreaHeight) {
					scrollviewRef?.current.scrollTo({ y: 0, animated: false });
					currentY = 0;
				}
			}, 3000);
			return () => clearInterval(interval);
		}
	}, []);

	return (
		<Container
			style={style}
			onPress={async () => {
				const supported = Linking.canOpenURL(linkUrl);
				if (supported) {
					Linking.openURL(linkUrl);
				}
			}}
		>
			<IconImage source={iconSource} />
			{isExist(scrollBannerContent) ? (
				<ScrollView ref={scrollviewRef} showsVerticalScrollIndicator={false}>
					<TextArea
						style={{
							marginLeft: 16,
							width: "60%",
							maxWidth: "60%",
							height: 53,
						}}
						title={title}
						subtitle={subtitle}
					/>
					{mapIndexed((content, idx) => (
						<ContentTextArea
							key={idx}
							style={{
								marginLeft: 16,
								width: "85%",
								maxWidth: "85%",
								height: 53,
								overFlow: "hidden",
							}}
							text={content.text}
						/>
					))(scrollBannerContent)}
				</ScrollView>
			) : (
				<TextArea
					style={{
						marginLeft: 16,
						width: "60%",
						maxWidth: "60%",
					}}
					title={title}
					subtitle={subtitle}
				/>
			)}
			<ActionButton source={require("../assets/download.png")} />
			<AdText>Ad Sponsored</AdText>
		</Container>
	);
};

export default TSAdBanner;

const Container = styled(TouchableOpacity)`
	width: 100%;
	height: 88;
	border-radius: 12;
	background-color: ${Colors.lightBlue};
	padding-left: 20;
	padding-right: 20;
	padding-top: 18;
	padding-bottom: 17;
	flex-direction: row;
	justify-content: space-between;
`;

const IconImage = styled(Image)`
	width: 49;
	height: 49;
	background-color: #000000;
	border-radius: 10;
`;

const Title = styled(Text)`
	font-size: 14;
	color: ${Colors.screenBackground};
`;

const SubTitle = styled(Text)`
	font-weight: bold;
	font-size: 14;
	color: ${Colors.screenBackground};
`;

const TextArea = ({ style = {}, title, subtitle }) => {
	return (
		<View
			style={{
				...style,
			}}
		>
			<Title numberOfLines={1} ellipsizeMode="tail">
				{title}
			</Title>
			<SubTitle numberOfLines={1} ellipsizeMode="tail">
				{subtitle}
			</SubTitle>
		</View>
	);
};

const ActionButton = styled(Image)`
	width: 48;
	height: 48;
	border-radius: 24;
	background-color: #000000;
`;

const AdText = styled(Text)`
	color: ${Colors.gray};
	position: absolute;
	top: -1;
	right: 10;
	font-size: 7;
`;

const ContentTextArea = ({ style = {}, text }) => (
	<View
		style={{
			...style,
		}}
		onLayout={(e) => getTextAreaHeight(e)}
	>
		<Title numberOfLines={3} ellipsizeMode="tail">
			{text}
		</Title>
	</View>
);
