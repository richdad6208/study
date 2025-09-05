"use client";

import { useGetCategory } from "@/hooks/queries/useGetCategory";
import { useGetProduct } from "@/hooks/queries/useGetProduct";
import { Category } from "@/types/category";
import { DetailImage } from "@/types/detail-images";
import { Product } from "@/types/product";
import { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";

export default function PostForm() {
  /** Hook */
  const { handleSubmit, register, control } = useForm();

  /**state */
  const [detailImages, setDetailImages] = useState<DetailImage[]>([]);
  /** Data */
  const {
    data: categories,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useGetCategory();

  const {
    data: products,
    isLoading: productLoading,
    isError: productError,
  } = useGetProduct();

  /** Funtions */
  const onSubmit = (data: FieldValues) => {
    console.table(data);
    console.log("gi");
  };

  const handleImage: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;
    if (!files) return; //얼리리턴

    const filesArray = Array.from(files).map((file) => ({
      file,
      src: URL.createObjectURL(file),
    }));

    setDetailImages(filesArray);
  };

  const handleDelete = (index: number) => {
    setDetailImages((item) => {
      const updateImg = [...item];
      URL.revokeObjectURL(updateImg[index].src);
      updateImg.splice(index, 1);
      return updateImg;
    });
  };

  /** Variables */
  const pageLoading = categoryLoading || productLoading;
  const pageError = categoryError || productError;

  /** CSS */
  const inputClass = "border rounded-md shadow-md h-[35px] px-1 w-[300px]";
  const labelClass = "w-[140px]";
  const divClass = "flex gap-3 items-center ";

  /** Console */
  console.log(categories, "data");
  console.log(products, "data");

  if (pageLoading) return <div>로딩중</div>;
  if (pageError) return <div>에러발생</div>;

  return (
    <main className="flex flex-col gap-10 justify-center items-center h-screen">
      <h2 className="text-2xl font-semibold">게시글등록</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className={divClass}>
          <label htmlFor="" className={labelClass}>
            게시글 제목
          </label>
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
                  className={inputClass}
                  value={field.value}
                  onChange={field.onChange}
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
          <Controller
            control={control}
            render={({ field }) => {
              return (
                <select
                  className={inputClass}
                  value={field.value}
                  onChange={field.onChange}
                >
                  {products.map((item: Product, index: number) => (
                    <option key={index} value={item._id}>
                      {item.product_name}
                    </option>
                  ))}
                </select>
              );
            }}
            name="product"
          />
        </div>
        <div className={divClass}>
          <label htmlFor="" className={labelClass}>
            상세 이미지 선택
          </label>
          <input
            className={inputClass}
            type="file"
            multiple
            accept="image/*"
            onChange={handleImage}
          />
          <div className="flex gap-3 mt-3">
            {detailImages.map((item, index) => (
              <div key={index}>
                <img
                  src={item.src}
                  alt="thumbnail"
                  className="w-24 h-24 object-cover"
                />
                <button onClick={() => handleDelete(index)}>삭제</button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-400 px-3 py-2 rounded-md font-bold text-white hover:opacity-70 cursor-pointer">
            전송
          </button>
        </div>
      </form>
    </main>
  );
}
