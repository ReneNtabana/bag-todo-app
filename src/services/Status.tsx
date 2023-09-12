import { apiUrl } from "../lib/pathUtils";

type StatusProps = {
  id: any;
  completed: string;
};
export async function updateStatus({ id, completed }: StatusProps) {
    console.log("===", id)
  try {
    const url = apiUrl("/api/tasks/status");

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, completed }),
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating new task:", error);
    throw error;
  }
}
