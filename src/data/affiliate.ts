/**
 * Affiliate-Konfiguration karlsruhe-interaktiv.de
 * Stay22-lmaID ist noch nicht final (TODO: vor Go-Live setzen).
 */
export const affiliate = {
  stay22: {
    lmaId: "68793f7a3fef65b9bc1ce7b5",
    enabled: true,
    mapEmbedId: "",
  },
  getYourGuide: {
    partnerId: "1UPZQQB",
    locale: "de-DE",
    enabled: true,
    cityQuery: "Karlsruhe",
  },
};

export const stay22Enabled =
  affiliate.stay22.enabled && affiliate.stay22.lmaId.length > 0;

export const gygEnabled =
  affiliate.getYourGuide.enabled && affiliate.getYourGuide.partnerId.length > 0;
