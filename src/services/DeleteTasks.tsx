import { apiUrl } from "../lib/pathUtils";

export async function deleteTask(id: any) {
  try {
    const url = apiUrl("/api/tasks/delete");

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        id: id,
      },
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting Task", error);
    throw error;
  }
}
