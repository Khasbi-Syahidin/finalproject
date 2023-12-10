import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Helmet } from "react-helmet";

const ChartComponent = () => {
    const chart = useRef(null);

    useEffect(() => {
        const canvas = document.getElementById("myChart");
        const context = canvas.getContext("2d");

        // Hancurkan grafik sebelumnya (jika ada)
        if (chart.current) {
            chart.current.destroy();
        }

        // Bersihkan canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Buat grafik baru
        chart.current = new Chart(context, {
            type: "line",
            data: {
                labels: [
                    "Senin",
                    "Selasa",
                    "Rabu",
                    "Kamis",
                    "Jumat",
                    "Sabtu",
                    "Minggu",
                ],
                datasets: [
                    {
                        label: "Penjualan Buku",
                        borderColor: "#4A5568",
                        data: [2, 4, 10, 30, 20, 6, 20],
                        fill: false,
                        pointBackgroundColor: "#4A5568",
                        borderWidth: "3",
                        pointBorderWidth: "4",
                        pointHoverRadius: "6",
                        pointHoverBorderWidth: "8",
                        pointHoverBorderColor: "rgb(74,85,104,0.2)",
                    },
                ],
            },
            options: {
                legend: {
                    position: false,
                },
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            display: false,
                        },
                    ],
                },
            },
        });

        // Clean up
        return () => {
            // Hancurkan grafik saat komponen unmount
            if (chart.current) {
                chart.current.destroy();
            }
        };
    }, []); // Tidak ada dependensi, hanya dijalankan sekali saat mount

    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script
                    defer
                    src="https://cdn.tuk.dev/dev/light-dark-switch.js"
                ></script>
            </Helmet>
            <div className="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-1/2 lg:flex-none">
                <div className="border-black/12.5 shadow-soft-2xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                    <div className="flex-auto p-3 px-0 pb-2">
                        <div className="overflow-x-auto flex flex-col">
                            <div className="w-full mx-auto">
                                <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                                    <div className="flex flex-wrap mt-0 -mx-3">
                                        <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                                            <h6>Line Chart</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="mt-0">
                                    <canvas
                                        id="myChart"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChartComponent;
