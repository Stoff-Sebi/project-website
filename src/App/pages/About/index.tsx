import React from "react";
import { Layout } from "../../components/Layout";
import { FormattedMessage } from "react-intl";
import { Heading } from "../../components/Heading";

export const About = () => {

  return (
    <Layout>
        <Heading>
          <FormattedMessage
            defaultMessage="About"
            description="About page"
          ></FormattedMessage>
        </Heading>
    </Layout>
    
  )

}

export default About;