import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const resources = [
  {
    title: "Resume Writing Guide",
    description: "Learn how to create a professional resume that stands out.",
    category: "Career Tips",
    readTime: "10 min read",
  },
  {
    title: "Interview Preparation",
    description: "Essential tips and common questions for job interviews.",
    category: "Interview Tips",
    readTime: "15 min read",
  },
  {
    title: "Salary Negotiation",
    description: "How to negotiate your salary and benefits package.",
    category: "Career Growth",
    readTime: "12 min read",
  },
];

export default function ResourcesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Career Resources</h1>
          <p className="text-muted-foreground">
            Helpful guides and tips to advance your career
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.title} className="p-6">
              <div className="space-y-4">
                <div>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {resource.category}
                  </span>
                  <h3 className="mt-3 font-semibold">{resource.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {resource.readTime}
                  </span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="#">Read more →</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}