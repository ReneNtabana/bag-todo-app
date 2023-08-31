"use client";

import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Modal from "../Modal/AddTaskModal";
import { useState } from "react";

export default function AddTask() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <Button
        onClick={handleModalOpen}
        className="btn w-full bg-black text-white text-2xl hover:text-black"
      >
        {" "}
        <Plus />
        Add new task
      </Button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}
