"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Find Your Dream Job Today
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover thousands of job opportunities from top companies worldwide
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

      {/* Featured Jobs Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Jobs</h2>
            <Link href="/jobs" className="text-primary hover:underline">
              View all jobs →
            </Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Job Cards will be mapped here */}
            {[1, 2, 3].map((job) => (
              <div key={job} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      Senior Software Engineer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      TechCorp Inc.
                    </p>
                  </div>
                  <div className="h-12 w-12 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>📍 New York, USA</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>💰 $120k - $150k</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Popular Job Categories
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Technology",
              "Healthcare",
              "Finance",
              "Education",
              "Marketing",
              "Design",
              "Sales",
              "Engineering"
            ].map((category) => (
              <div
                key={category}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                  100+ jobs available
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Job Search?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Create an account to get personalized job recommendations and set up job alerts.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg">
              Sign Up Now
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}