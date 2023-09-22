import { apiUrl } from "../lib/pathUtils";

export async function completed() {
  const url = apiUrl("/api/tasks/completed");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { data } = await response.json();
  return data;
}
