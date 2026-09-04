import { AdminGuard } from "@/components/admin/AdminGuard";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-slate-50">
        <div className="flex">
          <AdminSidebar />

          <main className="min-h-screen flex-1 lg:ml-64">{children}</main>
        </div>
      </div>
    </AdminGuard>
  );
}
