const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function generateItinerary(preferences: any) {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4-turbo-preview",
        messages: [{
          role: "system",
          content: "You are an expert travel advisor. Generate a detailed itinerary based on the user's preferences."
        }, {
          role: "user",
          content: `Generate a travel itinerary for someone who likes ${preferences.interests.join(', ')} 
                    with an adventure level of ${preferences.adventureLevel}/10 and a ${preferences.budget} budget.`
        }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating itinerary:', error);
    throw error;
  }
}