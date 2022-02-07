module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
  },
  images: {
    domains: ["cdn.shopify.com", "i5.walmartimages.com", "links.papareact.com", "images.unsplash.com", "solocienadventures.com"],
  },
};
