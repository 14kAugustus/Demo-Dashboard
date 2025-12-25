import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import ComponentCard from "@/components/common/ComponentCard";
import Alert from "@/components/ui/alert/Alert";
import React from "react";

export const metadata: Metadata = {
    title: "Support | SmileOps.app",
    description: "Support | SmileOps.app",
};

export default function SupportPage() {
    return (
        <div>
            <PageBreadcrumb pageTitle="Support" />
            <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
                <div className="mx-auto w-full max-w-[630px] text-center">
                    <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
                        Support
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                        Start putting content on grids or panels, you can also use different
                        combinations of grids. Please check out the dashboard and other pages
                    </p>
                </div>
                <ComponentCard title="Info Alert">
                    <Alert
                        variant="info"
                        title="Info Message"
                        message="Be cautious when performing this action."
                        showLink={true}
                        linkHref="/"
                        linkText="Learn more"
                    />
                    <Alert
                        variant="info"
                        title="Info Message"
                        message="Be cautious when performing this action."
                        showLink={false}
                    />
                </ComponentCard>
            </div>
        </div>
    );
}
