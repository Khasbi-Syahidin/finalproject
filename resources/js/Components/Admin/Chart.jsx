import React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";
import ChartPenjualan from "./ChartPenjualan";
import ChartPeminjaman from "./ChartPeminjaman";

export default function Chart({chartDataPembelian, chartDataPeminjaman}) {
    return (
        <>
            {/* Data Buku */}
            <div className="flex justify-center">
                <div className="w-full mx-auto">
                    <div className="flex flex-wrap my-6 -mx-3 justfy-center">
                        <ChartPenjualan chartDataPembelian={chartDataPembelian} />
                        <ChartPeminjaman chartDataPeminjaman={chartDataPeminjaman}/>
                    </div>
                </div>
            </div>
        </>
    );
}
