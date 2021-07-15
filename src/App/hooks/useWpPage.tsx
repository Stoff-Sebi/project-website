import React from "react";
import { WP_REST_API_Post } from "wp-types";

/**
 * Nampi hook to retrieve data from individual wordpress-backend pages.
 * @returns current pageData as state.
 */
export const useWpPage = (wpEndpoint: string, pageId: number) => {

  const [pageData, setPageData] = React.useState<null | WP_REST_API_Post>(null);

  React.useEffect(() => {
    (async () => {
      const reqUrl = new URL(`${wpEndpoint}/pages/${pageId}`).toString();
      const resp = await fetch(reqUrl);
      const parsed = await resp.json();
      setPageData(parsed);
    })();
  }, [pageId, wpEndpoint]);

  return {
    pageData
  }

}