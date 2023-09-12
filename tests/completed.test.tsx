import { server } from "../src/mocks/server";
import { completed } from "../src/services/completedTasks";
import { describe, it, expectTypeOf } from "vitest";

describe("get all completed tasks", () => {
  it("returns tasks", async () => {
    server.listen();
    const response = await completed();
    expectTypeOf(response.tasks).toBeArray();
    server.close();
  }, 10000);
});
