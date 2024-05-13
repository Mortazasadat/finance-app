import PageHeader from "@/components/page-header";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      <PageHeader className="my-8" />
      <main>{children}</main>
      <footer className="!mt-auto text-center py-8 ">footer</footer>
    </>
  );
}
