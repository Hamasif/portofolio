import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";

type Tab = "project" | "certificate" | "tech";

type Props = {
  active: Tab;
  setActive: Dispatch<SetStateAction<Tab>>;
};

const tabs: Tab[] = [
  "project",
  "certificate",
  "tech",
];

const PortfolioTabs = ({
  active,
  setActive,
}: Props) => {
  return (
    <div
      className="
      mx-auto
      mt-12
      flex
      w-fit
      rounded-full
      border
      border-zinc-800
      bg-zinc-900
      p-2
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className="
          relative
          overflow-hidden
          rounded-full
          px-10
          py-3
          capitalize
          text-zinc-400
          transition
          "
        >
          {active === tab && (
            <motion.div
              layoutId="activeTab"
              className="
              absolute
              inset-0
              rounded-full
              bg-[#00F5C3]
              "
            />
          )}

          <span
            className={`
            relative
            z-10
            ${
              active === tab
                ? "text-black"
                : "text-zinc-400"
            }
            `}
          >
            {tab}
          </span>
        </button>
      ))}
    </div>
  );
};

export default PortfolioTabs;