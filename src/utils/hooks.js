import { useEffect, useState } from "react";

export const useDocTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  useEffect(() => {
    document.title = title;
  }, [title]);
  return [title, setTitle];
};

export const useForm = (initial) => {
  const [data, setData] = useState(initial);

  const changeHandler = (key) => {
    return (event) => {
      setData((data) => ({ ...data, [key]: event.target.value }));
    };
  };
  const reset = () => {
    for (let key in data) {
      data[key] = "";
    }
  };
  return [data, changeHandler, reset];
};
