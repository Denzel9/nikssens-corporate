import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  priority?: boolean;
};

export function Logo({ priority = false }: LogoProps) {
  return (
    <Link href="/" style={{ display: "inline-flex", lineHeight: 0, flexShrink: 0 }}>
      <Image src="/logo.png" alt="NIKSSENS" width={180} height={40} priority={priority} />
    </Link>
  );
}
