export const adsense = {
  publisherId: "ca-pub-7432388986384363",
  enabled: true,
  slots: {
    newsInArticle: "",
    districtSidebar: "",
    sightsFooter: "",
  },
};

export const adsenseEnabled =
  adsense.enabled && adsense.publisherId.length > 0;
