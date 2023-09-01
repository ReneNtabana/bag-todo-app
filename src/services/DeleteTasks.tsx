export async function deleteTask(id: any) {
  try {
    const response = await fetch(`/api/tasks/delete`, {
      method: "DELETE",
      headers:{
        'id':id
      }
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting Task", error);
    throw error;
  }
}
