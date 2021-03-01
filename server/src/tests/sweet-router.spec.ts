import supertest from "supertest";
import App from "../app";

const request = supertest.agent;
describe("SweetRouter", () => {
  const expressObj = new App().express;

  it("GET /sweets should return a list of sweet objects", async () => {
    const result = await request(expressObj).get("/sweets");
    expect(result.body).toBeTruthy();
    expect(result.body).toHaveLength(2);
    expect(result.status).toBe(200);
  });
});
