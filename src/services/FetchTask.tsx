import { apiUrl } from "../lib/pathUtils";

export async function FetchTask() {
    const url = apiUrl("/api/tasks/fetch");
    const response = await fetch(url,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data } = await response.json();
    return data;
}
