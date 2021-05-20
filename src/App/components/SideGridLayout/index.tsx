import React from "react";

interface Props {
  left?: JSX.Element;
  right?: JSX.Element;
  children?: never;
}

export const SideGridLayout: React.FC<Props> = (props) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
      <div>{props.left}</div>
      <div>{props.right}</div>
    </div>
  );
};
