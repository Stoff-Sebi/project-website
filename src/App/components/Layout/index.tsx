
import React from "react";
import { Navbar } from "./Navbar"

interface Props {
  fluid?: boolean;
  children?: any
}

export const Layout: React.FC<Props> = (props) => {

  return <>
    <div className="text-gray-800">
      <Navbar></Navbar>
      <div className={`m-3 ${ props.fluid ? '' : 'container xl:mx-auto xl:px-40'}`}>
          {props.children}
      </div>
    </div>
    

  </>

}
