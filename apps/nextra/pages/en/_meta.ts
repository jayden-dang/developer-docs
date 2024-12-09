export default {
  index: {
    title: "Introduction",
    type: "page",
    display: "hidden",
    theme: {
      layout: "raw",
      footer: null,
    },
  },
  "other-chain": {
    type: "menu",
    title: "Other Chain",
    items: {
      "aptos": {
        title: "Aptos ↗",
        type: "page",
        href: "en/aptos"
      },
      "ton": {
        title: "TON ↗",
        type: "page",
        href: "en/ton"
      },
      "near": {
        title: "NEAR ↗",
        type: "page",
        href: "en/near"
      },
      "solana": {
        title: "Solana ↗",
        type: "page",
        href: "en/solana"
      },
      "sui": {
        title: "Sui ↗",
        type: "page",
        href: "en/sui"
      },
    }
  },
  "developer-platforms": {
    type: "menu",
    title: "Additional Resources",
    items: {
      youtube: {
        type: "page",
        title: "Youtube Channel ↗",
        href: "https://youtube.com/@jaydendangvu",
        newWindow: true,
      },
      blog: {
        title: "Blog ↗",
        href: "https://jaydendang.com",
        newWindow: true,
        type: "page",
      }
    },
  },
};
