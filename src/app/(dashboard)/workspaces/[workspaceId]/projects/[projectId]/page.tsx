import { PencilIcon } from "lucide-react";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

import { getCurrent } from "@/features/auth/queries";
import { getProject } from "@/features/projects/queries";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import Link from "next/link";

interface ProjectIdPageProps {
  params: {
    projectId: string;
  };
}

const ProjectIdPage = async ({ params: { projectId } }: ProjectIdPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getProject({ projectId });

  if (!initialValues) {
    throw new Error("Project not found");
  }

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <ProjectAvatar
            image={initialValues?.imageUrl}
            name={initialValues?.name}
            className="size-8"
          />
          <p className="text-lg font-semibold">{initialValues?.name}</p>
        </div>
        <div>
          <Button variant="secondary" size="sm" asChild>
            <Link
              href={`/workspaces/${initialValues?.workspaceId}/projects/${initialValues?.$id}/settings`}
            >
              <PencilIcon className="size-4 mr-2" />
              Edit project
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectIdPage;
