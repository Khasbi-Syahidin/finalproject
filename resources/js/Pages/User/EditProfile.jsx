import { useEffect, useState } from "react";
// import PrimaryButton from "../PrimaryButton";
import { useForm, usePage, Link } from "@inertiajs/react";

function EditProfile({ user, auth }) {
    console.log(user);
    const [selectedFile, setSelectedFile] = useState(null);
    const { data, setData, processing, post } = useForm({
        user_id: user.id,
        image: user.image,
        name: user.name,
        gender: user.gender,
        phone: user.phone,
        NISN: user.NISN,
        TTL: user.TTL,
        alamat: user.alamat,
    });

    const handleChange3 = (field, value) => {
        setData((prevData) => ({
            ...prevData,
            [field]: field === "image" ? value[0] : value || "",
        }));

        setSelectedFile(value[0]);

        // console.log("File selected:", value[0]);
    };

    const handleChange = (field, value) => {
        setData((prevData) => ({
            ...prevData,
            [field]: field === "image" ? value[0] : value,
        }));

        // Set selectedFile state
        setSelectedFile(value[0]);
    };

    const submit = (e) => {
        e.preventDefault();

        // // Kirim formData ke server
        post(route('user.updateprofile'), data);

        console.log(data);
    };
    return (
        <>
            <div
                id="popup"
                className="z-50 fixed w-full flex justify-center inset-0"
            >
                <div className="w-full h-full bg-primary z-0 absolute inset-0" />
                <div className="mx-auto container">
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="bg-white rounded-md shadow-soft-2xl fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
                            <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                                <p className="text-base font-semibold">
                                    Edit Profile
                                </p>
                            </div>
                            <form
                                onSubmit={submit}
                                encType="multipart/form-data"
                                method="put"
                            >
                                <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                                    <div className="flex items-center justify-center">
                                        <div className="flex flex-col items-center justify-center w-full mb-8 border border-dashed border-indigo-700 rounded-lg py-8">
                                            <div className="cursor-pointer mb-5 text-indigo-700 dark:text-indigo-600">
                                                <svg
                                                    width={60}
                                                    height={60}
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                >
                                                    <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                                </svg>
                                            </div>
                                            <p className="text-base font-normal tracking-normal text-gray-800  text-center">
                                                Drag and drop here
                                            </p>
                                            <p className="text-base font-normal tracking-normal text-gray-800  text-center my-1">
                                                or
                                            </p>
                                            <label
                                                htmlFor="image"
                                                className="cursor-pointer text-base font-normal tracking-normal text-indigo-700 dark:text-indigo-600 text-center"
                                            >
                                                {" "}
                                                browse{" "}
                                            </label>
                                            <input
                                                type="file"
                                                className="hidden"
                                                name="image"
                                                id="image"
                                                onChange={(e) =>
                                                    handleChange(
                                                        "image",
                                                        e.target.files
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-11 flex flex-col md:flex-col sm:flex-col gap-4">
                                        <div className="flex items-center">
                                            <input
                                                placeholder="Name"
                                                id="name"
                                                type="text"
                                                name="name"
                                                // defaultValue={buku.name}
                                                value={data.name}
                                                onChange={(e) =>
                                                    handleChange(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                className="flex w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            <select
                                                id="gender"
                                                name="gender"
                                                value={data.gender}
                                                onChange={(e) =>
                                                    handleChange(
                                                        "gender",
                                                        e.target.value
                                                    )
                                                }
                                                className="flex w-full focus:outline-none py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    selected
                                                    hidden
                                                >
                                                    Pilih Gender
                                                </option>
                                                <option value="Laki-laki">
                                                    Laki-laki
                                                </option>
                                                <option value="Perempuan">
                                                    Perempuan
                                                </option>
                                            </select>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                placeholder="Phone"
                                                id="phone"
                                                type="text"
                                                name="phone"
                                                // defaultValue={buku.name}
                                                value={data.phone}
                                                onChange={(e) =>
                                                    handleChange(
                                                        "phone",
                                                        e.target.value
                                                    )
                                                }
                                                className="flex w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                placeholder="NISN"
                                                id="NISN"
                                                type="text"
                                                name="NISN"
                                                // defaultValue={buku.name}
                                                value={data.NISN}
                                                onChange={(e) =>
                                                    handleChange(
                                                        "NISN",
                                                        e.target.value
                                                    )
                                                }
                                                className="flex w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                placeholder="TTL"
                                                type="date"
                                                id="TTL"
                                                name="TTL"
                                                value={data.TTL}
                                                onChange={(e) =>
                                                    handleChange(
                                                        "TTL",
                                                        e.target.value
                                                    )
                                                }
                                                className="flex w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                placeholder="Alamat"
                                                id="alamat"
                                                type="text"
                                                name="alamat"
                                                // defaultValue={buku.name}
                                                value={data.alamat}
                                                onChange={(e) =>
                                                    handleChange(
                                                        "alamat",
                                                        e.target.value
                                                    )
                                                }
                                                className="flex w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                                            />
                                        </div>
                                        <div className="flex items-center justify-between mt-9">
                                            <button onClick={() => {
                                                window.history.back();
                                            }} className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white"
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfile;
