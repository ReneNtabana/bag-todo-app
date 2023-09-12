import { server } from "../src/mocks/server";
import { deleteTask } from "../src/services/DeleteTasks";
import { describe, it, expectTypeOf } from "vitest";

describe("deleteTasks", () => {
  it("should delete a task", async () => {
    server.listen();
    const response = await deleteTask("fc6bd5e1-4a80-4ca4-9c2b-3a8abf96a98c");
    expectTypeOf(response.tasks).toBeArray();
    server.close();
  }, 10000);
});