import { API_URL } from "@/constant/API_URL";
import { ENV } from "@/constant/ENV";
import { useQuery } from "@tanstack/react-query";

const fetchCategories = async () => {
  const response = await fetch(ENV.SERVER_URL! + API_URL.CATEGORY);
  const result = await response.json();

  return result.data;
};

export const useGetCategory = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["qq"],
    queryFn: fetchCategories,
  });

  return { data, isLoading, isError };
};
