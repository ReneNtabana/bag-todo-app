export const apiUrl = (path: string) => {
  const baseUrl =
    process.env.NODE_ENV === "test" ? "https://bag-todo-app.netlify.app/" : "";
  return `${baseUrl}${path}`;
};
