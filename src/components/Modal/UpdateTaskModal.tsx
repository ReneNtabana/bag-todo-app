import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { NewTask } from "@/lib/Types";
import { updateTask } from "@/services/UpdateTask";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  taskId: string;
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({
  modalOpen,
  setModalOpen,
  taskId,
  title,
  description,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      tasks: title,
      description: description,
    },
  });

  const { mutate } = useMutation(async (variables: NewTask) => {
    const result = await updateTask(variables);
    return result;
  });

  const handleSave = async (data: NewTask) => {
    try {
      const variables = {
        id: taskId,
        task: `${data.tasks}`,
        description: `${data.description}`,
      };
      mutate(variables);
      setModalOpen(false);
    } catch (error) {
      console.error("Mutation error:", error);
    }
  };

  return (
    <div className={`modal ${modalOpen ? "flex" : "hidden"}`}>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-card border rounded-xl w-1/4">
          <div className="flex justify-end p-4">
            <Button
              onClick={() => setModalOpen(false)}
              className="hover:bg-gray-500"
            >
              <X />
            </Button>
          </div>
          <form
            onSubmit={handleSubmit(handleSave)}
            className="flex flex-col p-4 space-y-1"
          >
            <div className="mb-2 text-center">Update task</div>
            <div className="flex flex-col">
              <input
                {...register("tasks")}
                className="w-full h-8 pl-2 border rounded-md"
                type="text"
                placeholder="Update task"
              />
            </div>
            <div className="flex flex-col">
              <textarea
                {...register("description")}
                className="w-full p-2 border rounded-md"
                placeholder="Update description"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-2/4 py-2 text-white bg-black rounded-md hover:bg-gray-500"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
