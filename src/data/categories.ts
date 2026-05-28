export type Category = {
  slug: string;
  name: string;
  shortDesc: string;
  icon: string;
};

export const categories: Category[] = [
  { slug: "tech-innovation", name: "Tech & Innovation", shortDesc: "KIT, FZI, CyberForum — Karlsruhes Tech-DNA", icon: "chip" },
  { slug: "kunst-medien", name: "Kunst & Medien", shortDesc: "ZKM, Kunsthalle, Medienkunst weltweit", icon: "palette" },
  { slug: "wissenschaft", name: "Wissenschaft", shortDesc: "KIT, Forschungszentren, Universitaeten", icon: "atom" },
  { slug: "wahrzeichen", name: "Wahrzeichen", shortDesc: "Schloss, Pyramide, Turmberg & Co", icon: "landmark" },
  { slug: "museen", name: "Museen", shortDesc: "Von Kunst bis Naturkunde", icon: "museum" },
  { slug: "parks", name: "Parks & Gruen", shortDesc: "Schlossgarten, Stadtgarten, Hardtwald", icon: "tree" },
  { slug: "familie", name: "Familie", shortDesc: "Mit Kindern unterwegs in Karlsruhe", icon: "family" },
  { slug: "recht", name: "Recht", shortDesc: "Bundesverfassungsgericht & BGH", icon: "scale" },
  { slug: "historische-architektur", name: "Historisches", shortDesc: "Barock, Klassizismus, Markgrafen", icon: "building" },
  { slug: "nightlife", name: "Nightlife", shortDesc: "Bars, Clubs, Konzerthaeuser", icon: "moon" },
  { slug: "shopping", name: "Shopping", shortDesc: "Kaiserstrasse, Ettlinger Tor, Postgalerie", icon: "shopping" },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
