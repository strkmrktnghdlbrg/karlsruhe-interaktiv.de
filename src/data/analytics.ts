/**
 * Tracking-Konfiguration.
 *
 * Geladen wird ausschliesslich der GTM-Container (BaseLayout). GA4 haengt in
 * diesem Container und wird NICHT separat per gtag eingebunden - die Mess-ID
 * steht hier nur als Dokumentation, damit Repo und Property zuordenbar sind.
 *
 * GA4-Property "karlsruhe-interaktiv.de": 539437121 (Konto WEBMAGICS Projects),
 * Datenstream 14966723677. Geprueft am 23.08.2026: Datenerhebung aktiv.
 */
export const analytics = {
  gtmId: "GTM-KXB7ZP9W",
  /** Nur Dokumentation - eingebunden wird GA4 ueber den GTM-Container. */
  ga4MeasurementId: "G-MGGLQFSETM",
  ga4PropertyId: "539437121",
  enabled: true,
};

export const gtmEnabled = analytics.enabled && analytics.gtmId.length > 0;
