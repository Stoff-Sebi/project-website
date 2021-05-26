
import React from "react";
import { Navbar } from "./Navbar"
import { useNampiLang } from "../../hooks/useNampiLang";
import Footer from "../../components/Layout/Footer";

interface Props {
  fluid?: boolean;
  children?: any
}

export const Layout: React.FC<Props> = (props) => {

  const { lang } = useNampiLang();

  return <>
    <div className="text-gray-800 h-screen leading-loose text-lg">
      <Navbar lang={lang}></Navbar>
      <div className={`m-3 lg:pt-10 ${ props.fluid ? '' : 'container xl:mx-auto xl:px-40'}`}>
          {props.children}
      </div>
      <Footer lang={lang}></Footer>
    </div>
    

  </>

}
