import {RiArrowDropDownLine, RiArrowDropRightLine} from "react-icons/ri";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import {useState} from "react";
import {Avatar, AvatarGroup, Switch} from "@mui/material";
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import KanbanCol from "./kanbancol";

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


const MainHead = () => {
    const tags = true;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);

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
            <hr className="border-1 my-1 "/>
            {/*Kanban header*/}
            <div className="flex flex-row">
                <div className="w-1/3 p-5 border-r">
                    <div className="w-full max-w-sm bg-white rounded-lg border rounded-t-2xl shadow-xl">
                        {/*title area*/}
                        <div className="flex flex-row relative">
                            <div className="text-2xl font-bold pt-3 px-5">
                                App UI Redesign
                            </div>
                            <div className="absolute right-3 pt-3">
                                <button
                                    className="rounded-full place-items-center">
                                {tags ? (<MoreHorizOutlinedIcon className="text-xl place-self-center m-2"/>) : (<AddRoundedIcon className="text-xl place-self-center m-2"/>)}
                                </button>
                            </div>
                        </div>
                        {tags ? (
                            <div>
                                hello world
                            </div>
                        ) : (
                            null
                        )}
                        <div className="">
                            <a className="" href="#">
                                <img className="rounded-2xl" src="https://avatars.githubusercontent.com/u/89575829?s=400&u=04aac8af43a272f95d805edaa75ce0cb8633bc0a&v=4" alt="product image"/>
                            </a>
                        </div>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900">Apple Watch
                                    Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span
                                    className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">5.0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900">$599</span>
                                <a href="#"
                                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add
                                    to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainHead;