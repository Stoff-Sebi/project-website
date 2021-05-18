import { FormattedMessage } from "react-intl";
import { Heading } from "../../components/Heading";
import { NampiLogo } from "../../components/NampiLogo";
import { Paragraph } from "../../components/Paragraph";
import { Layout } from "../../components/Layout";

export const Home = () => (
  <Layout>
    <Heading>
      <FormattedMessage
        description="The home page heading"
        defaultMessage="Home"
      />
    </Heading>
    <div className="flex flex-col md:flex-row md:justify-between">
      <Paragraph className="pb-4 md:pb-0">
        <FormattedMessage
          description="The home page content"
          defaultMessage="Welcome to NAMPI"
        />
      </Paragraph>
      <NampiLogo />
    </div>
  </Layout>
);
