import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MicNoneRoundedIcon from '@mui/icons-material/MicNoneRounded';
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import * as React from "react";
import {Badge, FormControlLabel, styled, Switch} from "@mui/material";
import {BiSquareRounded} from "react-icons/all";
import {useState} from "react";

const NavBar = () => {

    const [profileOpen, setProfileOpen] = useState(false);

    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 48,
        padding: 7,
        '& .MuiSwitch-switchBase': {
            top: 8,
            margin: 0,
            padding: 0,
            transform: 'translateX(6px)',
            '&.Mui-checked': {
                color: '#fff',
                transform: 'translateX(22px)',
                '& .MuiSwitch-thumb:before': {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                        '#6d28d9',
                    )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                },
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#fff',
            width: 32,
            height: 32,
            '&:before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#6d28d9',
                )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            },
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            borderRadius: 20,
        },
    }));

    return (
        <div>
            <nav style={{backgroundColor: "#f9f9f9"}}>
                <div className="w-full">
                    <div className="relative flex flex-row items-center justify-between h-20">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <button type="button"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {/* Icon when menu is closed. */}
                                {/* Menu open: "hidden", Menu closed: "block" */}
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                                {/* Icon when menu is open. */}
                                {/* Menu open: "block", Menu closed: "hidden" */}
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="w-1/5 sm:visible">
                            <img src={"logo-removebg.svg"} className="bg-transparent" alt={"logo_text"}/>
                        </div>
                        <div className="w-4/5 relative flex flex-nowrap">
                            <div className="w-1/3 p-3">
                                <div className="relative">
                                    <GraphicEqRoundedIcon className="absolute text-purple-700 top-3 left-3"/>
                                    <input type="text"
                                       className="bg-white placeholder-purple-700 h-12 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                                       placeholder="Motivaider..."/>
                                    <SearchRoundedIcon className="absolute text-gray-400 top-3 right-16 hover:text-gray-600 cursor-pointer"/>
                                    <span className="absolute top-3 right-3 border-l pl-3">
                                        <MicNoneRoundedIcon className="text-purple-700 hover:text-purple-900 hover:cursor-pointer"/>
                                    </span>
                                </div>
                            </div>
                            <div className="w-1/3 absolute right-0 flex flex-nowrap ">
                                <div className="mt-2">
                                    <FormControlLabel
                                        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                                        label=""
                                    />
                                    <Badge badgeContent={""} color="primary" variant={"dot"}>
                                        <MailOutlineRoundedIcon color="action" />
                                    </Badge>
                                </div>
                                <div className="relative inline-block mt-3">
                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center mx-9 rounded-md border outline-none border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-gray-100"
                                            id="menu-button" aria-expanded="true" aria-haspopup="true"
                                            onClick={() => setProfileOpen(!profileOpen)}
                                        >
                                            <img src={"https://i.pravatar.cc/150?img=3"} className="rounded-full w-8 h-8" alt={"profile"}/>
                                            <div className="ml-2 mt-2 flex flex-nowrap">
                                                <p className="text-gray-400">Hey,&nbsp;</p><p className="text-purple-700">Michel</p>
                                                <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path
                                                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                      />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                    {profileOpen && (
                                        <div
                                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
                                        >
                                            <div className="py-1" role="none">
                                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm"
                                                   role="menuitem" id="menu-item-0">Account settings</a>
                                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm"
                                                   role="menuitem" id="menu-item-1">Support</a>
                                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm"
                                                   role="menuitem" id="menu-item-2">License</a>
                                                <form method="POST" action="#" role="none">
                                                    <button type="submit"
                                                            className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                                            role="menuitem" id="menu-item-3">Sign out
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;