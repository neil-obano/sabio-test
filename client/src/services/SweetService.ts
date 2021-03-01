import axios from "axios";
import ISweet from "../model/ISweet";

export default class SweetService {
  public async getSweets(): Promise<ISweet[]> {
    try {
      const sweetResp = await axios.get("http://localhost:3001/sweets");
      return sweetResp.data as ISweet[];
    } catch (e) {
      //console.log(e);
      return [];
    }
  }
}
