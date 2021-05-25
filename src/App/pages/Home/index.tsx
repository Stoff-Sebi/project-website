import { FormattedMessage } from "react-intl";
import { Heading } from "../../components/Heading";
import { NampiLogo } from "../../components/NampiLogo";
import { Paragraph } from "../../components/Paragraph";
import { Layout } from "../../components/Layout";
import { SideGridLayout } from "App/components/SideGridLayout";

export const Home = () => (
  <Layout>
    <Heading className="text-3xl pb-1 antialiased">
      <FormattedMessage
        description="The home page heading"
        defaultMessage="Nuns and Monks <br></br> Prosopographical Interfaces"
        values={{ br: (msg: string) => <br></br> }}
      />
    </Heading>
    <SideGridLayout
      left={
        <>
          <Paragraph className="pb-4 md:pb-0 underline grey">
            <FormattedMessage
              description="The home page content"
              defaultMessage="A prosopographical project..."
            />
          </Paragraph>
        </>
      }
      right={
        <div className="flex flex-col md:flex-row md:justify-between">
          <NampiLogo />
        </div>
      }
    ></SideGridLayout>
  </Layout>
);
