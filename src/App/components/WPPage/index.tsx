import { useWpPage } from "App/hooks/useWpPage";
import React from "react";

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

    const { pageData } = useWpPage(props.wpEndpoint, props.id);

    return (
        <h1>
            {pageData?.title.rendered}
        </h1>
    )
}


export default WPPage;