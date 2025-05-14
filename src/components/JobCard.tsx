import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import { Job } from "../data/jobs";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  // Format the posted date to a relative time string (e.g., "2 days ago")
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 border hover:shadow-md">
      <CardContent className="p-0">
        <div className="flex p-4 space-x-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 overflow-hidden rounded">
              <img 
                src={job.logo} 
                alt={`${job.company} logo`} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.company}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
              <div className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-1" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center">
                <BriefcaseIcon className="w-4 h-4 mr-1" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>Posted {formatDate(job.postedDate)}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{job.category}</Badge>
              <Badge variant="outline">{job.experience}</Badge>
              <Badge variant="outline" className="text-blue-600 bg-blue-50 hover:bg-blue-100">
                {job.salary}
              </Badge>
            </div>
            
            <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between px-4 py-3 bg-gray-50">
        <div className="text-xs text-gray-500">
          {job.requirements.length} requirements
        </div>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  );
}