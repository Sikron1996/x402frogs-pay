import crypto from "crypto";

export default function handler(req, res) {
  const { id } = req.query;
  const nonce = "0x" + crypto.randomBytes(16).toString("hex");

  res.status(402).json({
    x402Version: 1,
    id: "offer-" + id,
    nonce,
    facilitator: "https://facilitator.coinbase.com/x402/confirm",
    accepts: [
      {
        scheme: "exact",
        network: "base",
        resource: "erc20:0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        chain: "base",
        asset: "USDC",
        symbol: "USDC",
        amount: "1000000",
        decimals: 6,
        maxAmountRequired: "true",
        description: "Pay 1 USDC on Base to mint x402frogs collectible",
        mimeType: "application/vnd.x402+json",
        receiver: "0x1DEf6d9E7ba7256dF17d01Bf7D8FA62d82A27Fc4",
        payTo: {
          address: "0x1DEf6d9E7ba7256dF17d01Bf7D8FA62d82A27Fc4",
          chain: "base"
        },
        maxTimeoutSeconds: 600
      }
    ],
    metadata: {
      name: "x402frogs #" + id,
      description:
        "Mint x402frogs collectible for 1 USDC (via Coinbase Facilitator)",
      image:
        "https://ipfs.io/ipfs/QmepBFK4YT8KwB4GNg3pwBdtDJy8kr8RtPgURTBdqt8fV8/1.png"
    }
  });
}
