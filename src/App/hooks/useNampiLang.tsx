import React from "react";
import { useParams, useHistory } from "react-router";
import { Locale } from "../../I18n/Locale";

/**
 * Nampi hook to retrieve client's current lang.
 * @returns 
 */
export const useNampiLang = () => {
    const params: {lang: Locale.De | Locale.En} = useParams();
    const history = useHistory();

    const changeLang = (isoLang: Locale.De | Locale.En) => history.push( globalThis.location.pathname.replace(params.lang, isoLang)); 

    return {
      lang: params.lang,
      changeLang
    }

}