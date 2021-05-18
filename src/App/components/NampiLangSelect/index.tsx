import React from "react";
import {Select} from "../Select";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLSelectElement> {}

export const NampiLangSelect: React.FC<Props> = ({ className, ...props }) => {
  return (
    <Select className="text-black" {...props}>
      <option>DE</option>
      <option>EN</option>
    </Select>
  )
}