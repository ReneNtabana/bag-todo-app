import { server } from "../src/mocks/server";
import { FetchTask } from "../src/services/FetchTask";
import { describe, it, expectTypeOf } from "vitest";

describe("get all tasks", () => {
  it("returns tasks", async () => {
    server.listen();
    const response = await FetchTask();
    expectTypeOf(response.tasks).toBeArray();
    server.close();
  }, 10000);
});
