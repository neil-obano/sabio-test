import ISweet from "../model/sweet";

export default class SweetService {
  static sweetList: Array<ISweet>;
  constructor() {
    SweetService.sweetList = [
      {
        name: "chocolate",
        flavor: "chocolate",
      },
      {
        name: "liquorice",
        flavor: "liquorice",
      },
    ];
  }

  // public create(newSweet: ISweet) {}

  public getAll(): Array<ISweet> {
    return SweetService.sweetList;
  }

  // public update(): ISweet {}

  // public delete(): string {}
}
