import { FormattedMessage } from "react-intl";
import { Heading } from "../../components/Heading";
import { NampiLogo } from "../../components/NampiLogo";
import { Paragraph } from "../../components/Paragraph";
import { Layout } from "../../components/Layout";
import { SideGridLayout } from "App/components/SideGridLayout";
import { LogoBar } from "./LogoBar";

export const Home = () => (
  <Layout>
    <Heading className="text-5xl pb-3 antialiased">
      <FormattedMessage
        description="The home page heading"
        defaultMessage="Nuns and Monks <br></br> Prosopographical Interfaces"
        values={{ br: (msg: string) => <br></br> }}
      />
    </Heading>
    <SideGridLayout
      left={
        <>
          <Paragraph className="pb-4 md:pb-0 grey">
            <FormattedMessage
              description="The home page content"
              defaultMessage="Welcome to the Project-Website of Nuns and Monks – Prosopographical Interfaces (NAMPI). The project was launched in June 2019 as part of the Go!Digital funding programme of the Austrian Academy of Sciences."
            />
          </Paragraph>
          <br></br>
          <div className="md:shadow-md md:border-2 md:p-3 max-w-xxl">
            <Heading className="underline">Goals</Heading>
            <Paragraph>
              <FormattedMessage
                description="short description of web page goals"
                defaultMessage="By the end of the project, NAMPI will incorporate data from already available databases like ProDomo or Germania Sacra as well as from previously unpublished sources like profession books. In this way NAMPI will contribute to making information on the lives of early modern nuns and monks available to researchers and the general public alike and help to further our knowledge about our past and our cultural heritage."
              ></FormattedMessage>
            </Paragraph>
            <br></br>
          </div>
          <br></br>
          <div className="md:shadow-md md:border-2 md:p-3 max-w-xl">
            <Heading className="underline">Background</Heading>
            <FormattedMessage
              description="Scientific background of the project-page"
              defaultMessage="Prosopography is a very important research area in the humanities, as it enables researchers to answer a number of important questions about historical societies and the lives of people within them that are difficult to answer when only considering primary sources about individual persons or events alone. The various sources available to us about early modern European Catholic nuns and monks are among the most interesting for transformation into a modern prosopographical database. This is because monastic communities were highly interconnected throughout Europe, the nuns and monks came from a wide range of geographic and social backgrounds, and the data they produced about themselves and their peers was often of very high quality and well- structured."
            ></FormattedMessage>
          </div>
          <br></br>
        </>
      }
      right={
        <div className="flex flex-col md:flex-row md:justify-between">
          <NampiLogo />
        </div>
      }
    ></SideGridLayout>
    <br></br>
    <div>
      <Heading level={3}>
        <FormattedMessage
          defaultMessage="Partners, supporters and license"
          description="Heading for partners section"
        ></FormattedMessage>
      </Heading>
      <br></br>
      <LogoBar></LogoBar>
      <br></br>
    </div>
    <br></br>
    <br></br>
    <br></br>
  </Layout>
);
