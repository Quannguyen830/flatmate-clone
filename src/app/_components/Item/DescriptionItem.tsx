import React from "react";
import { ItemProps } from "./BreadcrumbsItem";

const DescriptionItem: React.FC<ItemProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default DescriptionItem;