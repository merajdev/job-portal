"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BookmarkIcon, MapPin, Building2, DollarSign } from "lucide-react";

interface JobListProps {
  isLoading?: boolean;
}

export function JobList({ isLoading }: JobListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {[1, 2, 3].map((job) => (
        <JobCard key={job} />
      ))}
    </div>
  );
}

function JobCard() {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">Senior Software Engineer</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Building2 className="h-4 w-4" />
              <span>TechCorp Inc.</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>New York, USA</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              <span>$120k - $150k</span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <BookmarkIcon className="h-4 w-4" />
        </Button>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        We are looking for a Senior Software Engineer to join our team and help build the next generation of our platform...
      </p>
      <div className="mt-4 flex items-center gap-2">
        <Button>Apply Now</Button>
        <Button variant="outline">View Details</Button>
      </div>
    </Card>
  );
}

function JobCardSkeleton() {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <Skeleton className="h-6 w-48" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <Skeleton className="h-8 w-8" />
      </div>
      <Skeleton className="mt-4 h-4 w-full" />
      <div className="mt-4 flex items-center gap-2">
        <Skeleton className="h-9 w-24" />
        <Skeleton className="h-9 w-24" />
      </div>
    </Card>
  );
}