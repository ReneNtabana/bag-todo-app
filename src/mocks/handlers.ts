import { rest } from "msw";

export const handlers = [
  rest.get(`/api/tasks/fetch`, (req, res, ctx) => {
    return res(
      ctx.json({
        tasks: [
          {
            id: "1603edaf-fe2b-4462-9655-237b24c15b8a",
            status: "pending",
            description: "Description",
            task: "Task",
          },
        ],
      })
    );
  }),
  rest.delete(`/api/tasks/delete`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        tasks: {
          delete_todos_by_pk: {
            description: "Description",
            id: "fc6bd5e1-4a80-4ca4-9c2b-3a8abf96a98c",
            status: "pending",
            task: "Testing",
          },
        },
      })
    );
  }),
];
