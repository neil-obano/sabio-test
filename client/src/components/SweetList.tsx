import React from "react";
import ISweet from "../model/ISweet";
import Sweet from "./Sweet";

export interface ISweetListProps {
  sweets: Array<ISweet>
}

export default function SweetList({sweets}: ISweetListProps) {
  if (sweets && Array.isArray(sweets) && sweets.length > 0) {
    return (
      <>
      {
        sweets.map((sweet: ISweet) => {
          return <Sweet key={sweet.name} flavor={sweet.flavor} name={sweet.name}></Sweet>
        })
      }
      </>)
  } 
  return null;
}

