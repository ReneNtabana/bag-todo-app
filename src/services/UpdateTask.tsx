import { NewTask } from "@/lib/Types";

export async function updateTask(task: NewTask) {
  try {
    const response = await fetch(`/api/tasks/update`, {
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
