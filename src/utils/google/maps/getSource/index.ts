'use server';

export const getMapSource = async (query: string) => {
  return `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${query}`;
};
