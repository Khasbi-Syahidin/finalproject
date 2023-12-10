import React from "react";
import { useState } from "react";

export default function Navbar({ toggleSidebar, auth }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <nav className="relative flex flex-wrap sm:mt-0 mb-1 items-center justify-between px-0 sm:px-0 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start">
            <div className="flex items-center xl:ml-68.5 justify-between w-full sm:px-4 py-1 mx-auto lg:mt-6 md:mt-6 flex-wrap-inherit">
                <div className="flex items-center mt-2 grow sm:mt-0 lg:flex lg:basis-auto">
                    <div className="relative flex justify-center items-center pr-2 xl:ml-68.5">
                        <img
                            src={
                                auth.user.image
                                    ? `/storage/image/user/${auth.user.image}`
                                    : `/storage/image/user/default-profile.png`
                            }
                            alt="profile"
                            className="w-10 rounded-md"
                        />

                        <div className="flex flex-col ml-2">
                            <span className="text-sm font-semibold">
                                {auth.user.name}
                            </span>
                            <span className="text-xs text-gray-500">
                                Admin
                            </span>
                        </div>
                    </div>
{/*
                    <div className="flex items-center md:ml-auto justify-between">
                        <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                            <input
                                type="text"
                                className="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft w-full md:w-64 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                placeholder="Type here..."
                            />
                        </div>
                    </div> */}

                    <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                        {/* online builder btn  */}
                        {/* <li className="flex items-center">
                <a className="inline-block px-8 py-2 mb-0 mr-4 text-xs font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro border-fuchsia-500 ease-soft-in hover:scale-102 active:shadow-soft-xs text-fuchsia-500 hover:border-fuchsia-500 active:bg-fuchsia-500 active:hover:text-fuchsia-500 hover:text-fuchsia-500 tracking-tight-soft hover:bg-transparent hover:opacity-75 hover:shadow-none active:text-white active:hover:bg-transparent" target="_blank" href="https://www.creative-tim.com/builder/soft-ui?ref=navbar-dashboard&amp;_ga=2.76518741.1192788655.1647724933-1242940210.1644448053">Online Builder</a>
              </li> */}
                        <li className="flex items-center pl-4 xl:hidden md:hidden">
                            <button onClick={toggleSidebar}>
                                <div
                                    className="w-6 my-auto"
                                    onClick={handleClick}
                                >
                                    {isClicked ? (
                                        <div className="">
                                            <i className="ease-soft m-0 block h-0.5 bg-slate-500 transition-all transform rotate-45"></i>
                                            <i className="hidden ease-soft relative  h-0.5 bg-slate-500 transition-all"></i>
                                            <i className="ease-soft block h-0.5 bg-slate-500 transition-all transform -rotate-45"></i>
                                        </div>
                                    ) : (
                                        <>
                                            <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                            <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                            <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                        </>
                                    )}
                                </div>
                            </button>
                        </li>

                        {/* notifications */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
