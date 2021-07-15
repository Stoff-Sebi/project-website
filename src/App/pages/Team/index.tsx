import React from "react";
import { Layout } from "../../components/Layout";
import { FormattedMessage } from "react-intl";
import { Heading } from "../../components/Heading";
import { Paragraph } from "../../components/Paragraph";
import { SideGridLayout } from "../../components/SideGridLayout";
import { NampiPageHeader } from "App/components/NampiPageHeader";
import WPPage from "App/components/WPPage";
import { WP_PAGE_IDS, WP_ENDPOINT } from "App/constants";

export const Team = () => {
  return (
    <Layout>
      <WPPage
        wpEndpoint={WP_ENDPOINT}
        id={WP_PAGE_IDS.MEMBERS} 
      ></WPPage> 
    </Layout>
  );
};

export default Team;
