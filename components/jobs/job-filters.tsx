"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const jobTypes = [
  { id: "full-time", label: "Full-time" },
  { id: "part-time", label: "Part-time" },
  { id: "contract", label: "Contract" },
  { id: "internship", label: "Internship" },
  { id: "remote", label: "Remote" },
];

const experienceLevels = [
  { value: "entry", label: "Entry Level" },
  { value: "mid", label: "Mid Level" },
  { value: "senior", label: "Senior Level" },
  { value: "executive", label: "Executive" },
];

export function JobFilters() {
  return (
    <Card className="p-4 space-y-6">
      <div className="space-y-4">
        <h3 className="font-medium">Job Type</h3>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox id={type.id} />
              <Label htmlFor={type.id}>{type.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Experience Level</h3>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select level" />
          </SelectTrigger>
          <SelectContent>
            {experienceLevels.map((level) => (
              <SelectItem key={level.value} value={level.value}>
                {level.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Salary Range</h3>
        <div className="space-y-4">
          <Slider
            defaultValue={[50000]}
            max={200000}
            min={0}
            step={5000}
            className="w-full"
          />
          <div className="text-sm text-muted-foreground">
            $0 - $200,000+
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Date Posted</h3>
        <RadioGroup defaultValue="all">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All time</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="day" id="day" />
              <Label htmlFor="day">Past 24 hours</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="week" id="week" />
              <Label htmlFor="week">Past week</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="month" id="month" />
              <Label htmlFor="month">Past month</Label>
            </div>
          </div>
        </RadioGroup>
      </div>
    </Card>
  );
}