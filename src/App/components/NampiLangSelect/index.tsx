import React from "react";
import {Select} from "../Select";
import { HTMLProps } from "react";
import { useNampiLang } from "App/hooks/useNampiLang";

interface Props extends HTMLProps<HTMLSelectElement> {}

export const NampiLangSelect: React.FC<Props> = ({ className, ...props }) => {

  const { lang, changeLang } =  useNampiLang();

  const handleLangChange = (evt: React.SyntheticEvent<HTMLSelectElement, Event>) => {
    console.log("CHANGE LANG");
    changeLang(evt.currentTarget.value as any);
  }

  return (
    <Select className="text-black" {...props} onChange={handleLangChange}>
      <option>{lang}</option>
      <option>de</option>
      <option>en</option>
    </Select>
  )
}