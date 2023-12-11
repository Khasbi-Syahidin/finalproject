import { Head, Link } from "@inertiajs/react";
// import React from 'react'
import React, { useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";

import "pure-react-carousel/dist/react-carousel.es.css";
// import PageButton from '../../components/PageButton';

export default function Navbar() {
    const [isFixed, setIsFixed] = useState(false);

    const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [showFilters, setShowfilters] = useState(false);
    const { data, setData, post, get } = useForm({
        Fiksi: false,
        NoFiksi: false,
        Novel: false,
        Biografi: false,
        Sejarah: false,
        Sains: false,
        Pendidikan: false,
        Sastra: false,
        Bisnis: false,
        Teknologi: false,
        Seni: false,
        Hobi: false,
        Anak: false,
        Remaja: false,
        Dewasa: false,
        Dijual: false,
        Dipinjam: false,
    });

    // const {Fiksi, setFiksi} = useState(false);

    const changeHandler = (e) => {
        setData(e.target.name, e.target.checked);
    };

    const applyFilters = (e) => {
        e.preventDefault();
        // Kirim formData ke server untuk filter
        post(route("filter1"), data);
        // console.log(data);
        // get(route("home"), data);
        console.log(data);
    };

    // Search

    const {
        data: form1Data,
        setData: setForm1Data,
        post: postForm1,
    } = useForm({
        search: "",
        // ... tambahkan field lain sesuai kebutuhan
    });

    const handleForm1Change = (e) => {
        const { name, value } = e.target;
        setForm1Data((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleForm1Submit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan data dari Formulir Pertama
        postForm1(route("search"), form1Data);
        console.log("Data search", form1Data);
    };

    //Navbar

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 100; // Atur ambang batas sesuai kebutuhan

            // Cek apakah posisi scroll telah mencapai ambang batas
            setIsFixed(scrollY > threshold);
        };

        // Daftarkan event listener untuk mendengarkan perubahan scroll
        window.addEventListener("scroll", handleScroll);

        // Membersihkan event listener pada unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className={`top-0 left-0 right-0 z-50 ${
                    isFixed ? "fixed" : "relative"
                }`}
            >
                {/* For md screen size */}
                <div
                    id="md-searchbar"
                    className={`${
                        mdOptionsToggle ? "hidden" : "flex"
                    } bg-secondary lg:hidden py-5 px-6 items-center justify-between`}
                >
                    <div className="flex items-center space-x-3 text-secondary dark:text-white">
                        <div>
                            <svg
                                className="fill-stroke"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18.9984 18.9999L14.6484 14.6499"
                                    stroke="currentColor"
                                    strokeWidth="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <form onSubmit={handleForm1Submit}>
                            <input
                                type="text"
                                name="search"
                                value={form1Data.search}
                                onChange={handleForm1Change}
                                placeholder="Cari Buku atau Penulis"
                                className="text-sm leading-none text-white border-collapse border-white rounded-md bg-secondary focus:outline-none outline-white w-50 h-7"
                            />
                        </form>
                    </div>
                    <div className="flex space-x-6 align-center">
                        <button
                            onClick={() => setShowfilters(!showFilters)}
                            className="hidden text-base font-normal leading-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary sm:flex "
                        >
                            <svg
                                className="mr-2 "
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6 4V8"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6 12V20"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 4V14"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 18V20"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18 4V5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18 9V20"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            aria-label="go to info"
                            className="text-secondary dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                        >
                            <Link href={route("user.info")}>
                                <svg
                                    className="fill-stroke"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="#fff"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
                                </svg>
                            </Link>
                        </button>
                    </div>
                </div>
                {/* For md screen size */}
                {/* For Dijual screens */}
                <div className="px-6 py-2 dark:bg-secondary bg-gray-50">
                    <div className="flex items-center justify-between mx-auto lg:container">
                        <img
                            src='/image/logo_perpusku1.png'
                            alt=""
                            className="w-20"
                        />
                        <div className="flex items-center justify-end space-x-4 xl:space-x-8">
                            <div className="items-center hidden gap-8 lg:flex">
                                <form onSubmit={handleForm1Submit}>
                                    <input
                                        type="text"
                                        name="search"
                                        value={form1Data.search}
                                        onChange={handleForm1Change}
                                        placeholder="Cari Buku atau Penulis"
                                        className="text-sm text-white placeholder-white border-collapse border-white rounded-md bg-secondary dark:placeholder-gray-300 focus:outline-none w-72 h-7"
                                    />
                                </form>
                            </div>
                            <div className="items-center hidden space-x-4 lg:flex xl:space-x-8">
                                <button
                                    onClick={() => setShowfilters(!showFilters)}
                                    className="flex items-center justify-center hidden text-base font-normal leading-4 text-white cursor-pointer  sm:flex focus:ring-secondary"
                                >
                                    <svg
                                        className="ml-3 mr-2 "
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M6 4V8"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M6 12V20"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 4V14"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 18V20"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M18 4V5"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M18 9V20"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <button
                                    aria-label="go to cart"
                                    className="text-secondary dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                                >
                                    <Link href={route("user.info")}>
                                        <svg
                                            className="fill-stroke"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="#fff"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
                                        </svg>
                                    </Link>
                                </button>
                            </div>
                            <div className="flex lg:hidden">
                                <button
                                    aria-label="show options"
                                    onClick={() =>
                                        setMdOptionsToggle(!mdOptionsToggle)
                                    }
                                    className="hidden text-black rounded dark:text-white dark:hover:text-gray-300 md:flex focus:outline-none focus:ring-2 focus:ring-gray-600"
                                >
                                    <svg
                                        className="fill-stroke"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 6H20"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10 12H20"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M6 18H20"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <button
                                    aria-label="open menu"
                                    onClick={() => setShowMenu(true)}
                                    className="text-black rounded dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 focus:ring-gray-600"
                                >
                                    <svg
                                        className="fill-stroke"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 6H20"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10 12H20"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M6 18H20"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* For small screen */}
                <div
                    id="mobile-menu"
                    className={`${
                        showMenu ? "flex" : "hidden"
                    } absolute z-10 inset-0 md:hidden bg-white flex-col`}
                >
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-secondary">
                        <div className="flex items-center gap-4 space-x- bg-secondary">
                            <div>
                                <svg
                                    className="fill-stroke text-secondary dark:text-white"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                                        stroke="currentColor"
                                        strokeWidth="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M18.9984 18.9999L14.6484 14.6499"
                                        stroke="currentColor"
                                        strokeWidth="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <form onSubmit={handleForm1Submit}>
                                <input
                                    type="text"
                                    name="search"
                                    value={form1Data.search}
                                    onChange={handleForm1Change}
                                    placeholder="Cari Buku atau Penulis"
                                    className="w-full text-sm text-white border-collapse border-white rounded-md bg-secondary placeholder-whi te dark:placeholder-gray-300 focus:outline-none h-7"
                                />
                            </form>
                        </div>
                        <button
                            onClick={() => setShowMenu(false)}
                            aria-label="close menu"
                            className="rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                        >
                            <svg
                                className="w-4 h-4  lg:w-6 lg:h-6"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M25 1L1 25"
                                    stroke="#FFF"
                                    strokeWidth="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M1 1L25 25"
                                    stroke="#FFF"
                                    strokeWidth="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        id="filterSection"
                        className={
                            "fixed md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full " +
                            (showFilters ? "block z-99" : "hidden")
                        }
                    >
                        {/* Cross button Code  */}
                        <div
                            onClick={() => setShowfilters(false)}
                            className="absolute top-0 right-0 px-4 cursor-pointer  md:py-10 lg:px-20 md:px-6 py-9 z-99"
                        >
                            <svg
                                className="w-4 h-4  lg:w-6 lg:h-6"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M25 1L1 25"
                                    stroke="#1F2937"
                                    strokeWidth="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M1 1L25 25"
                                    stroke="#27272A"
                                    strokeWidth="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="">
                        <ul
                            className={`flex flex-col space-y-8 bg-gray-50 w-full px-5 dark:bg-secondary ${
                                showFilters ? "hidden" : "flex"
                            }`}
                        >
                            <li className="">
                                <button
                                    onClick={() => setShowfilters(!showFilters)}
                                    className="flex items-center w-full py-4 pb-0 space-x-2 overflow-hidden text-base font-normal leading-4 text-white dark:text-white sm:hidden"
                                >
                                    <div className="text-center">
                                        <svg
                                            className="m-2 "
                                            width="19"
                                            height="19"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M6 4V8"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M6 12V20"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 4V14"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 18V20"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M18 4V5"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M18 9V20"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="m-0 text-sm">Filters</div>
                                </button>
                                <Link href={route("user.info")}>
                                    <button className="flex items-center w-full py-4 space-x-2 overflow-hidden text-base font-normal leading-4 text-white dark:text-white sm:hidden">
                                        <div className="text-center">
                                            <svg
                                                className="m-2 fill-stroke"
                                                width="19"
                                                height="19"
                                                viewBox="0 0 24 24"
                                                fill="#fff"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
                                            </svg>
                                        </div>
                                        <div className="text-sm">
                                            Informasi Akun
                                        </div>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Filter */}
            <div
                className={`fixed overflow-hidden w-full h-full z-50 m-auto top-0 bottom-0 ${
                    showFilters ? "block z-99" : "hidden"
                }`}
                style={{
                    backdropFilter: "blur(8px)",
                    backgroundColor: "rgba(000, 000, 000, 0.3)",
                }}
                id="modal"
            >
                <form onSubmit={applyFilters}>
                    <div
                        id="filterSection"
                        className={
                            "fixed md:py-10 lg:px-20 md:px-6 py-9 px-5 bg-gray-50 w-full " +
                            (showFilters ? "block z-99" : "hidden")
                        }
                    >
                        {/* Cross button Code  */}
                        <div
                            onClick={() => setShowfilters(false)}
                            className="absolute top-0 right-0 px-4 cursor-pointer  md:py-10 lg:px-20 md:px-6 py-9 z-99"
                        >
                            <svg
                                className="w-4 h-4  lg:w-6 lg:h-6"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M25 1L1 25"
                                    stroke="#1F2937"
                                    strokeWidth="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M1 1L25 25"
                                    stroke="#27272A"
                                    strokeWidth="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        {/* <hr className="w-full my-8 bg-gray-200  lg:w-6/12 md:my-10" /> */}

                        {/* Material Section */}
                        <div>
                            <Link href={route("user.info")}>
                                <div className="flex space-x-2 ">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16Z"
                                            stroke="#1F2937"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M19 10H12C10.8954 10 10 10.8954 10 12V19C10 20.1046 10.8954 21 12 21H19C20.1046 21 21 20.1046 21 19V12C21 10.8954 20.1046 10 19 10Z"
                                            stroke="#1F2937"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <p className="text-xl leading-5  lg:text-2xl lg:leading-6 font-Dipinjam text-secondary">
                                        Kategori Buku
                                    </p>
                                </div>
                            </Link>
                            <div className="grid flex-wrap grid-cols-3 mt-8  md:flex md:space-x-6 gap-y-8">
                                <div className="flex items-center justify-start space-x-2  md:justify-center md:items-center">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Fiksi"
                                        name="Fiksi"
                                        // value="Fiksi"
                                        checked={data.Fiksi}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Fiksi"
                                            >
                                                Fiksi
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="NoFiksi"
                                        name="NoFiksi"
                                        // value="NoFiksi"
                                        checked={data.NoFiksi}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="NoFiksi"
                                            >
                                                Non Fiksi
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end space-x-2  md:justify-center md:items-center">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Novel"
                                        name="Novel"
                                        value="Novel"
                                        checked={data.Novel}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Novel"
                                            >
                                                Novel
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-start space-x-2  md:justify-center md:items-center">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Biografi"
                                        name="Biografi"
                                        // value="Biografi"
                                        checked={data.Biografi}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Biografi"
                                            >
                                                Biografi
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Sejarah"
                                        name="Sejarah"
                                        // value="Sejarah"
                                        checked={data.Sejarah}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Sejarah"
                                            >
                                                Sejarah
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Sains"
                                        name="Sains"
                                        // value="Sains"
                                        checked={data.Sains}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Sains"
                                            >
                                                Sains
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Pendidikan"
                                        name="Pendidikan"
                                        // value="Pendidikan"
                                        checked={data.Pendidikan}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Pendidikan"
                                            >
                                                Pendidikan
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Sastra"
                                        name="Sastra"
                                        // value="Sastra"
                                        checked={data.Sastra}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Sastra"
                                            >
                                                Sastra
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Bisnis"
                                        name="Bisnis"
                                        // value="Bisnis"
                                        checked={data.Bisnis}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Bisnis"
                                            >
                                                Bisnis
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Teknologi"
                                        name="Teknologi"
                                        // value="Teknologi"
                                        checked={data.Teknologi}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Teknologi"
                                            >
                                                Teknologi
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Seni"
                                        name="Seni"
                                        // value="Seni"
                                        checked={data.Seni}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Seni"
                                            >
                                                Seni
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Hobi"
                                        name="Hobi"
                                        // value="Hobi"
                                        checked={data.Hobi}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Hobi"
                                            >
                                                Hobi
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Anak"
                                        name="Anak"
                                        // value="Anak"
                                        checked={data.Anak}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Anak"
                                            >
                                                Anak Anak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Remaja"
                                        name="Remaja"
                                        // value="Remaja"
                                        checked={data.Remaja}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Remaja"
                                            >
                                                Remaja
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Dewasa"
                                        name="Dewasa"
                                        // value="Dewasa"
                                        checked={data.Dewasa}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Dewasa"
                                            >
                                                Dewasa
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="w-full my-8 bg-gray-200  lg:w-6/12 md:my-10" />

                        {/* Size Section */}
                        <div>
                            <div className="flex space-x-2 ">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 5H14"
                                        stroke="#1F2937"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 7L14 5L12 3"
                                        stroke="#1F2937"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5 3L3 5L5 7"
                                        stroke="#1F2937"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M19 10V21"
                                        stroke="#1F2937"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M17 19L19 21L21 19"
                                        stroke="#1F2937"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21 12L19 10L17 12"
                                        stroke="#1F2937"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 10H5C3.89543 10 3 10.8954 3 12V19C3 20.1046 3.89543 21 5 21H12C13.1046 21 14 20.1046 14 19V12C14 10.8954 13.1046 10 12 10Z"
                                        stroke="#1F2937"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="text-xl leading-5  lg:text-2xl lg:leading-6 font-Dipinjam text-secondary">
                                    Status
                                </p>
                            </div>
                            <div className="grid flex-wrap grid-cols-3 mt-8  md:flex md:space-x-6 gap-y-8">
                                <div className="flex items-center justify-start  md:justify-center md:items-center">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Dijual"
                                        name="Dijual"
                                        value="Dijual"
                                        checked={data.Dijual}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Dijual"
                                            >
                                                Dijual
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ">
                                    <input
                                        className="w-4 h-4 mr-2"
                                        type="checkbox"
                                        id="Dipinjam"
                                        name="Dipinjam"
                                        value="Dipinjam"
                                        checked={data.Dipinjam}
                                        onChange={changeHandler}
                                    />
                                    <div className="inline-block ">
                                        <div className="flex items-center justify-center space-x-6 ">
                                            <label
                                                className="mr-2 text-sm font-normal leading-3 text-gray-600 "
                                                htmlFor="Dipinjam"
                                            >
                                                Dipinjam
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden w-full px-0 mt-10 md:flex lg:flex md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-20 md:px-6">
                            <button
                                // onClick={applyFilters}
                                className="w-full px-10 py-4 text-base leading-4 text-white hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-secondary font-Dipinjam bg-secondary"
                            >
                                Apply Filter
                            </button>
                        </div>
                        <div className="w-full px-0 mt-10 md:bottom-0 md:hidden lg:hidden md:py-10 lg:px-20 md:px-6">
                            <button
                                // onClick={applyFilters}
                                type="submit"
                                className="w-full px-10 py-4 text-base leading-4 text-white hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-secondary font-Dipinjam bg-secondary"
                            >
                                Apply Filter
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
