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
        <div className="w-2/12 border-r flex flex-col h-full">
            <div>
                <div className="text-gray-400 inline-flex p-7">
                    <Avatar
                        className="outline outline-offset-2 outline-green-400"
                        alt="Remy Sharp"
                        src="https://i.pravatar.cc/150?img=3"
                        sx={{ width: 50, height: 50 }}
                    />
                    <div className="ml-2 p-1">
                        <p className="text-xl text-primary">Michel Prada</p>
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
                    <div className="p-1">
                        <button className="w-full text-primary opacity-50 inline-flex hover:bg-primary/20 rounded-lg p-2 focus:opacity-100 focus:bg-primary/20">
                            <BiMessageAltDetail className="text-xl  mr-2 inline-flex"/>   Messages
                            <span
                                className="inline-flex justify-center items-center p-3 ml-9 w-2 h-2 text-sm font-medium
                        text-white bg-orange-400 rounded-full">3</span>
                        </button>
                    </div>
                    <div className="p-1">
                        <button className="w-full text-primary opacity-50 inline-flex hover:bg-primary/20 rounded-lg p-2 focus:opacity-100 focus:bg-primary/20">
                            <AiOutlineTeam className="text-xl  mr-2"/> Team Members
                        </button>
                    </div>
                </div>
            </div>
        </div>

        // <div className="w-2/12 border-r-[0.1] border-gray flex flex-col">
        // <div className="p-2 sticky top-0 overflow-auto w-full border-r-2 overflow-y-auto " style={{ height:"94vh", textAlign:"justify",  }}>
        //     <div className="mb-1 p-1 pl-8 mt-3">
        //         <div className="text-gray-400 inline-flex">
        //             <Avatar
        //                 className="outline outline-offset-2 outline-green-400"
        //                 alt="Remy Sharp"
        //                 src="https://i.pravatar.cc/150?img=3"
        //                 sx={{ width: 50, height: 50 }}
        //             />
        //             <div className="ml-2 p-1">
        //                 <p className="text-sm text-gray-600">User</p>
        //                 <p className="text-sm"> @User_name </p>
        //             </div>
        //         </div>
        //     </div>
        //     <div className=" mb-1 p-1 pl-5">
        //         <button className="inline-flex text-gray-400 hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
        //             <MdOutlineDashboardCustomize className="text-xl mr-2"/> Dashboard
        //         </button>
        //     </div>
        //     <div className="pb-3 p-1 pl-5">
        //         <button className="text-gray-400 inline-flex  hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500"
        //                 onClick={
        //                     () => setSidebarOpen(!sidebarOpen)
        //                 }
        //         >
        //             <CiFolderOn className="text-xl  mr-2" />
        //             Project Board
        //             { sidebarOpen ? <RiArrowDropDownLine className="text-2xl  ml-4"/> :<RiArrowDropRightLine className="text-2xl  ml-4"/>  }
        //
        //         </button>
        //         { sidebarOpen ? (<div className="pl-7">
        //             <div className="mt-1">
        //                 <button className="text-gray-400 hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
        //                     MotivAider
        //                 </button>
        //             </div>
        //             <div className="mt-1">
        //                 <button className="text-gray-400 hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
        //                     Reposee
        //                 </button>
        //             </div>
        //             <div className="mt-1" >
        //                 <button className="text-gray-400 hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
        //                     Walletoy
        //                 </button>
        //             </div>
        //         </div>): null
        //         }
        //     </div>
        //     <div className="pb-3 p-1 pl-5">
        //         <button className="text-gray-400 inline-flex hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
        //             <FiCalendar className="text-xl  mr-2"/> Calender
        //         </button>
        //     </div>
        //     <div className="pb-3 p-1 pl-5">
        //         <button className="text-gray-400 inline-flex hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
        //             <BiTask className="text-xl mr-2"/>  Tasks
        //         </button>
        //     </div>
        //     <div className="pb-3 p-1 pl-5">
        //         <button className="text-gray-400 inline-flex hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
        //             <BiMessageAltDetail className="text-xl  mr-2 inline-flex"/>   Messages
        //             <span
        //                 className="inline-flex justify-center items-center p-3 ml-9 w-2 h-2 text-sm font-medium
        //                 text-white bg-orange-400 rounded-full">3</span>
        //         </button>
        //     </div>
        //     <div className="pb-3 p-1 pl-5">
        //
        //         <button className="text-gray-400 inline-flex hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
        //             <AiOutlineTeam className="text-xl  mr-2"/>   Team Members
        //         </button>
        //     </div>
        //     <div>
        //         <div id="dropdown-cta" className="rounded-2xl dark:bg-blue-900 border-2 m-4 absolute bottom-2" role="alert">
        //             <img src={"https://cdn.dribbble.com/userupload/2767341/file/original-6a588c41f19ff52e43ef7bc7e8cfcb2b.jpg?compress=1&resize=1200x900"} className="rounded-2xl" alt="no task"/>
        //             <p className="m-2 text-lg font-bold">
        //                 No data to show,
        //                 Create new task now
        //             </p>
        //             <div className="w-full justify-center inline-flex bg-gray-200 rounded-2xl p-4"
        //             ><button className=" text-white bg-purple-800 rounded-2xl p-3 focus:text-white hover:bg-purple-900 active:bg-purple-800 ">
        //                 Create new task <AiOutlinePlus className="inline-block"/>
        //             </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </div>
    );
}
export default Sidebar;