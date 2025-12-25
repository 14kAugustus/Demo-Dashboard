import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";
import { AIStarIcon, PaperPlaneIcon, FolderIcon } from "@/icons";

export const metadata: Metadata = {
    title: "Texts | SmileOps.app",
    description: "Patient text messaging and automation",
};

type Message = {
    id: string;
    text: string;
    sender: 'patient' | 'clinic' | 'system';
    timestamp: string;
    isAutomated?: boolean;
    date?: string; // For date separators
};

type Conversation = {
    id: string;
    patientName: string;
    phoneNumber: string;
    status: 'Automated' | 'Manual' | 'Awaiting Reply' | 'Failed';
    appointmentStatus: 'Confirmed' | 'Pending' | 'Cancelled';
    lastMessage: string;
    lastMessageTime: string;
    unread?: boolean;
    messages: Message[];
};

const mockConversations: Conversation[] = [
    {
        id: "1",
        patientName: "Arlene McCoy",
        phoneNumber: "(498) 054-3234",
        status: "Automated",
        appointmentStatus: "Confirmed",
        lastMessage: "You're all set! See you Monday.",
        lastMessageTime: "10:35 AM",
        messages: [
            {
                id: "m1",
                sender: "system",
                text: "Hi Arlene, this is Ara from SmileOps Dental. We have you confirmed for your 6-month cleaning and exam on Monday, Dec 15th at 3:45 PM. Please arrive 15 minutes early to fill out new patient paperwork.",
                timestamp: "10:32 AM",
                date: "Today",
                isAutomated: true
            },
            {
                id: "m2",
                sender: "patient",
                text: "Thanks! I'll be there.",
                timestamp: "10:34 AM"
            },
            {
                id: "m3",
                sender: "system",
                text: "Great! If you need to reschedule, please let us know at least 24 hours in advance. See you Monday!",
                timestamp: "10:35 AM",
                isAutomated: true
            }
        ]
    },
    {
        id: "2",
        patientName: "Esther Howard",
        phoneNumber: "(205) 555-0100",
        status: "Manual",
        appointmentStatus: "Pending",
        lastMessage: "No problem, we've processed that.",
        lastMessageTime: "9:42 AM",
        unread: false,
        messages: [
            {
                id: "m1",
                sender: "system",
                text: "Hi Esther, just a reminder about your appointment tomorrow at 1:00 PM.",
                timestamp: "9:30 AM",
                date: "Today",
                isAutomated: true
            },
            {
                id: "m2",
                sender: "patient",
                text: "Hi, sorry something came up. Can we move it to 2pm?",
                timestamp: "9:42 AM"
            }
        ]
    },
    {
        id: "4",
        patientName: "Robert Fox",
        phoneNumber: "(252) 555-0126",
        status: "Automated",
        appointmentStatus: "Confirmed",
        lastMessage: "Your dental check-up is confirmed.",
        lastMessageTime: "Yesterday",
        messages: [
            {
                id: "m1",
                sender: "system",
                text: "Hi Robert, your dental check-up is confirmed for tomorrow at 2:00 PM. See you then!",
                timestamp: "11:00 AM",
                date: "Yesterday",
                isAutomated: true
            }
        ]
    },
    {
        id: "5",
        patientName: "Bessie Cooper",
        phoneNumber: "(603) 555-0123",
        status: "Automated",
        appointmentStatus: "Pending",
        lastMessage: "We have space this Thursday.",
        lastMessageTime: "2 Days Ago",
        messages: [
            {
                id: "m1",
                sender: "system",
                text: "Hi Bessie, we noticed you are due for your cleaning. We have space this Thursday at 10:00 AM. Would you like to book?",
                timestamp: "9:00 AM",
                date: "Dec 13, 2025",
                isAutomated: true
            }
        ]
    },
    {
        id: "3",
        patientName: "Cameron Williamson",
        phoneNumber: "(302) 555-0107",
        status: "Awaiting Reply",
        appointmentStatus: "Cancelled",
        lastMessage: "Can we move it to 2pm?",
        lastMessageTime: "Yesterday",
        unread: false,
        messages: [
            {
                id: "m1",
                sender: "patient",
                text: "I need to cancel my appointment for next week.",
                timestamp: "4:00 PM",
                date: "Yesterday"
            },
            {
                id: "m2",
                sender: "clinic",
                text: "No problem, we've processed that cancellation. Would you like to reschedule for a later date?",
                timestamp: "4:15 PM"
            }
        ]
    },
    {
        id: "6",
        patientName: "Guy Hawkins",
        phoneNumber: "(406) 555-0120",
        status: "Automated",
        appointmentStatus: "Confirmed",
        lastMessage: "Thank you for confirming your visit.",
        lastMessageTime: "Dec 2, 2025",
        messages: [
            {
                id: "m1",
                sender: "system",
                text: "Hi Guy, thank you for confirming your visit for Dec 15th. We look forward to seeing you!",
                timestamp: "1:30 PM",
                date: "Dec 2, 2025",
                isAutomated: true
            }
        ]
    }
];

export default function TextsPage() {
    const activeConversation = mockConversations[0];

    return (
        <div>
            <PageBreadcrumb pageTitle="Texts" />

            <div className="flex flex-col gap-6 lg:flex-row h-[calc(100vh-200px)] min-h-[600px]">
                {/* Left Side - Conversation List (1/3) */}
                <div className="w-full lg:w-1/3 flex flex-col">
                    <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-2xl flex flex-col h-full overflow-hidden">
                        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                            <h3 className="font-semibold text-gray-800 dark:text-white">Inbox</h3>
                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="overflow-y-auto flex-1 p-3 space-y-2">
                            {mockConversations.map((convo) => (
                                <div
                                    key={convo.id}
                                    className={`p-4 rounded-xl border transition-all cursor-pointer group ${convo.id === activeConversation.id
                                        ? 'border-[#78AAEB] bg-[#78AAEB]/5 dark:bg-[#78AAEB]/10'
                                        : 'border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/5'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-medium text-gray-800 dark:text-white truncate">{convo.patientName}</h4>
                                        <span className="text-xs text-gray-400 shrink-0">{convo.lastMessageTime}</span>
                                    </div>
                                    <p className={`text-sm mb-3 line-clamp-2 ${convo.unread ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
                                        {convo.lastMessage}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <Badge status={convo.status} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side - Chat Panel (2/3) */}
                <div className="w-full lg:w-2/3 flex flex-col">
                    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] flex-1 flex flex-col overflow-hidden">

                        {/* Chat Header */}
                        <div className="p-4 border-b border-gray-100 dark:border-gray-800 shrink-0 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-[#78AAEB]/10 text-[#78AAEB] flex items-center justify-center font-bold text-lg">
                                    {activeConversation.patientName.charAt(0)}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{activeConversation.patientName}</h2>
                                        <AppointmentStatusBadge status={activeConversation.appointmentStatus} />
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">{activeConversation.phoneNumber}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                                    Resend Confirmation
                                </button>
                                <button className="px-3 py-1.5 text-sm font-medium text-[#78AAEB] bg-[#78AAEB]/10 hover:bg-[#78AAEB]/20 rounded-lg transition-colors">
                                    Send Reminder
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30 dark:bg-black/20">
                            {activeConversation.messages.map((msg, idx) => (
                                <React.Fragment key={msg.id}>
                                    {msg.date && (
                                        <div className="flex justify-center my-4">
                                            <span className="text-xs font-medium text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-full">
                                                {msg.date}
                                            </span>
                                        </div>
                                    )}
                                    <div className={`flex ${msg.sender === 'patient' ? 'justify-start' : 'justify-end'}`}>
                                        <div className={`max-w-[80%] ${msg.sender === 'patient' ? 'order-1' : 'order-2'}`}>
                                            {msg.isAutomated && (
                                                <div className="flex items-center gap-1.5 mb-1 justify-end opacity-70">
                                                    <AIStarIcon className="w-4 h-4 text-[#78AAEB]" />
                                                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#78AAEB]">Automated</span>
                                                </div>
                                            )}

                                            <div className={`rounded-2xl px-4 py-3 text-sm shadow-sm ${msg.sender === 'patient'
                                                ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-tl-none'
                                                : msg.isAutomated
                                                    ? 'bg-white border border-gray-200 dark:bg-white/[0.03] dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-tr-none'
                                                    : 'bg-[#78AAEB] text-white rounded-tr-none'
                                                }`}>
                                                <p className="leading-relaxed">{msg.text}</p>
                                            </div>
                                            <p className={`text-[10px] mt-1 text-gray-400 ${msg.sender === 'patient' ? 'text-left' : 'text-right'}`}>
                                                {msg.timestamp}
                                            </p>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Composer Area */}
                        <div className="p-4 bg-white dark:bg-white/[0.03] border-t border-gray-100 dark:border-gray-800">
                            <div className="relative">
                                <textarea
                                    disabled
                                    placeholder="Type a message to Arlene..."
                                    className="w-full h-24 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/20 text-gray-500 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#78AAEB]/50 disabled:cursor-not-allowed disabled:opacity-70"
                                />
                                <div className="absolute top-2 right-2">
                                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-500 text-[10px] px-2 py-0.5 rounded font-medium">
                                        Manual Messaging Disabled
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                                        <FolderIcon className="w-3.5 h-3.5" />
                                        Text Templates
                                    </button>
                                </div>
                                <button disabled className="px-4 py-2 bg-[#78AAEB] text-white text-sm font-medium rounded-lg hover:bg-[#78AAEB]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2">
                                    <span>Send manual message</span>
                                    <PaperPlaneIcon className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Badge({ status }: { status: Conversation['status'] }) {
    const styles = {
        'Automated': 'bg-[#78AAEB]/10 text-[#78AAEB]',
        'Manual': 'bg-yellow-50 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400',
        'Awaiting Reply': 'bg-yellow-50 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400',
        'Failed': 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400',
    };

    return (
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${styles[status]}`}>
            {status}
        </span>
    );
}

function AppointmentStatusBadge({ status }: { status: Conversation['appointmentStatus'] }) {
    const styles = {
        'Confirmed': 'text-green-600 bg-green-50 dark:bg-green-500/10 dark:text-green-400',
        'Pending': 'text-yellow-600 bg-yellow-50 dark:bg-yellow-500/10 dark:text-yellow-400',
        'Cancelled': 'text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-400',
    };

    return (
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${styles[status]}`}>
            {status}
        </span>
    );
}
