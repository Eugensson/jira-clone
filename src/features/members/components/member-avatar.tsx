import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface MemberAvatarProps {
  name: string;
  className?: string;
  fallbackClassName?: string;
}

export const MemberAvatar = ({
  name,
  className,
  fallbackClassName,
}: MemberAvatarProps) => {
  return (
    <Avatar
      className={cn(
        "size-5 border border-neutral-300 rounded-full transition",
        className
      )}
    >
      <AvatarFallback
        className={cn(
          "bg-neutral-200 font-medium text-neutral-500 flex justify-center items-center",
          fallbackClassName
        )}
      >
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};
