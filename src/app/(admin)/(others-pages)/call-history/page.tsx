import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";
import { DownloadIcon } from "@/icons";

export const metadata: Metadata = {
    title: "Call History | SmileOps.app",
    description: "Call History | SmileOps.app",
};

const mockCalls = [
    {
        id: 1,
        name: "Arlene McCoy",
        time: "10:30 AM",
        date: "Dec 2, 2025",
        summary: "Dental exam, Teeth cleaning (prophylaxis)",
        status: "New Patient",
        duration: "5m 45s",
    },
    {
        id: 2,
        name: "Courtney Henry",
        time: "09:15 AM",
        date: "Dec 2, 2025",
        summary: "Dental exam, Teeth cleaning (prophylaxis)",
        status: "New Patient",
        duration: "0m 0s",
    },
    {
        id: 3,
        name: "Jerome Bell",
        time: "04:45 PM",
        date: "Dec 15, 2025",
        summary: "Teeth cleaning (prophylaxis)",
        status: "Established Patient",
        duration: "32m 10s",
    },
    {
        id: 4,
        name: "Devon Lane",
        time: "02:20 PM",
        date: "Dec 15, 2025",
        summary: "Tooth pain / emergency visit, Dental fillings (cavities)",
        status: "Referred Patient",
        duration: "45m 0s",
        priority: true,
    },
    {
        id: 5,
        name: "Jane Cooper",
        time: "11:00 AM",
        date: "Dec 2, 2025",
        summary: "Dental exam, Teeth cleaning (prophylaxis)",
        status: "New Patient",
        duration: "20m 15s",
    },
    {
        id: 6,
        name: "Robert Fox",
        time: "09:30 AM",
        date: "Dec 2, 2025",
        summary: "Dental exam, Teeth cleaning (prophylaxis)",
        status: "New Patient",
        duration: "55m 0s",
    },
    {
        id: 7,
        name: "Bessie Cooper",
        time: "08:15 AM",
        date: "Dec 13, 2025",
        summary: "Dental exam, Teeth cleaning (prophylaxis)",
        status: "New Patient",
        duration: "10m 45s",
    },
    {
        id: 8,
        name: "Wade Warren",
        time: "01:00 PM",
        date: "Dec 13, 2025",
        summary: "Dental exam, Teeth cleaning (prophylaxis)",
        status: "New Patient",
        duration: "1h 12m",
    },
    {
        id: 9,
        name: "Guy Hawkins",
        time: "11:45 AM",
        date: "Dec 2, 2025",
        summary: "Teeth cleaning (prophylaxis)",
        status: "Established Patient",
        duration: "0m 0s",
    },
    {
        id: 10,
        name: "Esther Howard",
        time: "03:30 PM",
        date: "Dec 2, 2025",
        summary: "Teeth cleaning (prophylaxis)",
        status: "Established Patient",
        duration: "45m 0s",
    },
    {
        id: 11,
        name: "Cameron Williamson",
        time: "10:00 AM",
        date: "Dec 11, 2025",
        summary: "Dental exam, Teeth cleaning (prophylaxis)",
        status: "New Patient",
        duration: "25m 30s",
    },
    {
        id: 12,
        name: "Brooklyn Simmons",
        time: "02:15 PM",
        date: "Dec 11, 2025",
        summary: "Teeth cleaning (prophylaxis)",
        status: "Established Patient",
        duration: "38m 10s",
    },
    {
        id: 13,
        name: "Leslie Alexander",
        time: "09:00 AM",
        date: "Dec 10, 2025",
        summary: "Dental exam, Teeth cleaning (prophylaxis)",
        status: "New Patient",
        duration: "15m 0s",
    }
];

export default function CallHistoryPage() {
    // Using the first item as the "selected" detailed view for now
    const activeCall = mockCalls[0];

    return (
        <div>
            <PageBreadcrumb pageTitle="Call History" />

            <div className="flex flex-col gap-6 lg:flex-row h-[calc(100vh-200px)] min-h-[600px]">
                {/* Left Side - Summary List (1/3) */}
                <div className="w-full lg:w-1/3 flex flex-col">
                    <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-2xl flex flex-col h-full overflow-hidden">
                        <div className="p-5 border-b border-gray-100 dark:border-gray-800">
                            <h3 className="font-semibold text-gray-800 dark:text-white">Summary</h3>
                        </div>
                        <div className="overflow-y-auto flex-1 p-3 space-y-3">
                            {mockCalls.map((call) => (
                                <div key={call.id} className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                                    <div className="flex items-start">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center gap-2 overflow-hidden">
                                                    <h4 className="font-medium text-gray-800 dark:text-white truncate">{call.name}</h4>
                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#78AAEB]/10 text-[#78AAEB] font-medium shrink-0">
                                                        {call.status}
                                                    </span>
                                                    {(call as any).priority && (
                                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 font-medium shrink-0">
                                                            Priority
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="text-xs text-gray-400 shrink-0 ml-2">{call.time}</span>
                                            </div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{call.summary}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side - Details (2/3) */}
                <div className="w-full lg:w-2/3 flex flex-col gap-6">
                    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] flex-1 flex flex-col overflow-hidden">
                        <div className="p-6 border-b border-gray-100 dark:border-gray-800 shrink-0">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">{activeCall.name}</h2>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">(498) 054 3234</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-[#78AAEB]/10 text-[#78AAEB]`}>
                                    {activeCall.status}
                                </span>
                            </div>

                        </div>

                        <div className="overflow-y-auto flex-1 p-6">

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5">
                                    <p className="text-xs text-gray-500 mb-1">Date</p>
                                    <p className="font-medium text-gray-800 dark:text-white">{activeCall.date}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5">
                                    <p className="text-xs text-gray-500 mb-1">Time</p>
                                    <p className="font-medium text-gray-800 dark:text-white">{activeCall.time}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5">
                                    <p className="text-xs text-gray-500 mb-1">Duration</p>
                                    <p className="font-medium text-gray-800 dark:text-white">{activeCall.duration}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Caller is a new patient calling to schedule their routine 6-month cleaning.
                                    Ara explained that the visit includes a dental exam and prophylaxis (teeth cleaning).
                                    The patient confirmed availability on Monday afternoons.
                                    <br /><br />
                                    An appointment was scheduled for Monday, December 15th at 3:45pm.
                                    New patient paperwork and arrival instructions were sent via text.
                                </p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recording</h3>
                                    <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                                        <DownloadIcon className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-white/[0.02]">
                                    <div className="flex items-center gap-4">
                                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-white/10 shadow-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/20 transition-colors">
                                            <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                                <path d="M12.5 6.26795C13.8333 7.03775 13.8333 8.96225 12.5 9.73205L3.5 14.9282C2.16667 15.698 0.5 14.7358 0.5 13.1962L0.5 2.80385C0.5 1.26425 2.16667 0.302002 3.5 1.0718L12.5 6.26795Z" />
                                            </svg>
                                        </button>

                                        <div className="flex-1 h-1.5 bg-[#78AAEB] rounded-full cursor-pointer mx-3"></div>

                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-500">
                                            {activeCall.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Transcript</h3>
                                <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-white/[0.02]">
                                    <div className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Ara:</span> Thank you for calling, this is Ara. How can I help you today?</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Arlene:</span> Hi, I’m looking to schedule a six-month cleaning. I’d be a new patient.</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Ara:</span> Of course, I can help with that. Just to let you know, a six-month visit includes a dental exam with the doctor and a teeth cleaning, also called prophylaxis. Does that sound okay?</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Arlene:</span> Yes, that’s perfect.</p>

                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Ara:</span> Great. May I get your full name, please?</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Arlene:</span> Arlene McCoy.</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Ara:</span> Thank you, Arlene. And a good phone number for you?</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Arlene:</span> Yes, it’s 498-054-3234.</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Ara:</span> Got it.</p>

                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Ara:</span> What days and times usually work best for you?</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Arlene:</span> Mondays are best, usually in the afternoon.</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Ara:</span> Let me check availability… I have Monday, December 15th at 3:45 PM available. Would that work?</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Arlene:</span> Yes, that works for me.</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Ara:</span> Perfect, I’ll get you scheduled for that time.</p>

                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Ara:</span> Since you’re a new patient, we’ll send you the new patient paperwork and arrival instructions via text. Please try to arrive about 15 minutes early if possible.</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Arlene:</span> Okay, sounds good.</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Ara:</span> Do you have any dental insurance you’ll be using?</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Arlene:</span> I’ll bring it with me to the appointment.</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Ara:</span> That’s totally fine.</p>

                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Ara:</span> You’re all set for Monday, December 15th at 3:45 PM for your exam and cleaning. Is there anything else I can help you with today?</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Arlene:</span> No, that’s everything. Thank you.</p>
                                        <p><span className="font-medium text-gray-800 dark:text-gray-200">Ara:</span> You’re welcome! We’ll see you then. Have a great day.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
