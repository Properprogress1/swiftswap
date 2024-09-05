import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex ">

            <Sidebar />
            {children}

        </main>
    );
}