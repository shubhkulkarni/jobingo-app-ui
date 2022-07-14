import React from "react";
export const loadLazy = (path) => {
  return React.lazy(async () => {
    await import(path);
  });
};
