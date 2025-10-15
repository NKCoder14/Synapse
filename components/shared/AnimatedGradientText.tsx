import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
}

export const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ text, className }) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-xy",
        className
      )}
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      {text}
    </span>
  );
};
