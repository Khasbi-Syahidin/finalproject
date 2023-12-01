import { useEffect, useState } from "react";
import PrimaryButton from "../PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
// import { useForm } from 'react-hook-form';

function TambahProduk() {
    const { data, setData, processing, post } = useForm({
        name: "",
        email: "",
        phone: "",
        halaman: "",
        category: "",
        penulis: "",
        deskripsi: "",
        image: "",
    });

    const [selectedStatus, setSelectedStatus] = useState("Pilih Status");
    const [selectedCategory, setSelectedCategory] = useState("Pilih Kategori");
    const [showDropDownMenu, setShowDropDownMenu] = useState(false);
    const [showDropDownMenu2, setShowDropDownMenu2] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        // Lakukan sesuatu di sini jika diperlukan
    }, []);

    const toggleDropDownMenu = () => {
        setShowDropDownMenu(!showDropDownMenu);
    };

    const toggleDropDownMenu2 = () => {
        setShowDropDownMenu2(!showDropDownMenu2);
    };

    const selectStatus = (status) => {
        setSelectedStatus(status);
        toggleDropDownMenu();
        handleChange("status", status);
    };

    const selectCategory = (category) => {
        setSelectedCategory(category);
        toggleDropDownMenu2();
        handleChange("category", category);
    };

    const categories = [
        "Fiksi",
        "Non Fiksi",
        "Novel",
        "Biografi",
        "Sejarah",
        "Sains",
        "Pendidikan",
        "Sastra",
        "Bisnis",
        "Teknologi",
        "Seni",
        "Hobi",
        "Anak-anak",
        "Remaja",
        "Dewasa",
    ];
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

        // Jika Anda ingin menampilkan nama file yang dipilih
        // console.log("File selected:", value[0]);
    };

    const submit = (e) => {
        e.preventDefault();

        // const formData = new FormData();
        // formData.append("status", data.status);
        // formData.append("name", data.name);
        // formData.append("stock", data.stock);
        // formData.append("price", data.price);
        // formData.append("halaman", data.halaman);
        // formData.append("category", data.category);
        // formData.append("deskripsi", data.deskripsi);

        // // Pastikan Anda hanya mengappend file jika selectedFile ada
        // if (selectedFile) {
        //     formData.append("image", selectedFile);
        // }

        // // Kirim formData ke server
        post(route("admin.tambahbuku"), data);

        console.log(data);
    };

    // console.log(data);

    return (
        <>
            <div className="px-2 py-2 lg:px-4">
                <div className="flex flex-no-wrap items-start">
                    <div className="w-full ">
                        <form onSubmit={submit} encType="multipart/form-data">
                            <div className="py-4 px-2">
                                <div className="bg-white rounded shadow">
                                    <div className="p-7">
                                        <p className="text-xl font-semibold leading-tight text-gray-800">
                                            Input Buku Baru
                                        </p>
                                        <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                                            <div>
                                                <p className="text-base font-medium leading-none text-gray-800">
                                                    Status Buku
                                                </p>
                                                <div className="relative top-1">
                                                    <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                                        <button
                                                            type="button"
                                                            onClick={
                                                                toggleDropDownMenu
                                                            }
                                                            className="relative flex items-center justify-between w-full px-5 py-4"
                                                        >
                                                            <span
                                                                className="pr-4 text-sm font-medium text-gray-600"
                                                                id="drop-down-content-setter-one_form_layout_wizard3"
                                                            >
                                                                {selectedStatus}
                                                            </span>
                                                            <svg
                                                                className={`absolute z-10 cursor-pointer right-5 ${
                                                                    showDropDownMenu
                                                                        ? "rotate-180"
                                                                        : ""
                                                                }`}
                                                                width={10}
                                                                height={6}
                                                                viewBox="0 0 10 6"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M0.5 0.75L5 5.25L9.5 0.75"
                                                                    stroke="#4B5563"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <div
                                                            className={`absolute right-0 z-20 ${
                                                                showDropDownMenu
                                                                    ? "block"
                                                                    : "hidden"
                                                            } w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12`}
                                                            id="drop-down-div-one_form_layout_wizard3"
                                                        >
                                                            <a
                                                                href="#"
                                                                className="hover"
                                                            >
                                                                <p
                                                                    className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                                                                    onClick={() =>
                                                                        selectStatus(
                                                                            "Dipinjam"
                                                                        )
                                                                    }
                                                                >
                                                                    Dipinjam
                                                                </p>
                                                            </a>
                                                            <a>
                                                                <p
                                                                    className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                                                                    onClick={() =>
                                                                        selectStatus(
                                                                            "Dijual"
                                                                        )
                                                                    }
                                                                >
                                                                    Dijual
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                    Pilih salah satu saja
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-none text-gray-800">
                                                    Nama Buku
                                                </p>
                                                <input
                                                    className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" required
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        handleChange(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <p className="mt-3 text-xs leading-3 text-gray-600">
                                                    Pastikan penulisan nama
                                                    sudah benar
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-none text-gray-800">
                                                    Jumlah Stock Buku
                                                </p>
                                                <input
                                                    className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" required
                                                    id="stock"
                                                    type="number"
                                                    name="stock"
                                                    value={data.stock}
                                                    onChange={(e) =>
                                                        handleChange(
                                                            "stock",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                    Hanya Bisa Input Angka
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-none text-gray-800">
                                                    Harga Buku
                                                </p>
                                                <input
                                                    className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                    required
                                                    type="number"
                                                    id="price"
                                                    name="price"
                                                    value={data.price}
                                                    onChange={(e) =>
                                                        handleChange(
                                                            "price",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                    Hanya Bisa Input Angka
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-none text-gray-800">
                                                    Jumlah Halaman Buku
                                                </p>
                                                <input
                                                    className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                    required
                                                    id="stock"
                                                    type="number"
                                                    name="halaman"
                                                    value={data.halaman}
                                                    onChange={(e) =>
                                                        handleChange(
                                                            "halaman",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                    Hanya Bisa Input Angka
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-none text-gray-800">
                                                    Kategori Buku
                                                </p>
                                                <div className="relative top-1">
                                                    <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                                        <button
                                                            type="button"
                                                            onClick={
                                                                toggleDropDownMenu2
                                                            }
                                                            className="relative flex items-center justify-between w-full px-5 py-4"
                                                        >
                                                            <span
                                                                className="pr-4 text-sm font-medium text-gray-600"
                                                                id="drop-down-content-setter-one_form_layout_wizard3"
                                                            >
                                                                {
                                                                    selectedCategory
                                                                }
                                                            </span>
                                                            <svg
                                                                className={`absolute z-10 cursor-pointer right-5 ${
                                                                    showDropDownMenu2
                                                                        ? "rotate-180"
                                                                        : ""
                                                                }`}
                                                                width={10}
                                                                height={6}
                                                                viewBox="0 0 10 6"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M0.5 0.75L5 5.25L9.5 0.75"
                                                                    stroke="#4B5563"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <div
                                                            className={`absolute right-0 z-20 ${
                                                                showDropDownMenu2
                                                                    ? "block"
                                                                    : "hidden"
                                                            } w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12`}
                                                            id="drop-down-div-one_form_layout_wizard3"
                                                        >
                                                            {categories.map(
                                                                (
                                                                    category,
                                                                    index
                                                                ) => (
                                                                    <a
                                                                        href="#"
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <p
                                                                            className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                                                                            onClick={() =>
                                                                                selectCategory(
                                                                                    category
                                                                                )
                                                                            }
                                                                        >
                                                                            {
                                                                                category
                                                                            }
                                                                        </p>
                                                                    </a>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                    Pilih salah satu saja
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-none text-gray-800">
                                                    Penulis
                                                </p>
                                                <input
                                                    className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                    id="stock"
                                                    type="text"
                                                    name="penulis"
                                                    value={data.penulis}
                                                    onChange={(e) =>
                                                        handleChange(
                                                            "penulis",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                    Pastikan penulisan Nama & Pangkat
                                                </p>
                                                <p className="text-base mt-4 font-semibold leading-4 text-gray-800">
                                                Image Buku
                                            </p>
                                            <input
                                                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                id="image"
                                                type="file"
                                                name="image"
                                                aria-describedby="file_input_help"
                                                onChange={(e) =>
                                                    handleChange3(
                                                        "image",
                                                        e.target.files
                                                    )
                                                }
                                            />
                                            {selectedFile ? (
                                                <p className="mt-2 text-sm text-gray-500">
                                                    File yang dipilih:{" "}
                                                    {selectedFile.name}
                                                </p>
                                            ) : (
                                                <p className="mt-3 text-xs leading-[15px] text-gray-600 ">
                                                    Pastikan Frame Gambar 3000 x
                                                    3000
                                                </p>
                                            )}
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-none text-gray-800">
                                                    Kategori Buku
                                                </p>
                                                <div className="relative top-1">
                                                <div className="mt-3 border border-gray-300 rounded">
                                                <textarea
                                                    className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none"
                                                    placeholder="Start typing here ..."
                                                    // defaultValue={""}
                                                    id="deskripsi"
                                                    type="text"
                                                    name="deskripsi"
                                                    value={data.deskripsi}
                                                    onChange={(e) =>
                                                        handleChange(
                                                            "deskripsi",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                                </div>
                                                <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                    Pilih salah satu saja
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4 pt-8 pb-5">
                                        <button
                                            className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[380px] w-full "
                                            type="submit"
                                        >
                                            Tambah Buku {data.name}
                                        </button>
                                        {/* <hr className="h-[1px] bg-gray-100 my-14" /> */}
                                        {/* <PrimaryButton>

                                            Tambah Buku {data.name}
                                        </PrimaryButton> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TambahProduk;
