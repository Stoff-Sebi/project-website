import { Heading } from "App/components/Heading";
import { Layout } from "App/components/Layout";
import { NampiPageHeader } from "App/components/NampiPageHeader";
import React from "react";
import { FormattedMessage } from "react-intl";

export const Imprint: React.FC = () => {
  return (
    <Layout>
      <NampiPageHeader
        main={<FormattedMessage
          defaultMessage="Imprint"
          description="Main heading for imprint page"
        ></FormattedMessage>}
        sub={<FormattedMessage
          defaultMessage="Basic informations about rights, license and project workflows."
          description="Subtitle for imprint page"
        />}
      />
      <Heading className="font-light">
        <FormattedMessage
          defaultMessage="Publisher, development and implementation"
          description="Heading for development section."
        ></FormattedMessage>
      </Heading>
      <p>Developed by the NAMPI Project. Project partners are:</p>
      <ul>
        <li>University of Vienna, Institute for History</li>
        <li>International Centre for Archival Research</li>
        <li>ZIM Institute Centre for Information Modelling, University of Graz</li>
      </ul>
    </Layout>
  );
};

export default Imprint;
