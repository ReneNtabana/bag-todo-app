import { useQuery } from "@tanstack/react-query";
import { FetchTask } from "@/services/FetchTask";

export default function useFetchTasks(){
    return useQuery({
        queryKey: ["alltasks"],
    queryFn: async () => {
      return await FetchTask();
    },
    })
}