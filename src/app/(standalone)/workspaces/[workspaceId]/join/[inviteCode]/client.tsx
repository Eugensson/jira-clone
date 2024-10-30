"use client";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace info";
import { JoinWokrspaceForm } from "@/features/workspaces/components/join-wokrspace-form";

import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";

export const WorkspaceIdJoinClient = () => {
  const workspaceId = useWorkspaceId();
  const { data: initialValues, isLoading } = useGetWorkspaceInfo({
    workspaceId,
  });

  if (isLoading) return <PageLoader />;

  if (!initialValues) return <PageError message="Workspace not found" />;

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWokrspaceForm initialValues={initialValues} />
    </div>
  );
};
