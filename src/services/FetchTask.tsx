

export async function FetchTask() {
  try {
    const response = await fetch(`/api/tasks/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating new task:", error);
    throw error;
  }
}
