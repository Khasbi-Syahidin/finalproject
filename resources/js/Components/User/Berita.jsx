import React from "react";

export default function Berita() {
    return (
        <div className="bg-primary ">
            {/* Remove py-8 */}
            <div className="mx-auto container">
                <div className="flex items-center gap-4 flex-wrap justify-center lg:bg-transparent pb-4 p-3 bg-white ">
                        <div className="lg:hidden flex mx-auto pt-2 flex-wrap items-center lg:justify-center">
                            <h5 className="text-center text-text text-xl font-extrabold">Berita Terbaru</h5>
                            {/* <hr className="text-gray-800" /> */}
                        </div>
                            <hr className="lg:hidden bg-secondary opacity-100 w-full h-1.5 pb-1" />
                    {/* Card 1 */}
                    <div className="md:w-1/12 lg:block h-full hidden bg-white  shadow transform  flew flex-wrap transition-transform duration-300 hover:scale-105 border-r-4 border-text border-solid">
                        <div className="text text-center md:py-11 py-12 w-full h-full">

                        <h4 className="text-2xl font-extrabold text-text m-2">B</h4>
                        <h4 className="text-2xl font-extrabold text-text m-2">E</h4>
                        <h4 className="text-2xl font-extrabold text-text m-2">R</h4>
                        <h4 className="text-2xl font-extrabold text-text m-2">I</h4>
                        <h4 className="text-2xl font-extrabold text-text m-2">T</h4>
                        <h4 className="text-2xl font-extrabold text-text m-2">A</h4>
                        </div>
                    </div>
                        {/* <div className=" h-2  bg-text text-text " /> */}

                            {/* <div className="bg-text w-full h-1"></div> */}
                    <div className="lg:mb-0 md:w-1/4 shadow transform flex-wrap transition-transform duration-300 hover:scale-105">
                        <div>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmQ0dTTVAyguvhRtRN2lriFh2qqSeGMYcdQ&usqp=CAU"
                                className="w-full"
                            />
                        </div>
                        <div className="bg-white">
                            <div className="p-4">
                                <div className="flex items-center">
                                    <h2 className="text-lg font-semibold">
                                        Pertemuan Bersama Bupati & Wakil Bupati Kota Bogor
                                    </h2>
                                </div>
                                <p className="text-xs text-gray-600 mt-2">
                                    The Apple iPhone XS is available in 3 colors
                                    with 64GB memory. Shoot amazing videos
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 1 Ends */}
                    {/* Card 1 */}
                    <div className="lg:mb-0 md:w-1/4 shadow transform transition-transform duration-300 hover:scale-105">
                        <div>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmQ0dTTVAyguvhRtRN2lriFh2qqSeGMYcdQ&usqp=CAU"
                                className="w-full"
                            />
                        </div>
                        <div className="bg-white">
                            <div className="p-4">
                            <div className="flex items-center">
                                    <h2 className="text-lg font-semibold">
                                        Pertemuan Bersama Bupati & Wakil Bupati Kota Bogor
                                    </h2>
                                </div>
                                <p className="text-xs text-gray-600 mt-2">
                                    The Apple iPhone XS is available in 3 colors
                                    with 64GB memory. Shoot amazing videos
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 1 Ends */}
                    {/* Card 1 */}
                    <div className="lg:mb-0 md:w-1/4 shadow transform transition-transform duration-300 hover:scale-105">
                        <div>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmQ0dTTVAyguvhRtRN2lriFh2qqSeGMYcdQ&usqp=CAU"
                                className="w-full"
                            />
                        </div>
                        <div className="bg-white">
                            <div className="p-4">
                            <div className="flex items-center">
                                    <h2 className="text-lg font-semibold">
                                        Pertemuan Bersama Bupati & Wakil Bupati Kota Bogor
                                    </h2>
                                </div>
                                <p className="text-xs text-gray-600 mt-2">
                                    The Apple iPhone XS is available in 3 colors
                                    with 64GB memory. Shoot amazing videos
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 1 Ends */}
                </div>
            </div>
        </div>
    );
}
