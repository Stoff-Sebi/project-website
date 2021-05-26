import { FormattedMessage } from "react-intl";
import { Heading } from "../../components/Heading";
import { NampiLogo } from "../../components/NampiLogo";
import { Paragraph } from "../../components/Paragraph";
import { Layout } from "../../components/Layout";
import { SideGridLayout } from "App/components/SideGridLayout";
import { LogoBar } from "./LogoBar";
import { NampiPageHeader } from "App/components/NampiPageHeader";

export const Home = () => (
  <Layout>
    <NampiPageHeader
      main={
        <FormattedMessage
          description="The home page heading"
          defaultMessage="Nuns and Monks - <br></br> Prosopographical Interfaces"
          values={{ br: (msg: string) => <br></br> }}
        />
      }
      sub={
        <>
          <Paragraph className="pb-4 md:pb-0 grey">
            <FormattedMessage
              description="The home page content"
              defaultMessage="Welcome to the Project-Website of NAMPI!"
            />
          </Paragraph>
        </>
      }
    ></NampiPageHeader>
    <SideGridLayout
      left={
        <>
          <div className="max-w-xxl">
            <Heading className="font-bold">
              <FormattedMessage
                defaultMessage="Project goals"
                description="Heading for the project goals section"
              ></FormattedMessage>
            </Heading>
            <Paragraph>
              <FormattedMessage
                description="short description of web page goals"
                defaultMessage="The project was launched in June 2019 as part of the Go!Digital funding programme of the Austrian Academy of Sciences. By the end of the project, NAMPI will incorporate data from already available databases like ProDomo or Germania Sacra as well as from previously unpublished sources like profession books. In this way NAMPI will contribute to making information on the lives of early modern nuns and monks available to researchers and the general public alike and help to further our knowledge about our past and our cultural heritage."
              ></FormattedMessage>
            </Paragraph>
            <br></br>
          </div>
          <div className="max-w-xl">
            <Heading className="font-bold">Background</Heading>
            <FormattedMessage
              description="Scientific background of the project-page"
              defaultMessage="Prosopography is a very important research area in the humanities, as it enables researchers to answer a number of important questions about historical societies and the lives of people within them that are difficult to answer when only considering primary sources about individual persons or events alone. The various sources available to us about early modern European Catholic nuns and monks are among the most interesting for transformation into a modern prosopographical database. This is because monastic communities were highly interconnected throughout Europe, the nuns and monks came from a wide range of geographic and social backgrounds, and the data they produced about themselves and their peers was often of very high quality and well- structured."
            ></FormattedMessage>
          </div>
          <br></br>
        </>
      }
      right={
        <div>
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
