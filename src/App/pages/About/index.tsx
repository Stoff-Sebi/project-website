import React from "react";
import { Layout } from "../../components/Layout";
import { FormattedMessage } from "react-intl";
import { Heading } from "../../components/Heading";
import { Paragraph } from "../../components/Paragraph";
import { SideGridLayout } from "../../components/SideGridLayout";

export const About = () => {

  return (
    <Layout>
      <Heading>
        <FormattedMessage
          defaultMessage="About"
          description="About page"
        ></FormattedMessage>
      </Heading>
      <SideGridLayout
        left={
          <Paragraph>
            <FormattedMessage
              defaultMessage="Nulla egestas erat sit amet mauris viverra rhoncus. Aliquam pharetra vitae mi vitae dapibus. Morbi tristique vel urna at dictum. Suspendisse sit amet arcu libero. Praesent feugiat quam id risus blandit mattis. Duis bibendum turpis at odio vestibulum, et congue risus lacinia. Sed semper urna nec velit venenatis, ut varius purus venenatis. Vivamus posuere porttitor libero. Praesent id commodo odio, sit amet scelerisque nunc."
              description="Intro text for about page"
            ></FormattedMessage>
          </Paragraph>
        }
        right={<img src="https://picsum.photos/200/300?random=2"/>}
      />
    </Layout>
  );

}

export default About;