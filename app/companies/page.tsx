import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const companies = [
  {
    name: "TechCorp Inc.",
    industry: "Technology",
    location: "New York, USA",
    openPositions: 12,
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop",
  },
  {
    name: "Global Health Ltd.",
    industry: "Healthcare",
    location: "London, UK",
    openPositions: 8,
    logo: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=100&h=100&fit=crop",
  },
  {
    name: "EduTech Solutions",
    industry: "Education",
    location: "Toronto, Canada",
    openPositions: 5,
    logo: "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?w=100&h=100&fit=crop",
  },
];

export default function CompaniesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Top Companies Hiring Now</h1>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search companies by name or industry"
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <Card key={company.name} className="p-6">
              <div className="flex items-start gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{company.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {company.industry}
                  </p>
                  <div className="mt-2 flex flex-col gap-1 text-sm text-muted-foreground">
                    <p>📍 {company.location}</p>
                    <p>🎯 {company.openPositions} open positions</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}