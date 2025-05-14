import { FilterIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { getUniqueCategories, getUniqueExperienceLevels, getUniqueLocations, getUniqueTypes } from "../data/jobs";
import { Badge } from "./ui/badge";
import { useState } from "react";

interface JobFiltersProps {
  location: string;
  category: string;
  type: string;
  experience: string;
  onLocationChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onExperienceChange: (value: string) => void;
  onClearFilters: () => void;
}

export function JobFilters({
  location,
  category,
  type,
  experience,
  onLocationChange,
  onCategoryChange,
  onTypeChange,
  onExperienceChange,
  onClearFilters,
}: JobFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  const locations = ["", ...getUniqueLocations()];
  const categories = ["", ...getUniqueCategories()];
  const jobTypes = ["", ...getUniqueTypes()];
  const experienceLevels = ["", ...getUniqueExperienceLevels()];
  
  const hasActiveFilters = location || category || type || experience;

  // Count active filters
  const activeFilterCount = [location, category, type, experience].filter(Boolean).length;
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          className="md:hidden"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <FilterIcon className="w-4 h-4 mr-2" />
          Filters
          {activeFilterCount > 0 && (
            <Badge className="ml-2" variant="secondary">
              {activeFilterCount}
            </Badge>
          )}
        </Button>
        
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClearFilters}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4 mr-1" />
            Clear all filters
          </Button>
        )}
      </div>
      
      <div className={`space-y-4 ${isFiltersOpen ? 'block' : 'hidden md:block'}`}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Location
            </label>
            <Select value={location} onValueChange={onLocationChange}>
              <SelectTrigger>
                <SelectValue placeholder="All locations" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc || "all"} value={loc}>
                    {loc || "All locations"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Category
            </label>
            <Select value={category} onValueChange={onCategoryChange}>
              <SelectTrigger>
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat || "all"} value={cat}>
                    {cat || "All categories"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Job Type
            </label>
            <Select value={type} onValueChange={onTypeChange}>
              <SelectTrigger>
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                {jobTypes.map((jType) => (
                  <SelectItem key={jType || "all"} value={jType}>
                    {jType || "All types"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Experience
            </label>
            <Select value={experience} onValueChange={onExperienceChange}>
              <SelectTrigger>
                <SelectValue placeholder="All levels" />
              </SelectTrigger>
              <SelectContent>
                {experienceLevels.map((exp) => (
                  <SelectItem key={exp || "all"} value={exp}>
                    {exp || "All levels"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 pt-2">
            {location && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {location}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => onLocationChange("")}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
            
            {category && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {category}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => onCategoryChange("")}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
            
            {type && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {type}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => onTypeChange("")}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
            
            {experience && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {experience}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => onExperienceChange("")}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
          </div>
        )}
      </div>
    </div>
  );
}