import { Button } from "../ui/button";
import { RotatingLines } from "react-loader-spinner";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { NewTask } from "@/lib/Types";
import { updateTask } from "@/services/UpdateTask";
import useFetchTasks from "@/Hooks/GetTasks";
import { useToast } from "../ui/use-toast";

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

  const { refetch } = useFetchTasks();
  const { toast } = useToast();

  const { mutate, isLoading } = useMutation(async (variables: NewTask) => {
    const result = await updateTask(variables);
    return result;
  },
  {
    onSuccess: () =>{
      refetch();
      toast({
        title: "Successfully updated the task.",
      });
    }
  });

  const handleSave = async (data: NewTask) => {
    const { tasks, description } = data;

    if (!tasks || tasks.trim() === "") {
      return;
    }

    if (!description || description.trim() === "") {
      return;
    }
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.80"
          width="40"
          visible={true}
        />
      </div>
    );
  }

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
                disabled={isLoading}
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
