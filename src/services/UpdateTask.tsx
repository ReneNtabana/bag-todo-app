import { NewTask } from "../lib/Types";
import { apiUrl } from "../lib/pathUtils";


export async function updateTask(task: NewTask) {
  try {
    const url = apiUrl("/api/tasks/update");

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating new task:", error, task);
    throw error;
  }
}
