"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DottedSeparator } from "@/components/dotted-separator";

import { useInviteCode } from "@/features/workspaces/hooks/use-invite-code";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useJoinWorkspace } from "@/features/workspaces/api/use-join-workspace";

interface JoinWorkspaceFormProps {
  initialValues: {
    name: string;
  };
}

export const JoinWokrspaceForm = ({
  initialValues: { name },
}: JoinWorkspaceFormProps) => {
  const router = useRouter();
  const inviteCode = useInviteCode();
  const workspaceId = useWorkspaceId();
  const { mutate, isPending } = useJoinWorkspace();

  const onSubmit = () => {
    mutate(
      {
        param: { workspaceId },
        json: { code: inviteCode },
      },
      {
        onSuccess: ({ data }) => {
          router.push(`/workspaces/${data.$id}`);
        },
      }
    );
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-7">
        <CardTitle className="text-xl font-bold">Join workspace</CardTitle>
        <CardDescription>
          You&apos;ve been invited to join <strong>{name}</strong> workspace.
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
          <Button
            asChild
            size="lg"
            type="button"
            variant="secondary"
            disabled={isPending}
            className="w-full lg:w-fit"
          >
            <Link href="/">Cancel</Link>
          </Button>
          <Button
            size="lg"
            type="button"
            onClick={onSubmit}
            disabled={isPending}
            className="w-full lg:w-fit"
          >
            Join Workspace
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
