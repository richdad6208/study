import { API_URL } from "@/constant/API_URL";
import { ENV } from "@/constant/ENV";
import { queryKey } from "@/lib/queryKey";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await fetch(ENV.SERVER_URL! + API_URL.PRODUCT, {
    credentials: "include",
  });
  const result = await response.json();

  return result.data;
};

export const useGetProduct = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKey.products],
    queryFn: fetchProducts,
  });

  return { data, isLoading, isError };
};
