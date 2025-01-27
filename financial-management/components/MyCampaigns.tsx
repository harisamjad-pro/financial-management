"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { CgInfo } from "react-icons/cg";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import Block from "./ui/Block";
import Glass from "./ui/Glass";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MyCampaigns = () => {
    type Timeframe = "24h" | "Week" | "Month";

    const [timeframe, setTimeframe] = useState<Timeframe>("Month");

    const getCurrentHour = () => new Date().getHours();
    const getCurrentDate = () => new Date();

    const generate24hLabels = () => {
        const currentHour = getCurrentHour();
        return Array.from({ length: 6 }, (_, i) => {
            const hour = (currentHour + i * 4) % 24;
            const period = hour >= 12 ? "PM" : "AM";
            const displayHour = hour % 12 || 12;
            return `${displayHour} ${period}`;
        });
    };

    const generateWeekLabels = () => {
        const currentDate = getCurrentDate();
        return Array.from({ length: 7 }, (_, i) => {
            const nextDate = new Date(currentDate);
            nextDate.setDate(currentDate.getDate() + i);
            return nextDate.toLocaleDateString("en-US", {
                weekday: "short",
                // day: "numeric",
                // month: "short",
            });
        });
    };

    const generateMonthLabels = () => {
        const currentDate = getCurrentDate();
        return Array.from({ length: 4 }, (_, i) => {
            const nextDate = new Date(currentDate);
            nextDate.setDate(currentDate.getDate() + i * 7);
            return nextDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
            });
        });
    };

    const chartData = {
        "24h": {
            labels: generate24hLabels(),
            data: [12, 19, 3, 5, 3, 7],
        },
        "Week": {
            labels: generateWeekLabels(),
            data: [10, 12, 15, 18, 14, 20, 25],
        },
        "Month": {
            labels: generateMonthLabels(),
            data: [50, 60, 55, 70],
        },
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        scales: {
            x: { grid: { color: "rgb(255 255 255 / 0.1)" }, ticks: { color: "#A3A3A3" } },
            y: { grid: { color: "rgb(255 255 255 / 0.1)" }, ticks: { display: false } },
        },
    };

    const data = {
        labels: chartData[timeframe].labels,
        datasets: [
            {
                label: "Performance",
                data: chartData[timeframe].data,
                borderColor: "#2563EB",
                backgroundColor: "rgba(37, 99, 235, 0.5)",
                tension: 0.4,
            },
        ],
    };

    return (
        <Block
            element={
                <>
                    <div className="flex items-start justify-between gap-6 max-md:flex-col">
                        <div className="grid gap-2">
                            <h1 className="text-2xl font-semibold text-white">My Campaigns</h1>
                            <p className="text-sm font-normal text-neutral-400">
                                <Link href="/" className="font-semibold text-neutral-200 hover:text-blue-400">
                                    @alex
                                </Link>{" "}
                                and 2 more.
                            </p>
                        </div>
                        <button className="bg-neutral-800 text-white text-sm font-normal min-w-32 max-md:w-full flex items-center justify-between gap-6 px-5 py-3 rounded-xl">
                            Finance
                            <IoIosArrowDown className="size-4" />
                        </button>
                    </div>

                    {/* Overview Section */}
                    <Glass
                        element={
                            <>
                                <div className="flex items-center justify-between gap-6">
                                    <h2 className="text-base font-semibold text-white">Overview</h2>
                                    <CgInfo className="size-6 text-neutral-400" />
                                </div>

                                <div className="flex flex-col gap-2 justify-between">
                                    <div className="flex gap-6 justify-between">
                                        <h3 className="text-sm font-normal text-neutral-400">Max records</h3>
                                        <p className="text-right text-sm font-normal text-white">
                                            2 times increase
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6 justify-between w-full">
                                        <h3 className="text-sm font-normal text-neutral-400">Comparative rates</h3>
                                        <p className="text-right text-sm font-normal text-white">
                                            <span className="text-blue-600">+</span>12.83
                                            <span className="text-neutral-400">%</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between gap-1 p-1 border border-white/10 rounded-2xl">
                                    {(["24h", "Week", "Month"] as Timeframe[]).map((period) => (
                                        <button
                                            key={period}
                                            onClick={() => setTimeframe(period)}
                                            className={`text-base font-normal px-4 py-2 w-full rounded-xl ${timeframe === period
                                                ? "bg-white/5 backdrop-blur-sm text-white"
                                                : "bg-transparent text-neutral-400"
                                                }`}
                                        >
                                            {period}
                                        </button>
                                    ))}
                                </div>

                                <div className="p-2 m-0 border border-white/10 rounded-2xl">
                                    <Line options={options} data={data} style={{ width: "100%", height: "192px" }} />
                                </div>

                                <div className="flex items-center justify-between gap-6">
                                    <div>
                                        <h3 className="text-4xl font-semibold text-white">
                                            <span className="text-blue-600">+</span>19.23
                                            <sup className="text-xl text-neutral-400">%</sup>
                                        </h3>
                                    </div>
                                    <div className="grid gap-1 text-right">
                                        <p className="text-sm font-normal text-neutral-400">Last updated</p>
                                        <p className="text-sm font-normal text-white">Today, 01:32 AM</p>
                                    </div>
                                </div>
                            </>
                        }
                    />
                </>
            }
        />
    );
};

export default MyCampaigns;