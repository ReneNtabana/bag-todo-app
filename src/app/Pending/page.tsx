"use client";

import React from "react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RotatingLines } from "react-loader-spinner";
import { Button } from "../../components/ui/button";
import DeleteModal from "@/components/Modal/DeleteModal";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { useQuery, useMutation } from "@tanstack/react-query";
import { variables } from "@/lib/Types";
import { pending } from "@/services/PendingTasks";
import { updateStatus } from "@/services/Status";
import { useToast } from "@/components/ui/use-toast";
import usePendingTasks from "@/Hooks/GetPendingTasks";

export default function Pending() {
  const [taskId, setTaskId] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["allPendingTasks"],
    queryFn: async () => {
      return await pending();
    },
  });
  const [dialogOpenStates, setDialogOpenStates] = useState<boolean[]>(
    data?.Tasks.map(() => false) || []
  );

  const { refetch } = usePendingTasks();
  const { toast } = useToast();

  const handleDialogOpen = (index: number) => {
    const deleteStates = [...dialogOpenStates];
    deleteStates[index] = true;
    setDialogOpenStates(deleteStates);
  };

  const { mutate, isLoading: mutateisLoading } = useMutation(
    async (id: any) => {
      const result = await updateStatus(id);
      return result;
    },
    {
      onSuccess: () => {
        refetch();
        toast({
          title: "Succesfully updated the status.",
        });
      },
    }
  );

  const handleChange = (e: any) => {
    console.log(e.target.dataset);
    setTaskId(e.target.dataset.taskid);
    if (e.target.dataset.ischecked === "true") {
      const variable = {
        id: e.target.dataset.taskid,
        completed: "pending",
      };
      mutate(variable);
    } else {
      const variable = {
        id: e.target.dataset.taskid,
        completed: "completed",
      };
      mutate(variable);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="40"
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full">
      <div className="flex justify-center">
        <div className="text-5xl font-bold">Pending Tasks</div>
      </div>
      <div className="w-2/4 ml-1/4">
        <Table>
          <TableCaption>A list of your Pending tasks</TableCaption>
          <TableHeader>
            <TableRow className="bg-zinc-300">
              <TableHead>Tasks</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>action</TableHead>
              <TableHead>Checkbox</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.Tasks.map((task: variables, index: number) => (
              <TableRow key={task.id}>
                <TableCell className="font-medium">{task.tasks}</TableCell>
                <TableCell className="font-medium">
                  {task.description}
                </TableCell>
                <TableCell>
                  <Badge
                    className={`bg-${task.status === "completed" ? "" : ""}`}
                    variant="outline"
                  >
                    {task.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center">
                    <Button
                      onClick={() => handleDialogOpen(index)}
                      className="bg-red-500 hover:bg-gray-500 py-1 px-1"
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="pl-8">
                  {" "}
                  {mutateisLoading && task.id === taskId ? (
                    <RotatingLines
                      strokeColor="grey"
                      strokeWidth="5"
                      animationDuration="0.50"
                      width="20"
                      visible={true}
                    />
                  ) : (
                    <Checkbox
                      data-taskid={task.id}
                      data-ischecked={task.status === "completed"}
                      onClick={handleChange}
                      checked={task.status === "completed"}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {data?.Tasks.map((task: variables, index: number) => (
          <div key={task.id}>
            <DeleteModal
              dialogOpen={dialogOpenStates[index]}
              setDialogOpen={(open) => {
                const updatedStates = [...dialogOpenStates];
                updatedStates[index] = open;
                setDialogOpenStates(updatedStates);
              }}
              taskId={task.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
