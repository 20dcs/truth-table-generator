import React from "react";

export const ErrorMessage = ({ errorObject }) => {
  if (errorObject.error === "Invalid syntax.") {
    return <div>{errorObject.error}</div>;
  }
  const value = errorObject.value;
  const index = errorObject.index;
  const operator = value[index];
  const array = [value.slice(0, index), value.slice(index + 1)];
  console.log("value: ", value);
  console.log("index: ", index);
  console.log(array);
  return (
    <>
      <div>
        {array[0]}
        <div>{operator}</div>
        {array[1]}
      </div>
      <div>{errorObject.error}</div>
    </>
  );
};
