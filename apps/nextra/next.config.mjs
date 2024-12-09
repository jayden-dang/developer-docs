/* eslint-disable no-undef */
import bundleAnalyzer from "@next/bundle-analyzer";
import nextra from "nextra";
import { i18nConfig } from "./docs.config.js";
import { macros } from "@jayden-dang/aptos-nextra-config";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  latex: {
    options: {
      macros: {
        ...macros,
      },
    },
    renderer: "katex",
  },
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/**
 * @type {import("next").NextConfig}
 */
export default withBundleAnalyzer(
  withNextra({
    eslint: {
      // Eslint behaves weirdly in this monorepo.
      ignoreDuringBuilds: true,
    },
    i18n: {
      locales: Object.keys(i18nConfig).map((locale) => locale),
      defaultLocale: "en",
    },
    distDir: "./.next", // Nextra supports custom `nextConfig.distDir`
    reactStrictMode: true,
    transpilePackages: [
      "@jayden-dang/aptos-nextra-config",
      "@jayden-dang/github-fetch",
    ],
    redirects: async () => [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/aptos",
        destination: "/en/aptos",
        permanent: true,
      },
      {
        source: "/aptos/get-started",
        destination: "/en/aptos/get-started",
        permanent: true,
      },
    ],
  }),
);
