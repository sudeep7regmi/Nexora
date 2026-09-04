export default function AdminDashboardPage() {
    return (
      <main className="p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-950">
            Dashboard
          </h1>
  
          <p className="mt-1 text-sm text-slate-500">
            Overview of your Nexora store.
          </p>
        </div>
  
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <DashboardCard
            title="Products"
            value="—"
            description="Total products"
          />
  
          <DashboardCard
            title="Customers"
            value="—"
            description="Registered customers"
          />
  
          <DashboardCard
            title="Orders"
            value="—"
            description="Total orders"
          />
  
          <DashboardCard
            title="Revenue"
            value="—"
            description="Total revenue"
          />
        </div>
  
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-950">
              Recent Orders
            </h2>
  
            <p className="mt-2 text-sm text-slate-500">
              Recent order information will appear here.
            </p>
          </section>
  
          <section className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-950">
              Low Stock
            </h2>
  
            <p className="mt-2 text-sm text-slate-500">
              Products with low inventory will appear here.
            </p>
          </section>
        </div>
      </main>
    );
  }
  
  interface DashboardCardProps {
    title: string;
    value: string;
    description: string;
  }
  
  function DashboardCard({
    title,
    value,
    description,
  }: DashboardCardProps) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>
  
        <p className="mt-2 text-3xl font-bold text-slate-950">
          {value}
        </p>
  
        <p className="mt-1 text-xs text-slate-500">
          {description}
        </p>
      </div>
    );
  }