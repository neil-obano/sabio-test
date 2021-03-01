import ISweet from "../../model/ISweet";

export const createSweet = (name: string, flavor: string): ISweet => {
  return {
    name: name,
    flavor: flavor,
  };
};

export const createSweetList = (): Array<ISweet> => {
  return [
    createSweet("mars bar", "chocolate"),
    createSweet("snickers", "chocolate"),
  ];
};
