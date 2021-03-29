const { cloneFn } = require(".");

jest.mock("simple-git", () => () => ({ clone: () => "Mocked" }));

describe("Example", () => {
    it("should pass", async () => {
        const res = await cloneFn();

        expect(res).toStrictEqual('Mocked');
    });
});
