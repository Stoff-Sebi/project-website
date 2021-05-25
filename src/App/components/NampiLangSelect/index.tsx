import React from "react";
import { Select } from "../Select";
import { HTMLProps } from "react";
import { useNampiLang } from "App/hooks/useNampiLang";
import { Locale } from "../../../I18n/Locale";
import { LANGUAGE_NAMES } from "../../../I18n/constants";

interface Props extends HTMLProps<HTMLSelectElement> {}

export const NampiLangSelect: React.FC<Props> = ({ className, ...props }) => {
  const { lang, changeLang } = useNampiLang();

  const handleLangChange = (
    evt: React.SyntheticEvent<HTMLSelectElement, Event>
  ) => {
    changeLang(evt.currentTarget.value as any);
  };

  /**
   * Renders options according to NAMPIs Locale constant type.
   * @returns
   */
  const renderOptions = () => {
    let keys = Object.keys(Locale);
    return keys.map((key) => (
      <option value={(Locale as { [property: string]: string })[key]} selected={(Locale as { [property: string]: string })[key] === lang}>
        {
          (LANGUAGE_NAMES as { [property: string]: string })[
            (Locale as { [property: string]: string })[key]
          ]
        }
      </option>
    ));
  };

  return (
    <Select className="text-black" {...props} onChange={handleLangChange}>
      {renderOptions()}
    </Select>
  );
};
