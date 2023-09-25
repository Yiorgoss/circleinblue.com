export const siteConfig = {
  name: "Skateshop13",
  description:
    "An open source e-commerce skateshop build with everything new in Next.js 13.",
  url: "https://skateshop.sadmn.com",
  ogImage: "https://skateshop.sadmn.com/opengraph-image.png",
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
    { title: "linkedin", href: "linkedin-url" },
    { title: "instagram", href: "instagram-url" },
  ],
  nav: [
    { title: "Privacy", href: sitemap.privacy },
    { title: "Terms And Condition", href: sitemap.termsAndConditions },
  ],
};
export const contactEmails = {
  artists: "artists@circleinblue.com",
  partnerships: "partnerships@circleinblue.com",
  sales: "sales@circleinblue.com",
};
