import { PencilIcon } from "lucide-react";

import { Task } from "@/features/tasks/types";
import { MemberAvatar } from "@/features/members/components/member-avatar";
import { useEditTaskModal } from "@/features/tasks/hooks/use-edit-task-modal";
import { OverviewProperty } from "@/features/tasks/components/overview-property";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TaskDate } from "@/components/task-date";
import { snakeCaseToTitleCase } from "@/lib/utils";
import { DottedSeparator } from "@/components/dotted-separator";

interface TaskOverviewProps {
  task: Task;
}

export const TaskOverview = ({ task }: TaskOverviewProps) => {
  const { open } = useEditTaskModal();

  return (
    <div className="flex flex-col gap-y-4 col-span-1">
      <div className="bg-muted rounded-lg p-4">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Overview</p>
          <Button onClick={() => open(task.$id)} size="sm" variant="secondary">
            <PencilIcon className="size-4 mr-2" />
            Edit
          </Button>
        </div>
        <DottedSeparator className="my-4" />
        <div className="flex flex-col gap-y-4">
          <OverviewProperty label="Assignee">
            <MemberAvatar name={task.assignee.name} className="size-6" />
            <p className="text-sm font-medium">{task.assignee.name}</p>
          </OverviewProperty>
          <OverviewProperty label="Due Date">
            <TaskDate value={task.dueDate} className="text-sm font-medium" />
          </OverviewProperty>
          <OverviewProperty label="Status">
            <Badge variant={task.status}>
              {snakeCaseToTitleCase(task.status)}
            </Badge>
          </OverviewProperty>
        </div>
      </div>
    </div>
  );
};