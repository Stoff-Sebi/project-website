import { Layout } from "App/components/Layout";
import WPPage from "App/components/WPPage";
import { WP_ENDPOINT, WP_PAGE_IDS } from "App/constants";
import React from "react";

export const DataProtection: React.FC = () => {
  return (
    <Layout>
      <WPPage
        wpEndpoint={WP_ENDPOINT}
        id={WP_PAGE_IDS.DATA_PROTECTION}
      ></WPPage>
    </Layout>
  );
};

export default DataProtection;
