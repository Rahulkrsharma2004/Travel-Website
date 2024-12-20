export const fetchTrips = async () => {
    const response = await fetch('/api/trips');
    return response.json();
  };