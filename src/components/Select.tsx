import { forwardRef } from "react";

export const Select = forwardRef((props: any, ref) => {
  return (
    <select
      ref={ref}
      {...props}
      className={`rounded-md shadow-sm focus:!outline-none !important w-full border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950 ${props.className}`}
    >
      {props.children}
    </select>
  );
});
