import React, { useEffect, useState } from 'react';
import { useTravelStore } from '../lib/store';
import { generateItinerary } from '../lib/api';
import { Calendar, MapPin, Clock, Sun, Cloud, Umbrella } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Itinerary() {
  const { preferences } = useTravelStore();
  const [loading, setLoading] = useState(true);
  const [itinerary, setItinerary] = useState<string>('');
  const [weather, setWeather] = useState<any>({
    temperature: 25,
    condition: 'sunny',
    forecast: [
      { day: 'Monday', temp: 24, condition: 'sunny' },
      { day: 'Tuesday', temp: 26, condition: 'partly cloudy' },
      { day: 'Wednesday', temp: 23, condition: 'rainy' },
    ]
  });

  useEffect(() => {
    const loadItinerary = async () => {
      try {
        const generatedItinerary = await generateItinerary(preferences);
        setItinerary(generatedItinerary);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to generate itinerary. Please try again.');
        setLoading(false);
      }
    };

    loadItinerary();
  }, [preferences]);

  const WeatherIcon = ({ condition }: { condition: string }) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="h-6 w-6 text-yellow-500" />;
      case 'partly cloudy':
        return <Cloud className="h-6 w-6 text-gray-500" />;
      case 'rainy':
        return <Umbrella className="h-6 w-6 text-blue-500" />;
      default:
        return <Sun className="h-6 w-6 text-yellow-500" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Your Personalized Itinerary</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Weather Forecast</h3>
          <div className="grid grid-cols-3 gap-4">
            {weather.forecast.map((day: any, index: number) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-medium mb-2">{day.day}</p>
                <WeatherIcon condition={day.condition} />
                <p className="mt-2">{day.temp}°C</p>
              </div>
            ))}
          </div>
        </div>

        <div className="prose max-w-none">
          <div className="whitespace-pre-wrap">
            {itinerary.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Print Itinerary
          </button>
          <button
            onClick={() => toast.success('Itinerary saved!')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Save Itinerary
          </button>
        </div>
      </div>
    </div>
  );
}