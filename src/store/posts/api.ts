const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async (): Promise<{ data: number }> => {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
