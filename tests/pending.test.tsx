import { server } from "../src/mocks/server";
import { pending } from "../src/services/PendingTasks";
import { describe, it, expectTypeOf } from "vitest";

describe("get all pending tasks", () => {
  it("returns tasks", async () => {
    server.listen();
    const response = await pending();
    expectTypeOf(response.tasks).toBeArray();
    server.close();
  }, 10000);
});
