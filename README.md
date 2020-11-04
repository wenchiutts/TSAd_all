# tsad_all

### Install

```
yarn add git+https://github.com/wenchiutts/TSAd_all.git
```

### Usage

### Import

```
import { TSAdBanner, TSAdFullScreen, useAdModal } from "tsad_all";
```

#### TSAdBanner

```
<TSAdBanner
  title="Reports for Instagram"
  subtitle="Ins Master 🚀"
  scrollBannerContent={scrollBannerContent}
  style={{
    position: "absolute",
    bottom: 5,
    maxWidth: "100%",
  }}
  iconSource={{
    uri:
      "https://firebasestorage.googleapis.com/v0/b/ins-reports-prod.appspot.com/o/Logo-3.png?alt=media",
  }}
  linkUrl="https://play.google.com/store/apps/details?id=com.ins.reports.analyzer.insta.followers.tracker"
/>

const scrollBannerContent = [
	{ text: "1.Find out who unfollowed you on Instagram.View Instagram stories anonymously.Know who blocked you on Instagram." },
	{ text: "2.View Instagram stories anonymously.Know who blocked you on Instagram." },
	{ text: "3.Instagram stories anonymously.Know who blocked you on Instagram." },
	{ text:	"4.View Instagram stories anonymously.Know who blocked you on Instagram." },
	{ text: "5.Instagram stories anonymously.Know who blocked you on Instagram." },
];
```

#### TSAdFullScreen

```
const { openAd, ...adConfig } = useAdModal({
		iconSource: {
			uri:
				"https://firebasestorage.googleapis.com/v0/b/ins-reports-prod.appspot.com/o/Logo-3.png?alt=media",
		},
		mediaSource:
			"https://firebasestorage.googleapis.com/v0/b/ins-reports-prod.appspot.com/o/inappads.mp4?alt=media",
		linkUrl:
			"https://play.google.com/store/apps/details?id=com.ins.reports.analyzer.insta.followers.tracker",
	});

<TSAdFullScreen {...adConfig} />

<Button  title="button"  onPress={() => openAd()}	/>
```
