import SweetService from "../services/SweetService";
import { createSweet } from "./utils/CreateTestObjs";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("SweetService", () => {
  let sweetService: SweetService;

  beforeAll(() => {
    sweetService = new SweetService();
  });

  beforeEach(() => {
    mockedAxios.get.mockReset();
  });

  it("getAll should return a list of sweets", async () => {
    // mock the http call to sweets api
    mockedAxios.get.mockResolvedValue({
      data: [
        createSweet("mars bar", "chocolate"),
        createSweet("snickers", "chocolate"),
      ],
    });

    const sweets = await sweetService.getSweets();
    expect(sweets).toBeTruthy();
    expect(sweets.length).toBe(2);
  });

  it("getAll should return a empty list if the server isn't available", async () => {
    mockedAxios.get.mockResolvedValue(null);

    const sweets = await sweetService.getSweets();
    expect(sweets).toBeTruthy();
    expect(sweets.length).toBe(0);
  });
});
