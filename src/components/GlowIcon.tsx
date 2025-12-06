export const GlowIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="
      w-20 h-20 rounded-full
      flex items-center justify-center
      bg-[#ffffff0a]
      shadow-[0_0_3px_4px_rgba(255,255,255,0.08)]
      border border-white/[0.05]
      relative
    ">
      <div className="absolute inset-0 rounded-full bg-white/90 blur-xs" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

