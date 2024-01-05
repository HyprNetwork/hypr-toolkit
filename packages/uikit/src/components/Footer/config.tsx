import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.hyprswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://hyprswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.hyprswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.hyprswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://hyprswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.hyprswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.hyprswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.hyprswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/hyprswap",
      },
      {
        label: "Documentation",
        href: "https://docs.hyprswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@hyprswap-1/s/hyprswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.hyprswap.finance/help/faq#is-hyprswap-safe-has-hyprswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.hyprswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/hypr_network",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/hyprnetwork",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/HyprNetwork",
  },
];
// © 2024 Hypr.     Privacy ｜  Policy ｜ T erms of Use
export const privacyLinks = [
  { label: "© 2024 Hypr.", href: "" },
  {
    label: "Privacy",
    href: "https://www.hypr.network",
  },

  {
    label: "Policy",
    href: "https://www.hypr.network",
  },

  {
    label: "Terms of Use ",
    href: "https://www.hypr.network",
  },

];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
