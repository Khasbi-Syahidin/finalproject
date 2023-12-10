import { Link } from "@inertiajs/react";
import React from "react";

function ProfileUser({ auth, peminjaman, pembelian }) {
    // console.log(auth);

    return (
        <>
            <div className="w-full flex items-center justify-center">
                <div className="w-full flex flex-col items-center py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg">
                    <div className="w-full flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <Link href={`/editprofile/${auth.user.id}`}>
                                <div className="rounded w-20">
                                    <img
                                        src={
                                            auth.user.image
                                                ? `/storage/image/user/${auth.user.image}`
                                                : `/storage/image/user/default-profile.png`
                                        }
                                        alt="profile"
                                        className="object-center object-cover w-full h-full rounded-full aspect-square"
                                    />
                                </div>
                            </Link>
                            <p className="mt-3 text-sm lg:text-xl md:text-base font-semibold text-center text-white">
                                {auth.user.name}
                            </p>
                            <p className="text-xs sm:text-xs md:text-sm text-center text-white">
                                {auth.user.email}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-7 w-full">
                        <div className="m-auto flex flex-col">
                            <p className="text-xs text-center text-gray-300">
                                Beli Buku
                            </p>
                            <p className="mt-2 text-center text-base sm:text-base md:text-xl 2xl:text-2xl text-gray-50">
                                {pembelian.length}
                            </p>
                        </div>
                        <div className="m-auto flex flex-col">
                            <p className="text-xs text-center text-gray-300">
                                Pinjam Buku
                            </p>
                            <p className="mt-2 text-center text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">
                                {peminjaman.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileUser;
