import ISweet from "../model/ISweet"

export default function Sweet({name, flavor}: ISweet) {
  if (name && flavor)
    return (<li>Name: {name} flavor: {flavor} </li>)
  
  return null;
}
