import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, User, Map } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">Travel Advisor</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/preferences" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <User className="h-5 w-5" />
              <span>Preferences</span>
            </Link>
            <Link to="/itinerary" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Map className="h-5 w-5" />
              <span>Itinerary</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}