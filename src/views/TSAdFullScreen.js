import * as React from "react";
import {
	Platform,
	View,
	Text,
	TouchableOpacity,
	Dimensions,
	Animated,
	Easing,
	Modal as NativeModal,
} from "react-native";
import styled from "styled-components/native";
import { Video } from "expo-av";
// import * as Progress from "react-native-progress";
import WebModal from "modal-enhanced-react-native-web";

import Colors from "../constants/Colors";
import TSAdBanner from "./TSAdBanner";
import CancelButton from "../components/CancelButton";

const Modal = Platform.select({
	web: WebModal,
	default: NativeModal,
});

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const StyledTSAdBanner = styled(TSAdBanner)`
	width: ${screenWidth * 0.8};
	max-width: 300;
	height: 86;
	position: absolute;
	bottom: 0;
	left: 50%;
	elevation: 3;
`;

const ContentContainer = styled(View)`
	width: ${screenWidth * 0.9};
	height: ${(screenHeight - 45) * 0.9};
	max-width: 360;
	max-height: 960;
	background-color: #030303;
`;

const CountingdownButton = ({ countNum, setCountNum }) => {
	// const progress = React.useRef(new Animated.Value(0)).current;

	React.useEffect(() => {
		// progress.setValue(0);
		// Animated.timing(progress, {
		// 	toValue: 1,
		// 	duration: 5000,
		// 	useNativeDriver: false,
		// 	easing: Easing.linear,
		// }).start();
		setCountNum(5);
		let interval = setInterval(() => setCountNum((prev) => prev - 1), 1000);
		setTimeout(() => clearInterval(interval), 5800);
	}, []);

	return (
		<StyledButton>
			{/* <Progress.Circle
				size={32}
				style={{ position: "absolute" }}
				borderWidth={0}
				color={Colors.purple}
				progress={progress._value}
				thickness={4}
			/> */}
			<RoundView></RoundView>
			<StyledText>{countNum}</StyledText>
		</StyledButton>
	);
};

const RoundView = styled(View)`
	position: absolute;
	width: 36;
	height: 36;
	border-radius: 18;
	border-width: 4;
	border-color: ${Colors.purple};
	background-color: transparent;
`;

const StyledText = styled(Text)`
	font-size: 14;
	font-weight: bold;
	color: ${Colors.screenBackground};
`;

const StyledButton = styled(TouchableOpacity)`
	position: absolute;
	top: 10;
	left: 16;
	width: 32;
	height: 32;
	border-radius: 16;
	background-color: white;
	justify-content: center;
	align-items: center;
`;

const ButtonWrapper = styled(View)`
	position: relative;
`;

const TSAdFullScreen = ({
	isVisible,
	setIsVisible,
	mediaSource = "https://firebasestorage.googleapis.com/v0/b/ins-reports-prod.appspot.com/o/inappads.mp4?alt=media",
	iconSource = {
		uri:
			"https://firebasestorage.googleapis.com/v0/b/ins-reports-prod.appspot.com/o/Logo-3.png?alt=media",
	},
	linkUrl = "https://play.google.com/store/apps/details?id=com.ins.reports.analyzer.insta.followers.tracker",
}) => {
	const [countNum, setCountNum] = React.useState(5);

	React.useEffect(() => {
		isVisible && setCountNum(5);
	}, [isVisible]);

	return (
		<Modal visible={isVisible}>
			<View
				style={{
					backgroundColor: "#030303",
					position: "absolute",
					top: 0,
					maxWidth: 540,
					maxHeight: 960,
				}}
			>
				<ButtonWrapper>
					<CancelButton
						onPress={() => setIsVisible(false)}
						style={{ marginTop: 10, marginBottom: 5 }}
					/>
					{countNum !== 0 && (
						<CountingdownButton countNum={countNum} setCountNum={setCountNum} />
					)}
				</ButtonWrapper>
				<ContentContainer>
					{isVisible ? (
						<Video
							source={{ uri: mediaSource }}
							rate={1.0}
							volume={1.0}
							resizeMode="cover"
							shouldPlay={isVisible}
							isLooping
							style={{
								width: "100%",
								height: "100%",
								maxWidth: 540,
								maxHeight: 960,
							}}
						/>
					) : null}
					<StyledTSAdBanner
						style={{
							transform: [
								{ translateX: -Math.min((screenWidth * 0.8) / 2, 150) },
							],
						}}
						iconSource={iconSource}
						linkUrl={linkUrl}
					/>
				</ContentContainer>
			</View>
		</Modal>
	);
};

export default TSAdFullScreen;
