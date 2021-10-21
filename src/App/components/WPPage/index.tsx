import { useWpPage } from "App/hooks/useWpPage";
import React from "react";
import { NampiPageHeader } from "../NampiPageHeader";
import styles from "./styles.module.css";

interface Props {
    wpEndpoint: string,
    id: number
}

/**
 * Component to render the different worpress pages according to nampi wordpress backend.
 * @param props 
 * @returns 
 */
const WPPage: React.FC<Props> = (props) => {

    const { pageData, reqURL } = useWpPage(props.wpEndpoint, props.id);

    return pageData ? (
        <>
            {pageData?.title.rendered} ( from wp-backend: {reqURL.toString()}
            <NampiPageHeader
                main={<>{pageData?.title.rendered}</>}
                sub={<p>Some subtitle?</p>}
            />
            <div className={styles.wpDiv} dangerouslySetInnerHTML={{__html: pageData?.content.rendered}}></div>
            <br></br> 
        </>
    ) : null
}


export default WPPage;