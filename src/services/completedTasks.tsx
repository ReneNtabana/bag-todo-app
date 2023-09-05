export async function completed() {
  try {
    const response = await fetch(`/api/tasks/completed`, {
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
