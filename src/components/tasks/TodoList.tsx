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
import graphQLClients from "@/lib/graphqlClient";
import { GetTaskQueryDocument,MarkOneTaskAsCompleteDocument } from "@/generated/graphql";
import { useQuery } from "@tanstack/react-query";

export default function TodoList() {
  const { data, isLoading } = useQuery({
    queryKey: ["alltasks"],
    queryFn: async () => {
      return await graphQLClients.request(GetTaskQueryDocument);
    },
  });

  const [modalOpenStates, setModalOpenStates] = useState<boolean[]>(
    data?.Tasks.map(() => false) || []
  );

  const handleModalOpen = (index: number) => {
    const updatedStates = [...modalOpenStates];
    updatedStates[index] = true;
    setModalOpenStates(updatedStates);
  };
const [dialogOpenStates, setDialogOpenStates] = useState<boolean[]>(
  data?.Tasks.map(() => false) || []
);

  const handleDialogOpen = (index: number) => {
    const deleteStates= [...dialogOpenStates];
    deleteStates[index]=true;
    setDialogOpenStates(deleteStates);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.90"
          width="50"
          visible={true}
        />
      </div>
    );
  }

  const handleCheckboxChange= () =>{
    
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
          {data?.Tasks.map((task, index) => (
            <TableRow>
              <TableCell className="font-medium">{task.tasks}</TableCell>
              <TableCell className="font-medium">{task.description}</TableCell>
              <TableCell>
                <Badge
                  className={`bg-${
                    task.status === "completed" ? "" : ""
                  }`}
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
                <Checkbox checked={task.status === "completed"} 
                onChange={handleCheckboxChange}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {data?.Tasks.map((task, index) => (
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
