import useSWR from "swr";
export const useData = (url) => {
  const { data, error } = useSWR(`/api${url}`, {
    refreshInterval: 1000,
  });
  return {
    data: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
