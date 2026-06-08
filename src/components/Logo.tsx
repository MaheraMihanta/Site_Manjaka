import logo from "@/assets/Fichier 10@3x.png";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  size?: "regular" | "large";
  showText?: boolean;
};

export function Logo({ variant = "dark", className = "", size = "regular", showText = true }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-night";
  const sizing = {
    regular: {
      gap: "gap-3",
      mark: "h-10",
      title: "text-xl",
      subtitle: "text-xs",
      intrinsic: 48,
    },
    large: {
      gap: "gap-3 sm:gap-4",
      mark: "h-14 sm:h-16",
      title: "text-2xl sm:text-3xl",
      subtitle: "text-sm",
      intrinsic: 64,
    },
  }[size];

  return (
    <div className={`flex items-center ${sizing.gap} ${className}`}>
      <img
        src={logo}
        alt="M2A Logistique"
        className={`${sizing.mark} w-auto`}
        width={sizing.intrinsic}
        height={sizing.intrinsic}
      />
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-black tracking-tight ${sizing.title} ${textColor}`}>M2A</span>
          <span className={`italic ${sizing.subtitle} ${variant === "light" ? "text-white/80" : "text-night/70"}`}>Logistique</span>
        </div>
      )}
    </div>
  );
}
