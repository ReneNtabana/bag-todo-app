import { useQuery } from "@tanstack/react-query";
import { completed } from "@/services/completedTasks";

export default function useCompletedTasks() {
  return useQuery({
    queryKey: ["allCompletedTasks"],
    queryFn: async () => {
      return await completed();
    },
  });
}
