import { apiUrl } from "../lib/pathUtils";

export async function pending() {
  const url = apiUrl("/api/tasks/pending");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { data } = await response.json();
  return data;
}
