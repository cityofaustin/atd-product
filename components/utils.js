import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const text = await res.text();
  if (!res.ok) {
    throw text;
  }
  return JSON.parse(text);
};

export function useSocrata({ url }) {
  const { data, error } = useSWR(url, fetcher);
  return {
    data: data || [],
    isLoaded: !!error || !!data,
    error: error,
  };
}
