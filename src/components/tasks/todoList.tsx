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
import { Pencil, BadgeX } from "lucide-react";
import { Button } from "../ui/button";
import Modal from "../Modal/UpdateTaskModal";
import DeleteModal from "../Modal/DeleteModal";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { Trash2 } from "lucide-react";
import graphQLClients from "@/lib/graphqlClient";
import { GetTaskQueryDocument } from "@/generated/graphql";
import { useQuery } from "@tanstack/react-query";

export default function TodoList() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["alltasks"],
    queryFn: async () => {
      
      return await graphQLClients.request(GetTaskQueryDocument);
    },
  });

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
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
          <TableRow>
            <TableCell className="font-medium">New Task</TableCell>
            <TableCell className="font-medium">Getting food</TableCell>
            <TableCell><Badge  className="bg-green-400" variant="outline">completed</Badge></TableCell>
            <TableCell className="text-right">
              <div className="gap-2">
                <Button onClick={handleModalOpen} className="hover:bg-gray-500 py-1 px-1">
                  <Pencil />
                </Button>
                <Button  onClick={handleDialogOpen} className="bg-red-500 hover:bg-gray-500 ml-2 py-1 px-1">
                <Trash2 />
                </Button>
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
              </div>
            </TableCell>
            <TableCell className="pl-8"><Checkbox /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Gym</TableCell>
            <TableCell className="font-medium">Working out</TableCell>
            <TableCell><Badge className="bg-red-400" variant="outline">Pending</Badge></TableCell>
            <TableCell className="text-right">
              <div className="gap-2">
                <Button onClick={handleModalOpen} className="hover:bg-gray-500 py-1 px-1">
                  <Pencil />
                </Button>
                <Button
                  onClick={handleDialogOpen}
                  className="bg-red-500 hover:bg-gray-500 ml-2 py-1 px-1"
                >
                  <Trash2 />
                </Button>
                <DeleteModal
                  dialogOpen={dialogOpen}
                  setDialogOpen={setDialogOpen}
                />
              </div>
            </TableCell>
            <TableCell className="pl-8"><Checkbox /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
