import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTravelStore } from '../lib/store';
import { Compass, DollarSign, Heart, Calendar } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Preferences() {
  const navigate = useNavigate();
  const { preferences, setPreferences } = useTravelStore();

  const interests = [
    'Culture', 'Nature', 'Food', 'Adventure', 'History',
    'Shopping', 'Relaxation', 'Photography', 'Sports', 'Art'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Preferences saved successfully!');
    navigate('/itinerary');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Your Travel Preferences</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-lg font-medium mb-4">
            Adventure Level
            <div className="flex items-center space-x-4 mt-2">
              <input
                type="range"
                min="1"
                max="10"
                value={preferences.adventureLevel}
                onChange={(e) => setPreferences({ adventureLevel: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-lg font-semibold text-indigo-600">
                {preferences.adventureLevel}/10
              </span>
            </div>
          </label>
        </div>

        <div>
          <label className="block text-lg font-medium mb-4">
            Budget Range
            <select
              value={preferences.budget}
              onChange={(e) => setPreferences({ budget: e.target.value })}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="budget">Budget</option>
              <option value="medium">Medium</option>
              <option value="luxury">Luxury</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block text-lg font-medium mb-4">
            Interests
            <div className="grid grid-cols-2 gap-4 mt-2">
              {interests.map((interest) => (
                <label key={interest} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={preferences.interests.includes(interest)}
                    onChange={(e) => {
                      const newInterests = e.target.checked
                        ? [...preferences.interests, interest]
                        : preferences.interests.filter(i => i !== interest);
                      setPreferences({ interests: newInterests });
                    }}
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Generate Itinerary
        </button>
      </form>
    </div>
  );
}