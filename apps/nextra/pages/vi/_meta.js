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
        href: "vi/aptos"
      },
      "ton": {
        title: "TON ↗",
        type: "page",
        href: "vi/ton"
      },
      "near": {
        title: "NEAR ↗",
        type: "page",
        href: "vi/near"
      },
      "solana": {
        title: "Solana ↗",
        type: "page",
        href: "vi/solana"
      },
      "sui": {
        title: "Sui ↗",
        type: "page",
        href: "vi/sui"
      },
    }
  },
  "developer-platforms": {
    type: "menu",
    title: "Tài nguyên",
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
