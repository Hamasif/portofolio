interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">

      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>

      {text}

    </div>
  );
};

export default Badge;