import { BriefcaseIcon, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <div className="flex items-center space-x-2">
          <BriefcaseIcon className="w-6 h-6 text-blue-600" />
          <h1 className="text-xl font-bold">JobBoard</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <a href="#" className="text-sm font-medium transition-colors hover:text-blue-600">
            Find Jobs
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-blue-600">
            Companies
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-blue-600">
            Resources
          </a>
          <Button variant="outline" className="ml-2">
            Sign In
          </Button>
          <Button>
            Post a Job
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center p-2 md:hidden text-gray-700 hover:text-blue-600"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white md:hidden">
          <a href="#" className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-50">
            Find Jobs
          </a>
          <a href="#" className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-50">
            Companies
          </a>
          <a href="#" className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-50">
            Resources
          </a>
          <div className="flex flex-col space-y-2 mt-4">
            <Button variant="outline" className="w-full">
              Sign In
            </Button>
            <Button className="w-full">
              Post a Job
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}