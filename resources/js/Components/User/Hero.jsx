import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Hero({ auth, carousels }) {
    // console.log(carousels);
    return (
        <div className="bg-white -z-1">
            <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-0 lg:py-0 pb-6 2xl:mx-auto lg:bg-white lg:container xl:container -z-1">
                {/* Mobile */}

                <CarouselProvider
                    className="relative block sm:hidden -z-1 "
                    naturalSlideWidth={100}
                    isIntrinsicHeight={true}
                    totalSlides={3}
                    visibleSlides={1}
                    step={1}
                    infinite={true}
                >
                    <div className="js-flickity flex justify-center items-center -z-1">
                        <ButtonBack
                            role="button"
                            aria-label="slide backward"
                            className="w-10 h-10 md:w-14 md:h-14 flex justify-center items-center bg-transparent  absolute z-30 left-0 ml-0 focus:outline-none cursor-pointer rounded-r-xl"  style={{ backdropFilter: 'blur(10px)' }}
                            id="prev"
                        >
                            <svg
                                width={8}
                                height={14}
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 1L1 7L7 13"
                                    stroke="black"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </ButtonBack>
                        <Slider  className="-z-1">
                            {carousels.map((carousel) => (
                                <Slide index={carousel.id} key={carousel.id}
                                className="-z-1">
                                    <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full -z-1">
                                        <div className="relative w-full h-full lg:block hidden shadow p-5">
                                            <img
                                                src={`/storage/image/carousel/${carousel.image}`}
                                                alt="sitting area"
                                                className="object-center object-cover w-full h-full"
                                            />
                                        </div>
                                        <div className="relative w-full h-full lg:hidden">
                                            <img
                                                src={`/storage/image/carousel/${carousel.image}`}
                                                alt="sitting area"
                                                className="object-center object-cover w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </Slide>
                            ))}
                        </Slider>
                        <ButtonNext
                            role="button"
                            aria-label="slide forward"
                            className="w-10 h-10 md:w-14 md:h-14 flex justify-center items-center bg-transparent  absolute z-2 right-0 mr-0 focus:outline-none cursor-pointer rounded-l-xl"  style={{ backdropFilter: 'blur(10px)' }}
                            id="next"
                        >
                            <svg
                                width={8}
                                height={14}
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L7 7L1 13"
                                    stroke="black"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                <CarouselProvider
                    className="relative hidden sm:block lg:w-full flex justify-center items-center py-3 bg-secondar -z-1"
                    naturalSlideWidth={100}
                    isIntrinsicHeight={true}
                    totalSlides={3}
                    visibleSlides={1}
                    step={1}
                    infinite={true}
                    currentSlide={1}
                >
                    <div className="js-flickity flex justify-center items-center -z-1">
                        <ButtonBack
                            role="button"
                            aria-label="slide backward"
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white  absolute z-30 left-0 ml-8  cursor-pointer"
                            id="prev"
                        >
                            <svg
                                width={8}
                                height={14}
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 1L1 7L7 13"
                                    stroke="black"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </ButtonBack>
                        <Slider className="carousel__sliderLarge -z-1">
                            {carousels.map((carousel) => (


                            <Slide
                                className="carousel__inner-slideLarge -z-1"
                                index={carousel.id} key={carousel.id}
                            >
                                <div className="gallery-cell w-full h-full  -z-1">
                                    <div className="relative w-full h-full lg:block hidden shadow">
                                        <img
                                            src={`/storage/image/carousel/${carousel.image}`}
                                            alt="sitting area"
                                            className="object-center object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                        <img
                                            src={`/storage/image/carousel/${carousel.image}`}
                                            alt="sitting area"
                                            className="object-center object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                            </Slide>
                             ))}
                        </Slider>
                        <ButtonNext
                            role="button"
                            aria-label="slide forward"
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white  absolute z-2 right-0 mr-8 "
                            id="next"
                        >
                            <svg
                                width={8}
                                height={14}
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L7 7L1 13"
                                    stroke="black"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
                <div className="lg:bg-white dark:bg-white lg:w-1/2 lg:ml-1 py-4 sm:px-8 md:px-2 lex flex items-center">
                    <div className="lg:ml-4 p-5">
                        <h1 className="md:w-8/12 my-auto lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-5xl sm:text-4xl text-4xl font-semibold text-text capitalize">
                            Explore worlds in pages, read!
                        </h1>
                        <p className=" md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-desk mt-5">
                            The more that you read, the more things you will
                            know. The more that you learn, the more places
                            you'll go
                        </p>
                        {auth.user ? (
                            // <Link
                            //     href={route("logout")}
                            //     method="post"
                            //     as="button"
                            // >
                                <button className=" hover:text-white text-xs sm:w-auto w-full mt-8 justify-between  focus:outline-none hover:shadow-md font-medium leading-none text-white py-4 px-4 bg-secondary flex items-center cursor-pointer">
                                    Halo {auth.user.name}, Yuk Mulai Petualangan
                                    Literasi!
                                    <div className="ml-2 mt-0.5">
                                        <svg
                                            className="fill-stroke"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.33325 8H12.6666"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10 10.6667L12.6667 8"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10 5.33301L12.6667 7.99967"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            // </Link>
                        ) : (
                            <Link
                            href={route("login")}
                            >
                                <button className=" hover:text-white mt-8 text-base justify-between  focus:outline-none hover:shadow-md font-medium leading-none text-white py-4 px-4 bg-secondary flex items-center cursor-pointer">
                                    Getting Started
                                    <div className="ml-2 mt-0.5">
                                        <svg
                                            className="fill-stroke"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.33325 8H12.6666"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10 10.6667L12.6667 8"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10 5.33301L12.6667 7.99967"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <style>
                {`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;

                        }
                    }

                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 0%;
                        padding-right: 0%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        z-index: -1;

                    }
                `}
            </style>
        </div>
    );
}
