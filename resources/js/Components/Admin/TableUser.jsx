import React from 'react'

export default function TableUser() {
    return (
        <div className="w-full pb-6 mx-auto">
        <div className="flex flex-wrap">
            <div className="w-full max-w-full mt-6 md:flex-none">
                <div className="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                    <div className="flex-auto p-3 px-0 pb-2">
                        <div className="overflow-x-auto">
                            <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                <thead className="align-bottom">
                                    <tr>
                                        <th className="px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                                            Nama User
                                        </th>
                                        <th className="px-6 py-3 pl-2 text-center font-bold tracking-normal uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                                            Email
                                        </th>
                                        <th className="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                                            Gender
                                        </th>
                                        <th className="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                            <div className="flex px-2 py-1">
                                                <div className="flex flex-col justify-center">
                                                    <h6 className="mb-0 text-sm ml-2 leading-normal">
                                                        Khasbi Syahidin
                                                    </h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap">
                                            khasbisyahidin@gmail.com
                                        </td>
                                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap">
                                            Laki-laki
                                        </td>
                                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                            <div className="flex justify-center">
                                                <a
                                                    className="flex mb-0 text-sm leading-normal mr-4"
                                                    href=""
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="1.3em"
                                                        viewBox="0 0 512 512"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                                    </svg>
                                                </a>
                                                <a
                                                    className="flex mb-0 text-sm leading-normal mr-4"
                                                    href=""
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="1.3em"
                                                        viewBox="0 0 512 512"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                                                    </svg>
                                                </a>
                                                <a
                                                    className="flex mb-0 text-sm leading-normal"
                                                    href=""
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="1.3em"
                                                        viewBox="0 0 448 512"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                            <div className="flex px-2 py-1">
                                                <div className="flex flex-col justify-center">
                                                    <h6 className="mb-0 text-sm ml-2 leading-normal">
                                                        Fatih Abiyyi Arfat
                                                    </h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap">
                                            fatihabiyyiarfat@gmail.com
                                        </td>
                                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap">
                                            Perempuan
                                        </td>
                                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                            <div className="flex justify-center">
                                                <a
                                                    className="flex mb-0 text-sm leading-normal mr-4"
                                                    href=""
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="1.3em"
                                                        viewBox="0 0 512 512"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                                    </svg>
                                                </a>
                                                <a
                                                    className="flex mb-0 text-sm leading-normal mr-4"
                                                    href=""
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="1.3em"
                                                        viewBox="0 0 512 512"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                                                    </svg>
                                                </a>
                                                <a
                                                    className="flex mb-0 text-sm leading-normal"
                                                    href=""
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="1.3em"
                                                        viewBox="0 0 448 512"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      )
}
