import { Heading } from "App/components/Heading";
import { Layout } from "App/components/Layout";
import React from "react";
import { FormattedMessage } from "react-intl";

export const Imprint: React.FC = () => {
  return (
    <Layout>
      <Heading
        className="text-4xl font-bold">
        <FormattedMessage
          defaultMessage="Imprint"
          description="Main heading for imprint page"
        ></FormattedMessage>
      </Heading>
      <hr
            style={{ borderTop: "5px solid lightgrey", borderRadius: "1em", maxWidth:"30px" }}
          ></hr>
      <br></br>
      <Heading>
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
