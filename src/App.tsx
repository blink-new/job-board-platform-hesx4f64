import { useState, useEffect } from 'react';
import { filterJobs, jobsData } from './data/jobs';
import { Header } from './components/Header';
import { JobSearch } from './components/JobSearch';
import { JobFilters } from './components/JobFilters';
import { JobList } from './components/JobList';

function App() {
  // Search and filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [jobType, setJobType] = useState('');
  const [experience, setExperience] = useState('');
  
  // Results state
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [isLoading, setIsLoading] = useState(false);
  
  // Apply filters when any filter changes
  useEffect(() => {
    applyFilters();
  }, [location, category, jobType, experience]);
  
  // Search function
  const handleSearch = () => {
    applyFilters();
  };
  
  // Apply all filters
  const applyFilters = () => {
    setIsLoading(true);
    
    // Simulate API request delay
    setTimeout(() => {
      const filtered = filterJobs(jobsData, {
        search: searchTerm,
        location,
        category,
        type: jobType,
        experience
      });
      
      setFilteredJobs(filtered);
      setIsLoading(false);
    }, 500);
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setLocation('');
    setCategory('');
    setJobType('');
    setExperience('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container px-4 py-8 mx-auto md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Find Your Dream Job</h1>
            <p className="mt-2 text-gray-600">Discover opportunities that match your skills and career goals</p>
          </div>
          
          <div className="p-4 mb-6 bg-white rounded-lg shadow-sm md:p-6">
            <JobSearch 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm} 
              onSearch={handleSearch} 
            />
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="order-2 md:order-1 md:col-span-1">
              <div className="sticky p-4 bg-white rounded-lg shadow-sm top-20 md:p-6">
                <h2 className="mb-4 text-lg font-medium">Filters</h2>
                <JobFilters 
                  location={location}
                  category={category}
                  type={jobType}
                  experience={experience}
                  onLocationChange={setLocation}
                  onCategoryChange={setCategory}
                  onTypeChange={setJobType}
                  onExperienceChange={setExperience}
                  onClearFilters={clearFilters}
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2 md:col-span-3">
              <div className="p-4 mb-4 bg-white rounded-lg shadow-sm md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium">
                    {filteredJobs.length === 0 ? 'No jobs found' : 
                      `Showing ${filteredJobs.length} ${filteredJobs.length === 1 ? 'job' : 'jobs'}`}
                  </h2>
                </div>
                
                <JobList jobs={filteredJobs} isLoading={isLoading} />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 bg-white border-t">
        <div className="container px-4 mx-auto md:px-6">
          <p className="text-sm text-center text-gray-500">
            © 2023 JobBoard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;