import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Map, Calendar, Sun } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Your Personal AI Travel Companion
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover personalized travel experiences tailored just for you
        </p>
        <button
          onClick={() => navigate('/preferences')}
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Start Planning
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            icon: <Compass className="h-8 w-8 text-indigo-600" />,
            title: "Smart Recommendations",
            description: "AI-powered suggestions based on your preferences"
          },
          {
            icon: <Map className="h-8 w-8 text-indigo-600" />,
            title: "Dynamic Itineraries",
            description: "Real-time updates based on local events and conditions"
          },
          {
            icon: <Calendar className="h-8 w-8 text-indigo-600" />,
            title: "Flexible Planning",
            description: "Easily adjustable schedules that adapt to your needs"
          },
          {
            icon: <Sun className="h-8 w-8 text-indigo-600" />,
            title: "Weather Integration",
            description: "Weather-aware recommendations for better planning"
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Set Your Preferences",
              description: "Tell us about your travel style and interests"
            },
            {
              step: "2",
              title: "Get Recommendations",
              description: "Receive AI-powered suggestions tailored to you"
            },
            {
              step: "3",
              title: "Enjoy Your Trip",
              description: "Experience a perfectly planned journey"
            }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}