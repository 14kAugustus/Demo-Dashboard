import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/dashboard/EcommerceMetrics";
import React from "react";
import MonthlyTarget from "@/components/dashboard/MonthlyTarget";
import MonthlySalesChart from "@/components/dashboard/MonthlySalesChart";
import StatisticsChart from "@/components/dashboard/StatisticsChart";

export const metadata: Metadata = {
  title: "Dashboard | SmileOps.app",
  description: "SmileOps.app",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />

        <MonthlySalesChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>
    </div>
  );
}
