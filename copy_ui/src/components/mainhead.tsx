import {RiArrowDropDownLine, RiArrowDropRightLine} from "react-icons/ri";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import {useState} from "react";
import {Avatar, AvatarGroup, Switch} from "@mui/material";
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import Card from "./card";

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
        "description": "Oh god now you want a description also ? oh lord what do you expect from me ?",
        "by": "karthik",
        "by_image": "https://i.imgur.com/1ZQYQYR.png"
    }
];

const MainHead = () => {
    const [inProgress, setInProgress] = useState(2);
    const [completed, setCompleted] = useState(1);
    const [todo, setTodo] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    // const random = new TailwindColor().pick();

    return (
        <div className="w-full">
            <div className="flex flex-row grow pt-8 pl-6 text-primary font-bold">
            <h1 className="text-4xl mr-4">MotivAider</h1>
            <button className="w-full text-green-400 inline-flex whitespace-nowrap max-w-min rounded-lg p-2 ml-1"
                    onClick={
                        () => setSidebarOpen(!sidebarOpen)
                    }
            >
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <FiberManualRecordIcon className="place-self-center text-lg mr-2" />
                        <p className="text-xs place-self-center">
                        In Progress
                        </p>
                        { sidebarOpen ? <RiArrowDropDownLine className="text-xl place-self-center ml-1"/> :<RiArrowDropRightLine className="text-xl place-self-center ml-1"/>  }
                    </div>
                </div>
            </button>
            </div>
            <div className="flex flex-row mt-3 ml-5 gap-1 max-w-min">
                <button className="border w-full text-primary opacity-50 inline-flex  hover:bg-primary/20 rounded-full p-2 ml-1 focus:opacity-100 focus:bg-primary/20"
                        onClick={
                            () => setOpenOne(!openOne)
                        }
                >
                    <FilterAltOutlinedIcon className="text-xl place-self-center mx-2"/>
                    Filter
                    { openOne ? <RiArrowDropDownLine className="text-2xl ml-2"/> :<RiArrowDropRightLine className="text-2xl  ml-2"/>  }
                </button>
                <button className="border w-full text-primary opacity-50 inline-flex  hover:bg-primary/20 rounded-full p-2 ml-1 focus:opacity-100 focus:bg-primary/20"
                        onClick={
                            () => setOpenTwo(!openTwo)
                        }
                >
                    <CalendarMonthRoundedIcon className="text-xl place-self-center mx-2"/>
                    Today
                    { openTwo ? <RiArrowDropDownLine className="text-2xl ml-2"/> :<RiArrowDropRightLine className="text-2xl  ml-2"/>  }
                </button>
                <div className="border-r-2 mx-5 my-1"/>
                <AvatarGroup total={13}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <button className="border w-full text-primary backdrop-blur-2xl bg-primary/20 whitespace-nowrap flex flex-nowrap  hover:bg-primary/40 rounded-full p-2 ml-1"
                >
                    <p className="ml-2">Add member</p>
                    <AddRoundedIcon className="text-xl place-self-center mx-1"/>
                </button>
                <InsertLinkRoundedIcon className="text-xl place-self-center mx-4 cursor-pointer"/>
                <Switch defaultChecked className="absolute right-5"/>
            </div>
            <hr className="border-1 mx-7 mt-5"/>
            <div className="relative flex flex-col">
                <p className="text-primary/40 text-sm p-4 mt-2 ml-3">
                    Last updated on : 23 November, 2022
                </p>
                <div className="absolute right-0 flex flex-row mr-4">
                    <button className="border text-sm place-items-center text-primary mt-3 mx-3 max-w-min opacity-50 inline-flex  hover:bg-primary/20 rounded-full p-2 ml-1 focus:opacity-100 focus:bg-primary/20"
                            onClick={
                                () => setOpenTwo(!openTwo)
                            }
                    >
                        <CalendarMonthRoundedIcon className="text-xl place-self-center mx-2"/>
                        Today
                        { openTwo ? <RiArrowDropDownLine className="text-2xl ml-2"/> :<RiArrowDropRightLine className="text-2xl  ml-2"/>  }
                    </button>
                    <button className="border text-sm place-items-center text-primary mt-3 mx-3 max-w-min opacity-50 inline-flex  hover:bg-primary/20 rounded-full p-2 ml-1 focus:opacity-100 focus:bg-primary/20"
                            onClick={
                                () => setOpenTwo(!openTwo)
                            }
                    >
                        <CalendarMonthRoundedIcon className="text-xl place-self-center mx-2"/>
                        Today
                        { openTwo ? <RiArrowDropDownLine className="text-2xl ml-2"/> :<RiArrowDropRightLine className="text-2xl  ml-2"/>  }
                    </button>
                    <button className="border text-sm place-items-center text-primary mt-3 mx-3 max-w-min opacity-50 inline-flex  hover:bg-primary/20 rounded-full p-2 ml-1 focus:opacity-100 focus:bg-primary/20"
                            onClick={
                                () => setOpenTwo(!openTwo)
                            }
                    >
                        <CalendarMonthRoundedIcon className="text-xl place-self-center mx-2"/>
                        Today
                        { openTwo ? <RiArrowDropDownLine className="text-2xl ml-2"/> :<RiArrowDropRightLine className="text-2xl  ml-2"/>  }
                    </button>
                </div>
            </div>
            <hr className="border-1 my-1"/>
            <div className="flex flex-row">
                <div className="flex flex-row relative p-4 w-1/3 border-r">
                    <button
                        className="flex flex-row w-full bg-orange-400 max-w-min whitespace-nowrap rounded-full  text-white text-sm px-2 py-1 hover:bg-orange-500"
                    >
                        In Progress
                    </button>
                    <div className="flex flex-row gap-2 absolute right-4 my-1 place-items-center">
                        <AddRoundedIcon
                            className="text-xl place-self-center cursor-pointer"
                            onClick={() => setInProgress(inProgress+1)}
                        />
                        <MoreHorizOutlinedIcon className="text-xl place-self-center"/>
                    </div>
                </div>
                <div className="flex flex-row relative p-4 w-1/3 border-r">
                    <button
                        className="flex flex-row w-full bg-green-400 max-w-min whitespace-nowrap rounded-full  text-white text-sm px-2 py-1 hover:bg-green-500"
                    >
                        Completed
                    </button>
                    <div className="flex flex-row gap-2 absolute right-4 my-1 place-items-center">
                        <AddRoundedIcon
                            className="text-xl place-self-center cursor-pointer"
                            onClick={() => setCompleted(completed+1)}
                        />
                        <MoreHorizOutlinedIcon className="text-xl place-self-center"/>
                    </div>
                </div>
                <div className="flex flex-row relative p-4 w-1/3 border-r">
                    <button
                        className="flex flex-row w-full bg-yellow-700 max-w-min whitespace-nowrap rounded-full  text-white text-sm px-4 py-1 hover:bg-yellow-800"
                    >
                        To do
                    </button>
                    <div className="flex flex-row gap-2 absolute right-4 my-1 place-items-center">
                        <AddRoundedIcon
                            className="text-xl place-self-center cursor-pointer"
                            onClick={() => setTodo(todo+1)}
                        />
                        <MoreHorizOutlinedIcon className="text-xl place-self-center"/>
                    </div>
                </div>
            </div>
            <hr/>
            {/*Kanban header*/}
            <div className="flex flex-row h-1/3 -mb-40" style={{backgroundColor: "#f9f9f9"}}>
                <div className="w-1/3 p-5 border-r h-full overflow-scroll scrollbar-hide">
                    {/*the card design*/}
                    <Card children={values} count={inProgress}/>
                </div>
                <div className="w-1/3 p-5 border-r h-full overflow-scroll scrollbar-hide">
                    <Card children={values} count={completed}/>
                </div>
                <div className="w-1/3 p-5 border-r h-full overflow-scroll scrollbar-hide">
                    <Card children={values} count={todo}/>
                </div>
            </div>
        </div>
    );
}

export default MainHead;