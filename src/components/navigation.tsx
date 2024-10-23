"use client";

import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SettingsIcon, UsersIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Home",
    href: "/",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <ul>
      {routes.map(({ label, href, icon: Icon, activeIcon: ActiveIcon }) => {
        const isActive = href === pathname;

        return (
          <li key={label}>
            <Link href={href}>
              <div
                className={cn(
                  "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition-colors text-neutral-500",
                  isActive &&
                    "bg-white shadow-sm hover:opacity-100 text-primary"
                )}
              >
                {isActive ? (
                  <ActiveIcon className="size-5 text-neutral-500" />
                ) : (
                  <Icon className="size-5 text-neutral-500" />
                )}
                {label}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
