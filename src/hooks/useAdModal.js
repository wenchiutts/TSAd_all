import { useState } from "react";

const useAdModal = ({ iconSource, mediaSource, linkUrl }) => {
	const [isVisible, setIsVisible] = useState(false);
	return {
		isVisible,
		setIsVisible,
		iconSource,
		mediaSource,
		linkUrl,
		openAd: () => setIsVisible(true),
	};
};

export default useAdModal;
