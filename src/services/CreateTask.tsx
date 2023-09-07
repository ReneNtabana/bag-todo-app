import { NewTask } from "@/lib/Types";

export async function createTask(task: NewTask) {
  try {
    const response = await fetch(
      `/api/tasks/create`,
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
