import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import {Avatar, AvatarGroup} from "@mui/material";
import {useState} from "react";

const Card = ({ children, count }) => {
    const [tags, setTags] = useState(false);

    return (
            <div>
                {[...Array(count)].map((x, i) => {
                    return (
                        <div className="mt-4">
                            <div className="w-full max-w-sm bg-white rounded-lg border rounded-t-2xl shadow-xl">
                                {/*title area*/}
                                <div className="flex flex-row relative">
                                    <div className="text-2xl font-bold pt-3 px-5">
                                        {children[0].title}
                                    </div>
                                    <div className="absolute right-3 pt-3">
                                        <button
                                            className="rounded-full place-items-center"
                                            onClick={() => setTags(!tags)}
                                        >
                                            {tags ? (<MoreHorizOutlinedIcon className="text-xl place-self-center m-2"/>) : (<AddRoundedIcon className="text-xl place-self-center m-2"/>)}
                                        </button>
                                    </div>
                                </div>
                                {tags ? (
                                    <div className="flex flex-row gap-1 p-1 ml-3">
                                        <div className="">
                                            <button className="border w-full max-w-min text-primary backdrop-blur-2xl bg-primary/20 whitespace-nowrap flex flex-nowrap  hover:bg-primary/40 rounded-full "
                                            >
                                                <p className="mx-3">Mobile</p>
                                            </button>
                                        </div>
                                        <div className="">
                                            <button className="border w-full max-w-min text-primary backdrop-blur-2xl bg-primary/20 whitespace-nowrap flex flex-nowrap  hover:bg-primary/40 rounded-full "
                                            >
                                                <p className="mx-3">Redesign</p>
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    null
                                )}
                                <div className="flex flex-row py-3 px-5">
                                    <div className="flex flex-col">
                                        <p className="text-sm">Assigned to</p>
                                        <AvatarGroup total={13}sx={{
                                            '& .MuiAvatar-root': { width: 24, height: 24, fontSize: 15 },
                                        }}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 24, height: 24 }} />
                                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 24, height: 24 }} />
                                            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" sx={{ width: 24, height: 24 }}/>
                                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" sx={{ width: 24, height: 24 }}/>
                                        </AvatarGroup>
                                    </div>
                                </div>
                                <div className="my-1 mx-5">
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
                    )
                })}
            </div>
)}

export default Card;