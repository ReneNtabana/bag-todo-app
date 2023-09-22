import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { RotatingLines } from "react-loader-spinner";
import { useMutation } from "@tanstack/react-query";
import { deleteTask } from "@/services/DeleteTasks";
import useFetchTasks from "@/Hooks/GetTasks";
import { useToast } from "@/components/ui/use-toast";
import usePendingTasks from "@/Hooks/GetPendingTasks";
import useCompletedTasks from "@/Hooks/GetCompletedTasks";

interface DeleteModalProps {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => boolean | void;
  taskId: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  dialogOpen,
  setDialogOpen,
  taskId,
}) => {
  const { handleSubmit } = useForm();
  const { toast } = useToast();
  const { refetch } = (useFetchTasks(), usePendingTasks(), useCompletedTasks());

  const { mutate, isLoading } = useMutation(
    async (variables: { id: any }) => {
      const result = await deleteTask(variables.id);
      return result;
    },
    {
      onSuccess: () => {
        refetch();
        toast({
          title: "Successfully deleted the task.",    
        });
      },
    }
  );

  const handleDelete = async () => {
    try {
      const variables = {
        id: taskId,
      };
      mutate(variables);
      setDialogOpen(false);
    } catch (error) {
      console.error("Deletion error:", error);
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
    <div className={`modal ${dialogOpen ? "flex" : "hidden"}`}>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-30">
        <div className="flex flex-col bg-card border gap-4 rounded-xl w-1/4 p-4">
          <div className="flex justify-end">
            <Button
              onClick={() => setDialogOpen(false)}
              className="hover:bg-gray-500"
            >
              <X />
            </Button>
          </div>
          <form
            onSubmit={handleSubmit(handleDelete)}
            className="flex flex-col space-y-8"
          >
            <div className="text-center">
              Are you sure you want to delete this task?
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-2/4 py-2 text-white bg-red-500 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
