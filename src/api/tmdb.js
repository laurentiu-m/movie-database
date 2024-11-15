const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const fetchPopularMovies = async () => {
  const response = await fetch(
    `${apiUrl}/movie/popular?language=en-US&page=1&api_key=${apiKey}`
  );
  if (!response.ok) throw new Error("Failed to fetch movies");
  return response.json();
};
