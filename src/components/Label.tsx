export const Label = (props: any) => {
  return (
    <label
      {...props}
      className={`text-gray-700 block dark:text-gray-300 ${props.className}`}
    >
      {props.children}
    </label>
  );
};
