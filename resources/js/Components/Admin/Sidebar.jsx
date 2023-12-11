import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

export default function Sidebar({ showMenu, page }) {
    const [activeButton, setActiveButton] = useState(
        parseInt(localStorage.getItem("activeButton")) || 1
    );

    // Menggunakan useEffect untuk menyimpan nilai activeButton ke localStorage setiap kali berubah
    useEffect(() => {
        localStorage.setItem("activeButton", activeButton.toString());
    }, [activeButton]);

    const buttonSidebar = (index) => {
        setActiveButton(index);
    };

    // Panggil buttonSidebar dengan nilai page saat komponen Sidebar dipasang
    useEffect(() => {
        buttonSidebar(page);
    }, [page]);

    // ... (lanjutkan dengan logika Anda)

    return (
        <aside
            className={`${
                showMenu ? "block shadow-md backdrop-blur-xl" : "hidden"
            } max-w-62.5 xl:block lg:block ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased transition-transform duration-200 xl:left-0 xl:bg-transparent ease-in-out ${
                showMenu ? "shadow-md backdrop-blur-md" : ""
            }`}
        >
            {/* <aside className="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-50 xl:bg-transparent"> */}
            <div className="h-12 flex justify-center">
                <div className="flex pl-3 items-center mb-6 xl:mb-0 lg:mb-0 justify-center">
                    <img
                        src='/storage/image/logo_perpusku2.png'
                        alt=""
                        className="w-20 my-auto drop-shadow-xl"
                    />
                </div>
            </div>

            <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

            <div className="items-center block w-auto max-h-screen h-sidenav grow basis-full">
                <ul className="flex flex-col pl-0 mb-0">
                    <li className="mt-0.5 w-full">
                        <Link
                            href={route("admin.dashboard")}
                            // onClick={() => buttonSidebar(1)}
                            className={`${
                                activeButton === 1 ? "shadow-soft-2xl" : ""
                            } py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors`}
                        >
                            <div
                                className={`${
                                    activeButton === 1
                                        ? " bg-gradient-to-tl from-purple-700 to-pink-500"
                                        : ""
                                } shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5 `}
                            >
                                <svg
                                    width="12px"
                                    height="12px"
                                    viewBox="0 0 45 40"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <title>shop</title>
                                    <g
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            transform="translate(-1716.000000, -439.000000)"
                                            fill={`${
                                                activeButton === 1
                                                    ? " #fff"
                                                    : " #3A416F"
                                            }`}
                                            fillRule="nonzero"
                                        >
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(0.000000, 148.000000)">
                                                    <path
                                                        className="opacity-60"
                                                        d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"
                                                    ></path>
                                                    <path
                                                        className=""
                                                        d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                Dashboard
                            </span>
                        </Link>
                    </li>

                    <li className="mt-0.5 w-full">
                        <Link
                            href={route("admin.update")}
                            // onClick={() => buttonSidebar(2)}
                            className={`${
                                activeButton === 2 ? "shadow-soft-2xl" : ""
                            } py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors`}
                        >
                            <div
                                className={`${
                                    activeButton === 2
                                        ? " bg-gradient-to-tl from-purple-700 to-pink-500"
                                        : ""
                                } shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5 `}
                            >
                                <svg
                                    width="12px"
                                    height="12px"
                                    viewBox="0 0 42 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <title>office</title>
                                    <g
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            transform="translate(-1869.000000, -293.000000)"
                                            fill={`${
                                                activeButton === 2
                                                    ? " #fff"
                                                    : " #3A416F"
                                            }`}
                                            fillRule="nonzero"
                                        >
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(153.000000, 2.000000)">
                                                    <path
                                                        className="opacity-60"
                                                        d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"
                                                    ></path>
                                                    <path
                                                        className=""
                                                        d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                Postingan
                            </span>
                        </Link>
                    </li>
                    <li className="mt-0.5 w-full">
                        <Link
                            href={route("admin.transaksi")}
                            // onClick={() => buttonSidebar(3)}
                            className={`${
                                activeButton === 3 ? "shadow-soft-2xl" : ""
                            } py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors`}
                        >
                            <div
                                className={`${
                                    activeButton === 3
                                        ? " bg-gradient-to-tl from-purple-700 to-pink-500"
                                        : ""
                                } shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5 `}
                            >
                                <svg
                                    width="12px" // Atur ukuran width
                                    height="12px" // Atur ukuran height
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <title>office</title>
                                    <g
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            transform="translate(-1869.000000, -293.000000)"
                                            fill={`${
                                                activeButton === 3
                                                    ? " #fff"
                                                    : " #3A416F"
                                            }`}
                                            fillRule="nonzero"
                                        >
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(153.000000, 2.000000)">
                                                    <path
                                                        className=""
                                                        d="M8.503 5c-.258-1.675.039-3.562 1.228-5h7.259c-.522.736-1.768 2.175-1.391 5h-1.154c-.147-1.336.066-2.853.562-4h-4.726c-.665 1.003-.89 2.785-.656 4h-1.122zm8.124-1v.675c0 .732-.583 1.325-1.304 1.325h-6.646c-.72 0-1.303-.593-1.303-1.325v-.675h-2.374v20h14v-20h-2.373zm.373 18h-10v-14h10v14zm-1-13h-8v4h8v-4zm-6 7h-2v1h2v-1zm3 0h-2v1h2v-1zm3 0h-2v1h2v-1zm-6-2h-2v1h2v-1zm3 0h-2v1h2v-1zm3 0h-2v1h2v-1zm-6 4h-2v1h2v-1zm3 0h-2v1h2v-1zm3 0h-2v1h2v-1zm0 2h-2v1h2v-1zm-6 0h-2v1h2v-1zm3 0h-2v1h2v-1z"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                Transaksi
                            </span>
                        </Link>
                    </li>
                    <li className="mt-0.5 w-full">
                        <Link
                            href={route("admin.product")}
                            // onClick={() => buttonSidebar(4)}
                            className={`${
                                activeButton === 4 ? "shadow-soft-2xl" : ""
                            } py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors`}
                        >
                            <div
                                className={`${
                                    activeButton === 4
                                        ? " bg-gradient-to-tl from-purple-700 to-pink-500"
                                        : ""
                                } shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5 `}
                            >
                                <svg
                                    width="12px" // Atur ukuran width
                                    height="12px" // Atur ukuran height
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <title>office</title>
                                    <g
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            transform="translate(-1869.000000, -293.000000)"
                                            fill={`${
                                                activeButton === 4
                                                    ? " #fff"
                                                    : " #3A416F"
                                            }`}
                                            fillRule="nonzero"
                                        >
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(153.000000, 2.000000)">
                                                    <path
                                                        className=""
                                                        d="M11.5 23l-8.5-4.535v-3.953l5.4 3.122 3.1-3.406v8.772zm1-.001v-8.806l3.162 3.343 5.338-2.958v3.887l-8.5 4.534zm-10.339-10.125l-2.161-1.244 3-3.302-3-2.823 8.718-4.505 3.215 2.385 3.325-2.385 8.742 4.561-2.995 2.771 2.995 3.443-2.242 1.241v-.001l-5.903 3.27-3.348-3.541 7.416-3.962-7.922-4.372-7.923 4.372 7.422 3.937v.024l-3.297 3.622-5.203-3.008-.16-.092-.679-.393v.002z"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                Product
                            </span>
                        </Link>
                    </li>
                    <li className="mt-0.5 w-full">
                        <Link
                            href={route("admin.users")}
                            className={`${
                                activeButton === 5 ? "shadow-soft-2xl" : ""
                            } py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors`}
                        >
                            <div
                                className={`${
                                    activeButton === 5
                                        ? " bg-gradient-to-tl from-purple-700 to-pink-500"
                                        : ""
                                } shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5 `}
                            >
                                <svg
                                    width="12px" // Atur ukuran width
                                    height="12px" // Atur ukuran height
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <title>office</title>
                                    <g
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            transform="translate(-1869.000000, -293.000000)"
                                            fill={`${
                                                activeButton === 5
                                                    ? " #fff"
                                                    : " #3A416F"
                                            }`}
                                            fillRule="nonzero"
                                        >
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(153.000000, 2.000000)">
                                                    <path
                                                        className=""
                                                        d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                User
                            </span>
                        </Link>
                    </li>
                    {/* <li className="mt-0.5 w-full">
                        <Link
                            href={route("admin.dashboard")}
                            // onClick={() => buttonSidebar(6)}
                            className={`${
                                activeButton === 6 ? "shadow-soft-2xl" : ""
                            } py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors`}
                        >
                            <div
                                className={`${
                                    activeButton === 6
                                        ? " bg-gradient-to-tl from-purple-700 to-pink-500"
                                        : ""
                                } shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5 `}
                            >
                                <svg
                                    width="12px" // Atur ukuran width
                                    height="12px" // Atur ukuran height
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <title>office</title>
                                    <g
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            transform="translate(-1869.000000, -293.000000)"
                                            fill={`${
                                                activeButton === 6
                                                    ? " #fff"
                                                    : " #3A416F"
                                            }`}
                                            fillRule="nonzero"
                                        >
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(153.000000, 2.000000)">
                                                    <path
                                                        className=""
                                                        d="M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-6-6h-9.667l-5.333 4v-4h-3v-14.001h18v14.001zm-9-4.084h-5v1.084h5v-1.084zm5-2.916h-10v1h10v-1zm0-3h-10v1h10v-1z"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                Form Pengaduan
                            </span>
                        </Link>
                    </li> */}
                    <li className="mt-0.5 w-full">
                        <Link
                            method="post"
                            href={route("logout")}
                            as="button"
                            className={`${
                                activeButton === 7 ? "shadow-soft-2xl" : ""
                            } py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors`}
                        >
                            <div
                                className={`${
                                    activeButton === 7
                                        ? " bg-gradient-to-tl from-purple-700 to-pink-500"
                                        : ""
                                } shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5 `}
                            >
                                <svg
                                    width="12px" // Atur ukuran width
                                    height="12px" // Atur ukuran height
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <title>office</title>
                                    <g
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            transform="translate(-1869.000000, -293.000000)"
                                            fill={`${
                                                activeButton === 7
                                                    ? " #fff"
                                                    : " #3A416F"
                                            }`}
                                            fillRule="nonzero"
                                        >
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(153.000000, 2.000000)">
                                                    <path
                                                        className=""
                                                        d="M21 14.874v-1.814h-3.25c-.745 0-1.128-.26-1.451-.706l-1.709-2.302-2.791 3.024 1.509 2.149c.478.753.514 1.267.514 1.952v5.823h-2.699v-5.474c-.021-1.512-2.455-2.945-3.303-1.723l-1.617 2.281c-.359.51-.971.686-1.565.686h-4.638v-2.621l3.483-.003c.544 0 1.017-.193 1.274-.806l1.549-3.782c.269-.563.632-1.076 1.076-1.515l3.609-3.573-1.02-.891c-.306-.267-.716-.381-1.116-.311l-2.999.525-.471-2.201 4.115-.784c.771-.147 1.433.103 2.009.636l3.961 3.656c.628.57 1.272 1.563 2.276 3.047.184.272.443.656 1.053.656h2.201v-1.85l3 2.96-3 2.961zm-3.101-8.747c1.403-.268 2.323-1.623 2.055-3.026-.269-1.403-1.624-2.323-3.026-2.055-1.403.269-2.323 1.624-2.055 3.026.268 1.404 1.623 2.324 3.026 2.055z"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                Log Out
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
