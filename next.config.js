module.exports = {
  optimizeFonts: false,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
    mapbox_key:
      "pk.eyJ1IjoiemF5bmUiLCJhIjoiY2t6ZGVlN3psMnhhNTJvbXpsMWNzeWd4NCJ9.IAVrOei3t_0Kzs21XA4Gxw",
    stripe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    CHATAPP_ID: "d2b8ed65-207a-43e3-b5f0-6542d162e257",
    CHATAPP_KEY: "084302e0-aaa8-4e87-920f-f39d4881599c",
  },
  images: {
    domains: [
      "cdn.shopify.com",
      "i5.walmartimages.com",
      "links.papareact.com",
      "images.unsplash.com",
      "solocienadventures.com",
    ],
  },
};
