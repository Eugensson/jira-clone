import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { getWorkspaceInfo } from "@/features/workspaces/queries";
import { JoinWokrspaceForm } from "@/features/workspaces/components/join-wokrspace-form";

interface WorkspaceIdJoinPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdJoinPage = async ({
  params: { workspaceId },
}: WorkspaceIdJoinPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getWorkspaceInfo({ workspaceId });

  if (!initialValues) redirect("/");

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWokrspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdJoinPage;
