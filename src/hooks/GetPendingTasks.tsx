import { useQuery } from "@tanstack/react-query";
import { pending } from "@/services/PendingTasks";

export default function usePendingTasks() {
  return useQuery({
    queryKey: ["allPendingTasks"],
    queryFn: async () => {
      return await pending();
    },
  });
}
