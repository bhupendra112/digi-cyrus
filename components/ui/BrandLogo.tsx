import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export function BrandLogo({
  className = "",
}: {
  className?: string;
  height?: number;
}) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label={SITE.name}>
      <span className="relative block h-8 w-[118px] overflow-hidden">
        <Image
          src="/images/logos/digicyrus.jpeg"
          alt={SITE.name}
          fill
          className="origin-center scale-[1.9] object-contain"
          sizes="118px"
          priority
        />
      </span>
    </Link>
  );
}
