import React from "react";
import { WP_REST_API_Post } from "wp-types";

/**
 * Nampi hook to retrieve data from individual wordpress-backend pages.
 * @param wpEndpoint API endpoint to where the wordpress pages endpoint lies e.g. https://example.com/wp-json/wp/v2.
 * @param pargeId id of wordpress page that should be requested against.
 * @returns pageData - current pageData as state.
 * @returns reqUrl - URL instance represanting the used wordpress url.
 */
export const useWpPage = (wpEndpoint: string, pageId: number) => {

  const [pageData, setPageData] = React.useState<null | WP_REST_API_Post>(null);

  const reqURL = new URL(`${wpEndpoint}/pages/${pageId}`);

  React.useEffect(() => {
    (async () => {
      
      const resp = await fetch(reqURL.toString());
      const parsed = await resp.json();
      setPageData(parsed);
    })();
  }, [pageId, wpEndpoint]);

  return {
    pageData,
    reqURL
  }

}