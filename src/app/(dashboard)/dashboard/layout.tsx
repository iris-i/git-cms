import Navbar from "@/app/components/nav/Navbar";

export default function DashboardLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main>
      <Navbar />
      <h1>Dashboard</h1>
      {children}
    </main>
  )

}
