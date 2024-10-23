import Link from "next/link";
import Image from "next/image";

import { Navigation } from "@/components/navigation";
import { DottedSeparator } from "@/components/dotted-separator";

export const Sidebar = () => {
  return (
    <aside className="w-full h-full p-4 bg-neutral-100">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={164} height={48} />
      </Link>
      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};
