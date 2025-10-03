import { cn } from "@heroui/theme";
import Image from "next/image";

export default function Logo({
  className,
  onClick,
  style,
}: {
  className?: string;
  onClick: any;
  style: any;
}) {
  return (
    <Image
      className={cn("h-8 w-auto", className)}
      src="/logo.png"
      width={500}
      height={340}
      onClick={onClick}
      style={style}
      alt="Logo"
    />
  );
}
