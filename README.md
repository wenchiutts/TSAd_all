# TSAd_all

### Usage

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
```


#### TSAdFullScreen
```
const [openFullScreen, setOpenFullScreen] = React.useState(false);

{openFullScreen ? (
  <TSAdFullScreen
    openFullScreen={openFullScreen}
    setOpenFullScreen={setOpenFullScreen}
    iconSource={{
      uri:
        "https://firebasestorage.googleapis.com/v0/b/ins-reports-prod.appspot.com/o/Logo-3.png?alt=media",
    }}
    mediaSource="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
    linkUrl="https://play.google.com/store/apps/details?id=com.ins.reports.analyzer.insta.followers.tracker"
  />
) : null}
```
