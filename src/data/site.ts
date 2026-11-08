// All site copy lives here. Experience has no dates on purpose.

export interface Entry {
  name: string;
  href?: string;
  role?: string;
  text: string[];
}

export const site = {
  name: 'Nail Abdullin',
  role: 'Software developer',
  location: 'Kazan',
  description:
    'Nail Abdullin is a software developer in Kazan, building the Kuper storefront at ecom.tech and lopper, an open-source CLI for git worktrees.',
  twitter: '@shinokamixx',
};

export const about = [
  'Building interfaces and the products behind them.',
  'Exploring what AI makes possible.',
  'Open to new opportunities.',
];

export const experience: Entry[] = [
  {
    name: 'ecom.tech',
    href: 'https://ecom.tech',
    role: 'Frontend developer',
    text: [
      'Currently working on Kuper, formerly SberMarket, a grocery and restaurant delivery service with over a million customers. I build its customer web storefront in React and TypeScript.',
      'I work on everything customers touch on the way to an order, from search to checkout, and take features from the first spec to release.',
    ],
  },
];

export const projects: Entry[] = [
  {
    name: 'lopper',
    href: 'https://lopper.dev',
    text: [
      'An open-source CLI in Go that finds git worktrees across all your repositories, shows their size and uncommitted changes, and safely removes the ones you no longer need.',
      'Over 1,500 downloads so far. I built the tool and its website.',
    ],
  },
];

export const education: Entry[] = [
  {
    name: 'Kazan Federal University',
    text: ["Bachelor's degree in Applied Mathematics and Computer Science, in progress."],
  },
];

export const links = [
  { label: 'GitHub', href: 'https://github.com/shinokamix' },
  { label: 'X', href: 'https://x.com/shinokamixx' },
  { label: 'Telegram', href: 'https://t.me/shinokamix' },
];
