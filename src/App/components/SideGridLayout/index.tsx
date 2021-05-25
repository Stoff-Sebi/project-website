import React from "react";

interface Props {
  left?: JSX.Element;
  right?: JSX.Element;
  children?: never;
}

export const SideGridLayout: React.FC<Props> = (props) => {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-14">
      <div className="col-span-2">{props.left}</div>
      <div>{props.right}</div>
    </div>
  );
};
