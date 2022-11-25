import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

const KanbanCol = ({title, values}) => {
    return (
        <div className="w-1/3">
            {values.map((value: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
                return (
                    <div>
                        {title}
                        {values.title}
                    </div>
                )
            })}
        </div>
    );
}

export default KanbanCol;