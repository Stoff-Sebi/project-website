import React from "react";
import { Layout } from "../../components/Layout";
import { FormattedMessage } from "react-intl";
import { Heading } from "../../components/Heading";
import { Paragraph } from "../../components/Paragraph";
import { SideGridLayout } from "../../components/SideGridLayout";
import { NampiPageHeader } from "App/components/NampiPageHeader";

export const About = () => {
  return (
    <Layout>
      <NampiPageHeader
        main={
          <FormattedMessage
            defaultMessage="About"
            description="About page"
          ></FormattedMessage>
        }
        sub={
          <FormattedMessage
            description="About page content description"
            defaultMessage="General information about the project"
          />
        }
      />
      <SideGridLayout
        left={
          <>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Nulla egestas erat sit amet mauris viverra rhoncus. Aliquam pharetra vitae mi vitae dapibus. Morbi tristique vel urna at dictum. Suspendisse sit amet arcu libero. Praesent feugiat quam id risus blandit mattis. Duis bibendum turpis at odio vestibulum, et congue risus lacinia. Sed semper urna nec velit venenatis, ut varius purus venenatis. Vivamus posuere porttitor libero. Praesent id commodo odio, sit amet scelerisque nunc."
                description="Intro text for about page"
              ></FormattedMessage>
            </Paragraph>
            <br></br>
            <Heading className="font-light" level={2}>
              <FormattedMessage
                defaultMessage="Some content"
                description="Describing some content..."
              ></FormattedMessage>
            </Heading>
            <Paragraph>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Paragraph>
            <br></br>
            <br></br>
            <Heading level={2}>
              <FormattedMessage
                defaultMessage="About the technology"
                description="Describing some content..."
              ></FormattedMessage>
            </Heading>
            <Paragraph>
              t is a long established fact that a reader will be distracted by
              the readable ors, as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web pa
            </Paragraph>
            <br></br>
            <br></br>
            <Heading level={2}>
              <FormattedMessage
                defaultMessage="UML"
                description="Describing some content..."
              ></FormattedMessage>
            </Heading>
            <Paragraph>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web pa
            </Paragraph>
          </>
        }
        right={
          <div style={{ border: "3px solid lightgrey", minHeight: "50vh" }}>
            <img src="https://picsum.photos/200/300?random=2" />
            <br></br>
            <br></br>
            <img src="https://picsum.photos/400/400?random=2" />
          </div>
        }
      />
    </Layout>
  );
};

export default About;
