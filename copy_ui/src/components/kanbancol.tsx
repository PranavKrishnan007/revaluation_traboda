import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

const values = [
    {
        "title": "App UI Redesign",
        "tags_present": "yes",
        "tags": [
            "Mobile",
            "Redesign"
        ],
        "Assignee": [
            "sai",
            "karthik",
            "surya",
            "sai",
            "karthik",
            "surya",
            "akshaj",
            "abhiram",
            "someone"
        ],
        "tasks": "16",
        "hours": "68",
        "image": "https://i.imgur.com/1ZQYQYR.png",
        "link": "https://www.figma.com/file/1ZQYQYR.png",
        "description": "",
        "by": "karthik",
        "by_image": "https://i.imgur.com/1ZQYQYR.png"
    },
    {
        "title": "Dev Call",
        "tags_present": "",
        "tags": [],
        "Assignee": [
            "sai",
            "karthik",
            "surya"
        ],
        "tasks": "",
        "hours": "",
        "image": "https://i.imgur.com/1ZQYQYR.png",
        "link": "https://www.figma.com/file/1ZQYQYR.png",
        "link_description": "Meeting Notes",
        "description": "somethnig that is something is the thingy that is the thing which is the most importatnt thingy in the world",
        "by": "",
        "by_image": ""
    }
];

const title = "title";

const KanbanCol = ({title, values}) => {
    return (
        <div>
            {values.map((value: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
                return (
                    <div>
                        {title}
                        {value.title}
                    </div>
                )
            })}
        </div>
    );
}

export default KanbanCol;