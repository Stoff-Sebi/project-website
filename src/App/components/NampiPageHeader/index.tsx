import React from "react";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";

interface Props {
  main: JSX.Element;
  sub: JSX.Element;
  children?: never;
}

/**
 * Main page header used in the NAMPI project
 * @param props 
 * @returns 
 */
export const NampiPageHeader: React.FC<Props> = (props) => {
  return (
    <>
      <Heading className="text-5xl">{props.main}</Heading>
      <Paragraph className="pb-4 md:pb-0 grey">{props.sub}</Paragraph>
      <hr className="border-solid border-t-4 border-grey rounded-md w-10"
      ></hr>
      <br></br>
    </>
  );
};
