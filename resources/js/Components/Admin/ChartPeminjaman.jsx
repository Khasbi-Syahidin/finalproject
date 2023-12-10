import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function ChartPeminjaman({ chartDataPeminjaman }) {
  const { xAxis, series } = chartDataPeminjaman;

  return (
    <div className="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-1/2 lg:flex-none ">
      <div className="border-black/12.5 shadow-soft-2xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
        <div className="flex-auto p-3 px-0 pb-2">
          <div className="overflow-x-auto flex flex-col">
            <div className="w-full mx-auto">
              <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                <div className="flex flex-wrap mt-0 -mx-3">
                  <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                    <h6>Chart Peminjaman</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
            <BarChart xAxis={xAxis} series={series} tooltip={{ trigger: 'item' }} width={500} height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
