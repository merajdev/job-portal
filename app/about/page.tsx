// About page for job portal
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function About() {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                            About Us
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Learn more about our mission and vision
                        </p>

                        {/* Search Bar */}
                        <div className="mt-10 flex items-center justify-center gap-x-4">
                            <div className="relative flex-1 max-w-2xl">
                                <Input
                                    type="text"
                                    placeholder="Search jobs, companies, or keywords"
                                    className="pl-10 pr-4 py-3 w-full"
                                />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            </div>
                            <Button size="lg" className="hidden sm:block">
                                Search Jobs
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mission and Vision</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-1">
                                To connect job seekers with top companies worldwide
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-1">
                                To be the go-to platform for job seekers and companies
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}