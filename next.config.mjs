import nextra from "nextra";

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  contentDirBasePath: "/",
  unstable_shouldAddLocaleToLinks: true,
});

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/wucai-code" : "";

export default withNextra({
  reactStrictMode: true,
  basePath: assetPrefix,
  assetPrefix: assetPrefix,
  i18n: {
    locales: ["zh"],
    defaultLocale: "zh",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
});
