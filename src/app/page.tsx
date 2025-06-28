"use client";

import { useGetCategory } from "@/hooks/queries/useGetCategory";
import { useGetProduct } from "@/hooks/queries/useGetProduct";
import { Category } from "@/types/category";
import { Controller, FieldValues, useForm } from "react-hook-form";

export default function Home() {
  /** Hook */
  const { handleSubmit, register, control } = useForm();

  /** Data */
  const {
    data: categories,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useGetCategory();

  // const {
  //   data: products,
  //   isLoading: productLoading,
  //   isError: productErorr,
  // } = useGetProduct();

  /** Funtion */
  const onSubmit = (data: FieldValues) => {
    console.table(data);
    console.log("hi");
  };

  /** Variables */
  const pageLoading = categoryLoading;
  const pageError = categoryError;

  /** CSS */
  const inputClass = "border w-[300] h-[34px] px-1 rounded-md shadow-2xl";
  const divClass = "flex gap-3 items-center";
  const labelClass = "w-[120px]";

  /** Console */
  console.log(categories, "data");

  if (pageLoading) return <div>...로딩중입니다</div>;
  if (pageError) return <div>에러가 발생하였습니다.</div>;

  return (
    <main className="flex flex-col gap-10 justify-center items-center h-screen">
      <h2 className="text-2xl font-semibold">게시글 등록</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className={divClass}>
          <label className={labelClass}>게시글 제목</label>
          <input {...register("title")} type="text" className={inputClass} />
        </div>
        <div className={divClass}>
          <label htmlFor="" className={labelClass}>
            카테고리선택
          </label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <select
                  value={field.value}
                  onChange={field.onChange}
                  className={inputClass}
                >
                  <option value="">--카테고리--</option>
                  {categories?.map((item: Category, index: number) => (
                    <option key={index} value={item._id}>
                      {item.category}
                    </option>
                  ))}
                </select>
              );
            }}
          />
        </div>
        <div className={divClass}>
          <label htmlFor="" className={labelClass}>
            상품선택
          </label>
          {/* <select name="pets" id="pet-select" className={inputClass}>
            {products.map((item: Product, index: number) => (
              <option key={index} value={item._id}>
                {item.product_name}
              </option>
            ))}
          </select>  */}
        </div>
        <div className={divClass}>
          <label className={labelClass}>상세이미지 선택</label>
          <input type="file" className={inputClass} />
        </div>
        <div className="flex justify-end">
          <button className="cursor-pointer bg-blue-400 px-3 py-2 rounded-md font-bold text-white hover:opacity-80">
            전송
          </button>
        </div>
      </form>
    </main>
  );
}
