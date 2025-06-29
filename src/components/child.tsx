import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from "react";

export type CreateFormHandle = Pick<HTMLFormElement, "submit">;

type CreateFormProps = {
  defaultValues?: object;
};

const ChildComponent: ForwardRefRenderFunction<
  CreateFormHandle,
  CreateFormProps
> = ({}, ref) => {
  const [data, setData] = useState("야호");

  useImperativeHandle(ref, () => ({
    submit: (ss) => {
      console.log(data + ss);
    },
  }));

  return <div></div>;
};

export const Child = forwardRef(ChildComponent);

