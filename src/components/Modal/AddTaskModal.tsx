import { useEffect } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createTask } from "@/services/CreateTask";
import { NewTask } from "@/lib/Types";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
  const { mutate, isLoading } = useMutation(async (variables: NewTask) => {
    const result = await createTask(variables);
    return result;
  });

  const { register, handleSubmit, reset } = useForm();

  const handleSave = async (data: NewTask) => {
    try {
      mutate(data);
      setModalOpen(false);
      reset();
    } catch (error) {
      console.error("Mutation error:", error);
    }
  };

  useEffect(() => {
    if (!modalOpen) {
      reset();
    }
  }, [modalOpen, reset]);
  return (
    <div className={`modal ${modalOpen ? "flex" : "hidden"}`}>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="w-full max-w-md bg-white rounded-lg p-4">
          <div className="flex justify-end">
            <Button
              type="button"
              onClick={() => setModalOpen(false)}
              className="hover:bg-gray-500"
            >
              <X />
            </Button>
          </div>
          <form onSubmit={handleSubmit(handleSave)} className="mt-4">
            <div className="mb-4 text-center text-xl font-semibold">
              Add a task
            </div>
            <div className="mb-4">
              <input
                {...register("tasks")}
                className="w-full p-2 border rounded-md focus:outline-none"
                type="text"
                placeholder="Enter a task"
              />
            </div>
            <div className="mb-4">
              <textarea
                {...register("description")}
                className="w-full p-2 border rounded-md"
                placeholder="Enter a description"
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-2/4 bg-black text-white p-2 rounded-md hover:bg-gray-500"
                disabled={isLoading}
              >
                Add
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
