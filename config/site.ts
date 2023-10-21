export const siteConfig = {
  name: "Circle In Blue",
  description: "Helping Artists connect with Collectors",
  url: "https://www.circleinblue.com",
  ogImage: "https://www.circleinblue.com/opengraph-image.png",
};

export const sitemap = {
  home: "/",
  artists: "/artists",
  galleries: "/gallery-partners",
  aboutUs: "/who-we-are",
  contactUs: "/contact-us",
  privacy: "/privacy-policy",
  termsAndConditions: "/terms-and-conditions",
};
export const mainNav = [
  { title: "Home", href: sitemap.home },
  { title: "Our Artists", href: sitemap.artists },
  { title: "Our Galleries", href: sitemap.galleries },
  { title: "Our Story", href: sitemap.aboutUs },
  { title: "Contact Us", href: sitemap.contactUs },
];
export const footer = {
  socials: [
    {
      title: "instagram",
      href: "https://www.instagram.com/circle_in_blue/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
    },
    { title: "linkedin", href: "#" },
  ],
  nav: [
    { title: "Privacy", href: sitemap.privacy },
    { title: "Terms & Conditions", href: sitemap.termsAndConditions },
  ],
};
export const contactEmails = {
  artists: "artists@circleinblue.com",
  partnerships: "partnerships@circleinblue.com",
  sales: "sales@circleinblue.com",
};
