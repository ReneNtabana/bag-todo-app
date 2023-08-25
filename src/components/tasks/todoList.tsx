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

export default function TodoList() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

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
            <TableHead>Status</TableHead>
            <TableHead className="text-right">action</TableHead>
            <TableHead>Checkbox</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">getting food</TableCell>
            <TableCell>completed</TableCell>
            <TableCell className="text-right">
              <div className="gap-2">
                <Button onClick={handleModalOpen} className="hover:bg-gray-500">
                  <Pencil />
                </Button>
                <Button className="bg-red-500 hover:bg-gray-500 ml-2">
                  <BadgeX />
                </Button>
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
              </div>
            </TableCell>
            <TableCell className="pl-8"><Checkbox /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Working out</TableCell>
            <TableCell>pending</TableCell>
            <TableCell className="text-right">
              <div className="gap-2">
                <Button className="hover:bg-gray-500">
                  <Pencil />
                </Button>
                <Button
                  onClick={handleDialogOpen}
                  className="bg-red-500 hover:bg-gray-500 ml-2"
                >
                  <BadgeX />
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
