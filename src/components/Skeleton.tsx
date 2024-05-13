const Skeleton = (props: any) => {
  return (
    <div
      className={`animate-pulse rounded-md w-full h-4 bg-gray-300 dark:bg-gray-700 ${props.className}`}
    ></div>
  );
};

export default Skeleton;
