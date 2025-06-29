"use client";

import { API_URL } from "@/constant/API_URL";
import { ENV } from "@/constant/ENV";
import { fetchHeader } from "@/lib/reqres";
import { User } from "@/types/user";
import { Pagination } from "@mantine/core";
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface PageResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
  support?: object;
}

export default function Page() {
  /** Hook */
  const queryClient = useQueryClient();

  /** State */
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);

  /** Data */
  const { data } = useQuery({
    queryKey: ["users", String(page)],
    queryFn: async (): Promise<PageResponse<User>> => {
      return fetch(
        ENV.SERVER_URL + API_URL.CATEGORY + `?page=${page}&per_page=2`,
        fetchHeader
      )
        .then(async (res) => await res.json())
        .then((res) => res);
    },
    placeholderData: keepPreviousData,
  });

  /** Effects */
  useEffect(() => {
    document.title = "야호";
  }, []);

  useEffect(() => {
    if (data) {
      setTotal(data.total_pages);
    }
  }, [data]);

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["users", String(page + 1)],
      queryFn: async (): Promise<PageResponse<User>> => {
        return fetch(
          ENV.SERVER_URL + API_URL.CATEGORY + `?page=${page + 1}&per_page=2`,
          fetchHeader
        )
          .then(async (res) => await res.json())
          .then((res) => res);
      },
    });
  }, [page, queryClient]);

  console.log(data, "data");

  return (
    <div className="">
      <div className="cursor-pointer origin-top hover:animate-good w-[100px] h-[100px] bg-gray-400 rounded-2xl">
        야호
      </div>
      <div className="p-10 text-3xl font-serif flex flex-col justify-between space-y-10 h-screen">
        <div className="grid grid-cols-2 gap-10">
          {data?.data?.map((it, idx) => (
            <div key={idx}>{it.name}</div>
          ))}
        </div>
        <div className="flex justify-center">
          <Pagination total={total} onChange={setPage} value={page} />
        </div>
      </div>
    </div>
  );
}
