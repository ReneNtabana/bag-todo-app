import { useQuery } from "@tanstack/react-query";
import { completed } from "@/services/CompletedTasks";

export default function useCompletedTasks() {
  return useQuery({
    queryKey: ["allCompletedTasks"],
    queryFn: async () => {
      return await completed();
    },
  });
}
