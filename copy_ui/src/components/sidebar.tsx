import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import {CiFolderOn} from "react-icons/ci";
import {FiCalendar} from "react-icons/fi";
import {BiMessageAltDetail, BiTask} from "react-icons/bi";
import {AiOutlinePlus, AiOutlineTeam, AiOutlineUser} from "react-icons/ai";
import {RiArrowDropDownLine, RiArrowDropLeftLine, RiArrowDropRightLine, RiArrowDropUpLine} from "react-icons/ri";
import {useState} from "react";
import {Avatar} from "@mui/material";


const Sidebar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="w-3/12 border-r flex flex-col overflow-hidden" style={{height: "90vh"}}>
            <div>
                <div className="text-gray-400 inline-flex p-7">
                    <Avatar
                        className="ring ring-offset-2 ring-offset-[#f9f9f9] ring-green-400"
                        alt="Remy Sharp"
                        src="https://i.pravatar.cc/150?img=3"
                        sx={{ width: 50, height: 50 }}
                    />
                    <div className="ml-2 p-1">
                        <p className="text-xl whitespace-nowrap text-primary">Michel Prada</p>
                        <p className="text-sm opacity-50 text-primary"> @User_name </p>
                    </div>
                </div>
                <div className="pl-5 ml-1 mb-1 mr-10">
                    <button className="w-full inline-flex text-primary opacity-50 hover:bg-primary/20 text-lg rounded-lg p-2 focus:opacity-100 focus:bg-primary/20">
                        <GridViewRoundedIcon className="text-xl mt-1 mr-2"/> Dashboard
                    </button>
                </div>
                <div className="pb-3 pl-5 mr-5">
                    <button className="w-full text-primary opacity-50 inline-flex  hover:bg-primary/20 rounded-lg p-2 ml-1 focus:opacity-100 focus:bg-primary/20"
                            onClick={
                                () => setSidebarOpen(!sidebarOpen)
                            }
                    >
                        <FolderRoundedIcon className="text-xl mr-2" />
                        Project Board
                        { sidebarOpen ? <RiArrowDropDownLine className="text-2xl  ml-4"/> :<RiArrowDropRightLine className="text-2xl  ml-4"/>  }
                    </button>
                    { sidebarOpen ? (<div className="pl-7">
                        <div className="mt-1">
                            <button className="text-primary opacity-50 hover:bg-primary/20 rounded-lg p-1 focus:opacity-100 focus:bg-primary/20">
                                MotivAider
                            </button>
                        </div>
                        <div className="mt-1">
                            <button className="text-primary opacity-50 hover:bg-primary/20 rounded-lg p-1 focus:opacity-100 focus:bg-primary/20">
                                Reposee
                            </button>
                        </div>
                        <div className="mt-1" >
                            <button className="text-primary opacity-50 hover:bg-primary/20 rounded-lg p-1 focus:opacity-100 focus:bg-primary/20">
                                Walletoy
                            </button>
                        </div>
                    </div>): null
                    }
                    <div className="p-1">
                        <button className="w-full text-primary opacity-50 inline-flex hover:bg-primary/20 rounded-lg p-2 focus:bg-primary/20 focus:opacity-100">
                            <CalendarMonthRoundedIcon className="text-xl  mr-2"/> Calender
                        </button>
                    </div>
                    <div className="p-1">
                        <button className="w-full text-primary opacity-50 inline-flex hover:bg-primary/20 rounded-lg p-2 focus:bg-primary/20 focus:opacity-100">
                            <BiTask className="text-xl mr-2"/>  Tasks
                        </button>
                    </div>
                    <div className="p-1 relative">
                        <button className="w-full text-primary opacity-50 inline-flex hover:bg-primary/20 rounded-lg p-2 focus:opacity-100 focus:bg-primary/20">
                            <BiMessageAltDetail className="text-xl mr-2"/>   Messages
                            <span
                                className="inline-flex justify-center items-center absolute right-4 p-3 w-2 h-2 text-sm font-medium
                        text-white bg-orange-400 rounded-full">3</span>
                        </button>
                    </div>
                    <div className="p-1">
                        <button className="w-full text-primary opacity-50 inline-flex hover:bg-primary/20 rounded-lg p-2 focus:opacity-100 focus:bg-primary/20">
                            <AiOutlineTeam className="text-xl  mr-2"/> Team Members
                        </button>
                    </div>
                    { sidebarOpen ? (
                        <div className="border-2 rounded-2xl">
                            <p className="m-2 text-md text-bold">
                                No data to show,
                                Create new task now
                            </p>
                            <div className="w-full justify-center inline-flex bg-gray-200 rounded-lg p-4">
                                <button className=" text-white bg-purple-800 rounded-xl p-3 focus:text-white hover:bg-purple-900 active:bg-purple-800 ">
                                    Create new task <AiOutlinePlus className="inline-block"/>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="max-h-96 mt-10"> {/* fix this mt */}
                            <div className="rounded-2xl border-2 overflow-hidden" role="alert">
                                <img src="undraw_researching_re_fuod.svg" className="rounded-2xl" alt="no task" />
                                <p className="m-2 text-md text-bold">
                                    No data to show,
                                    Create new task now
                                </p>
                                <div className="w-full justify-center inline-flex bg-gray-200 rounded-2xl p-4">
                                    <button className=" text-white bg-purple-800 rounded-2xl p-3 focus:text-white hover:bg-purple-900 active:bg-purple-800 ">
                                        Create new task <AiOutlinePlus className="inline-block"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Sidebar;