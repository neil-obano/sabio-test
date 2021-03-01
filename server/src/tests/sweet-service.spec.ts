import SweetService from "../services/sweet-service";

describe("SweetService", () => {
  const sweetService = new SweetService();

  it("getAll should return a list of sweets", () => {
    const sweets = sweetService.getAll();
    expect(sweets).toBeTruthy();
    expect(sweets).toHaveLength(2);
  });
});
