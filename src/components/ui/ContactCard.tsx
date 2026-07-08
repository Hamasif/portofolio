import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type Props = {
  title: string;
  value: string;
  href: string;
  icon: IconType;
};

const ContactCard = ({
  title,
  value,
  href,
  icon: Icon,
}: Props) => {
  return (
    <motion.a
      whileHover={{
        x: 10,
      }}
      href={href}
      target="_blank"
      className="
      flex
      items-center
      gap-5
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-900/60
      p-5
      transition
      hover:border-[#00F5C3]
      "
    >
      <Icon
        size={28}
        className="text-[#00F5C3]"
      />

      <div>

        <p className="text-sm text-zinc-500">
          {title}
        </p>

        <h3 className="font-semibold text-white">
          {value}
        </h3>

      </div>

    </motion.a>
  );
};

export default ContactCard;