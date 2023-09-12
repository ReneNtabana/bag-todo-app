import { NewTask } from "@/lib/Types";
import { apiUrl } from "../lib/pathUtils";

export async function createTask(task: NewTask) {
  try {
    const url = apiUrl("/api/tasks/create");

    const response = await fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating new task:", error, task);
    throw error;
  }
}
