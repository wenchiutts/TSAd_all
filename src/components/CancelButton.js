import * as React from "react";
import { TouchableOpacity, Image } from "react-native";

const CancelButton = ({ onPress, style }) => {
	return (
		<TouchableOpacity onPress={onPress} style={style}>
			<Image
				style={{ width: 30, height: 30, marginLeft: 16 }}
				source={require("../assets/cancel.png")}
			/>
		</TouchableOpacity>
	);
};

export default CancelButton;
