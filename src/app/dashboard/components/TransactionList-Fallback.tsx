import Skeleton from "@/components/Skeleton";

const TransactionListFallback = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <TransactionSummaryItemSkeleton />
        <TransactionListSkeleton />
        <TransactionListSkeleton />
        <TransactionListSkeleton />
      </div>
      <div className="space-y-4">
        <TransactionSummaryItemSkeleton />
        <TransactionListSkeleton />
        <TransactionListSkeleton />
        <TransactionListSkeleton />
      </div>
    </div>
  );
};

export default TransactionListFallback;

export function TransactionListSkeleton() {
  return (
    <div className="flex items-center w-full space-x-4">
      <div className="flex items-center  grow">
        {" "}
        <Skeleton />
      </div>
      <div className="min-w-[150px] items-center hidden md:flex ">
        <Skeleton />
      </div>
      <div className="min-w-[70px]  text-right ">
        <Skeleton />{" "}
      </div>
      <div className="flex min-w-[50px] justify-end ">
        <Skeleton />
      </div>
    </div>
  );
}

export function TransactionSummaryItemSkeleton() {
  return (
    <div className="flex text-gray-500 space-x-4 dark:text-gray-400 font-semibold">
      <div className="grow ">
        {" "}
        <Skeleton />
      </div>
      <div className="min-w-[70px] text-right font-semibold  ">
        <Skeleton />
      </div>
      <div className="min-w-[50px] ">
        {" "}
        <Skeleton />{" "}
      </div>
    </div>
  );
}
