export async function pending() {
  try {
    const response = await fetch(
      `https://bag-todo.netlify.app//api/tasks/pending`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating new task:", error);
    throw error;
  }
}
