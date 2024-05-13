import { forwardRef } from "react";

export const Input = forwardRef((props: any, ref) => {
  const styles: any = {
    checkbox:
      "rounded-md border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm",
    default:
      "rounded-md shadow-sm focus:!outline-none !important w-full border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950",
  };
  return (
    <input
      {...props}
      ref={ref}
      className={styles[props.type] ?? styles["default"]}
    />
  );
});
