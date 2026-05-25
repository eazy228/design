export type Asset = {
  symbol: string;
  name: string;
  network: string;
  price: number;
  change24h: number;
  spark: number[];
  reserve: number;
  reserveUsd: number;
  onchainUrl: string;
};

export const ASSETS: Asset[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    network: "Bitcoin",
    price: 96432.1,
    change24h: 1.84,
    spark: [94100, 94850, 95210, 94780, 95620, 96100, 96432],
    reserve: 12.4,
    reserveUsd: 1195758,
    onchainUrl: "https://mempool.space/address/bc1q-example",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    network: "Ethereum",
    price: 3284.5,
    change24h: -0.62,
    spark: [3315, 3298, 3270, 3245, 3260, 3275, 3284],
    reserve: 184.7,
    reserveUsd: 606667,
    onchainUrl: "https://etherscan.io/address/0x-example",
  },
  {
    symbol: "USDT",
    name: "Tether",
    network: "TRC-20",
    price: 1.0,
    change24h: 0.01,
    spark: [1, 1.001, 1, 0.999, 1, 1, 1],
    reserve: 482300,
    reserveUsd: 482300,
    onchainUrl: "https://tronscan.org/#/address/T-example",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    network: "Ethereum",
    price: 1.0,
    change24h: -0.02,
    spark: [1.001, 1, 1, 1.002, 1, 1, 1],
    reserve: 218400,
    reserveUsd: 218400,
    onchainUrl: "https://etherscan.io/address/0x-example",
  },
  {
    symbol: "TON",
    name: "Toncoin",
    network: "TON",
    price: 5.12,
    change24h: 3.45,
    spark: [4.91, 4.95, 5.02, 5.18, 5.08, 5.14, 5.12],
    reserve: 28500,
    reserveUsd: 145920,
    onchainUrl: "https://tonscan.org/address/EQ-example",
  },
  {
    symbol: "SOL",
    name: "Solana",
    network: "Solana",
    price: 184.27,
    change24h: 2.18,
    spark: [178, 180, 182, 179, 183, 185, 184.27],
    reserve: 612,
    reserveUsd: 112773,
    onchainUrl: "https://solscan.io/account/example",
  },
  {
    symbol: "XRP",
    name: "Ripple",
    network: "XRP Ledger",
    price: 2.34,
    change24h: -1.12,
    spark: [2.38, 2.36, 2.35, 2.32, 2.33, 2.35, 2.34],
    reserve: 41200,
    reserveUsd: 96408,
    onchainUrl: "https://xrpscan.com/account/example",
  },
  {
    symbol: "BNB",
    name: "BNB",
    network: "BNB Smart Chain",
    price: 612.4,
    change24h: 0.45,
    spark: [608, 610, 613, 609, 611, 614, 612.4],
    reserve: 142,
    reserveUsd: 86961,
    onchainUrl: "https://bscscan.com/address/0x-example",
  },
];

export const POPULAR = ASSETS.slice(0, 8);

export const NETWORKS_BY_ASSET: Record<string, string[]> = {
  BTC: ["Bitcoin", "Lightning"],
  ETH: ["Ethereum", "Arbitrum", "Optimism"],
  USDT: ["TRC-20", "ERC-20", "BEP-20", "TON"],
  USDC: ["Ethereum", "Arbitrum", "Solana", "Base"],
  TON: ["TON"],
  SOL: ["Solana"],
  XRP: ["XRP Ledger"],
  BNB: ["BNB Smart Chain"],
};

export const TOTAL_RESERVE_USD = ASSETS.reduce(
  (sum, a) => sum + a.reserveUsd,
  0
);

export const KPI = {
  volume30dUsd: 18_420_000,
  exchangesCompleted: 142_817,
  uptime: 99.97,
  avgTimeMin: 7,
};
