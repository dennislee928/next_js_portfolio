"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cryptoExchanges = [
  {
    id: 1,
    name: "Binance",
    description: "全球最大加密貨幣交易所 | World's largest crypto exchange",
    link: "https://www.binance.com/activity/referral-entry/CPA?ref=CPA_00KHVVTLDU",
    color: "#F3BA2F",
  },
  {
    id: 2,
    name: "Bybit",
    description: "專業衍生品交易平台 | Professional derivatives trading",
    link: "https://www.bybit.com/invite?ref=KQKYYYB",
    color: "#F7A600",
  },
  {
    id: 3,
    name: "OKX",
    description: "多元化加密資產交易 | Diverse crypto asset trading",
    link: "https://okx.com/join/69095600",
    color: "#000000",
  },
  {
    id: 4,
    name: "Gate.io",
    description: "創新型數字資產交易所 | Innovative digital asset exchange",
    link: "https://www.gate.com/signup/VLEWVFOJBG?ref_type=103&utm_cmp=PEYEQdSb",
    color: "#17E1AC",
  },
  {
    id: 5,
    name: "Bitget",
    description: "社交化交易平台 | Social trading platform",
    link: "https://www.bitget.com/zh-TC/referral/register?clacCode=DS2JKS0Y",
    color: "#00F0E1",
  },
  {
    id: 6,
    name: "BingX",
    description: "簡單易用的交易平台 | User-friendly trading platform",
    link: "https://bingx.com/invite/X2TH8D/",
    color: "#1E3A8A",
  },
];

const CryptoReferrals = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-20 w-full">
      <div className="flex flex-col items-center">
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-6 py-3 rounded-full border border-white/[0.2] bg-black-100 hover:bg-black-200 transition-all duration-300 flex items-center gap-2"
        >
          <span className="text-white text-sm md:text-base">
            🤝 合作夥伴推薦連結 | Partner Referrals
          </span>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.span>
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-6xl mt-8 overflow-hidden"
            >
              <p className="text-center text-white-200 mb-6 text-sm">
                支持我的工作，使用以下推薦連結註冊享有優惠 | Support my work by
                signing up with these referral links
              </p>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {cryptoExchanges.map((exchange, index) => (
                  <motion.a
                    key={exchange.id}
                    href={exchange.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative group overflow-hidden rounded-2xl border border-white/[0.1] bg-black-100 p-6 hover:border-purple/[0.5] transition-all duration-300"
                  >
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {exchange.name}
                      </h3>
                      <p className="text-sm text-white-200 mb-4">
                        {exchange.description}
                      </p>
                      <div className="flex items-center text-purple text-sm font-semibold">
                        前往註冊 →
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <p className="text-center text-white-200 mt-6 text-xs">
                ⚠️ 投資有風險，請謹慎評估 | Trading involves risks, please
                evaluate carefully
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CryptoReferrals;

