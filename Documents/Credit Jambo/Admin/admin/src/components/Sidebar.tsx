import Link from "next/link";
import { Home, Users, CreditCard } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="w-64 bg-brandBlack text-white h-screen p-6 flex flex-col space-y-6">
      <h1 className="text-2xl font-bold text-brandGreen">Credit Jambo</h1>
      <nav className="flex flex-col space-y-3 mt-10">
        <Link href="/dashboard" className="flex items-center gap-2 p-2 rounded hover:bg-brandGreen hover:text-white transition">
          <Home size={20} /> Dashboard
        </Link>
        <Link href="/customers" className="flex items-center gap-2 p-2 rounded hover:bg-brandGreen hover:text-white transition">
          <Users size={20} /> Customers
        </Link>
        <Link href="/transactions" className="flex items-center gap-2 p-2 rounded hover:bg-brandGreen hover:text-white transition">
          <CreditCard size={20} /> Transactions
        </Link>
      </nav>
    </div>
  );
};
