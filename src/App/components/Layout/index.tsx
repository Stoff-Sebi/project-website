
import React from "react";
import { Navbar } from "../Navbar"

interface Props {
  children?: any
}

export const Layout: React.FC<Props> = (props) => {

  return <>
    <div className="text-gray-800">
      <Navbar></Navbar>
      <div className="m-3">
        {props.children}
      </div>
    </div>
    

  </>

}
