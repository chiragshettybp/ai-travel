import { create } from 'zustand';

interface UserPreferences {
  adventureLevel: number;
  budget: string;
  interests: string[];
  travelDates: {
    start: Date | null;
    end: Date | null;
  };
}

interface TravelStore {
  preferences: UserPreferences;
  setPreferences: (preferences: Partial<UserPreferences>) => void;
  itinerary: any[];
  setItinerary: (itinerary: any[]) => void;
  weatherData: any;
  setWeatherData: (data: any) => void;
}

export const useTravelStore = create<TravelStore>((set) => ({
  preferences: {
    adventureLevel: 5,
    budget: 'medium',
    interests: [],
    travelDates: {
      start: null,
      end: null,
    },
  },
  setPreferences: (newPreferences) =>
    set((state) => ({
      preferences: { ...state.preferences, ...newPreferences },
    })),
  itinerary: [],
  setItinerary: (itinerary) => set({ itinerary }),
  weatherData: null,
  setWeatherData: (data) => set({ weatherData: data }),
}));