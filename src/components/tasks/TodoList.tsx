"use client";

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
import { Pencil, Trash2 } from "lucide-react";
import { RotatingLines } from "react-loader-spinner";
import { Button } from "../ui/button";
import Modal from "../Modal/UpdateTaskModal";
import DeleteModal from "../Modal/DeleteModal";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { useQuery, useMutation } from "@tanstack/react-query";
import { FetchTask } from "@/services/FetchTask";
import { variables } from "@/lib/Types";
import { updateStatus } from "@/services/Status";
import useFetchTasks from "@/hooks/GetTasks";
import { useToast } from "@/components/ui/use-toast";

export default function TodoList() {
  const [taskId, setTaskId] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["alltasks"],
    queryFn: async () => {
      return await FetchTask();
    },
  });

  const [modalOpenStates, setModalOpenStates] = useState<boolean[]>(
    data?.Tasks.map(() => false) || []
  );

  const { refetch } = useFetchTasks();
  const { toast } = useToast();

  const handleModalOpen = (index: number) => {
    const updatedStates = [...modalOpenStates];
    updatedStates[index] = true;
    setModalOpenStates(updatedStates);
  };
  const [dialogOpenStates, setDialogOpenStates] = useState<boolean[]>(
    data?.Tasks.map(() => false) || []
  );

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
          animationDuration="0.50"
          width="40"
          visible={true}
        />
      </div>
    );
  }
  return (
    <div>
      <div>Todo List</div>
      <Table>
        <TableCaption>A list of your tasks</TableCaption>
        <TableHeader>
          <TableRow className="bg-zinc-300">
            <TableHead>Tasks</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">action</TableHead>
            <TableHead>Checkbox</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.Tasks.map((task: variables, index: number) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.tasks}</TableCell>
              <TableCell className="font-medium">{task.description}</TableCell>
              <TableCell>
                <Badge
                  className={`bg-${task.status === "completed" ? "" : ""}`}
                  variant="outline"
                >
                  {task.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => handleModalOpen(index)}
                    className="hover:bg-gray-500 py-1 px-1"
                  >
                    <Pencil />
                  </Button>
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
          <Modal
            modalOpen={modalOpenStates[index]}
            setModalOpen={(open) => {
              const updatedStates = [...modalOpenStates];
              updatedStates[index] = open;
              setModalOpenStates(updatedStates);
            }}
            taskId={task.id}
            title={task.tasks}
            description={task.description}
          />
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
  );
}
