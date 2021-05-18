import { FormattedMessage } from "react-intl";
import { Heading } from "../../components/Heading";
import { Link } from "../../components/Link";
import { Paragraph } from "../../components/Paragraph";
import { Layout } from "../../components/Layout";

export const NoMatch = () => (
  <Layout>
    <Heading>
      <FormattedMessage
        description="No match page heading"
        defaultMessage="Error"
      />
    </Heading>
    <Paragraph>
      <FormattedMessage
        description="No match page content"
        defaultMessage="Page not found, go back to <a>Home</a>"
        values={{ a: (msg: string) => <Link to="/">{msg}</Link> }}
      />
    </Paragraph>
  </Layout>
);
