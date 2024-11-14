"use client";

import { useState } from "react";
import { JobFilters } from "@/components/jobs/job-filters";
import { JobList } from "@/components/jobs/job-list";
import { JobSearch } from "@/components/jobs/job-search";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function JobsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function onSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Find Your Next Job</h1>
          <JobSearch onSearch={onSearch} />
        </div>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <JobFilters />
          </aside>
          
          <div className="lg:col-span-3">
            <JobList isLoading={isLoading} />
          </div>
        </div>
      </div>
    </main>
  );
}