"use client";

import { useQuery } from "@tanstack/react-query";
import { adminClientService } from "@/services/adminClientService";
import { Card } from "@/components/Card";
import { Table } from "@/components/Table";
import { Sidebar } from "@/components/Sidebar";

const DashboardPage = () => {
  const { data: clients, isLoading } = useQuery({
    queryKey: ["clientsOverview"],
    queryFn: adminClientService.getClientsOverview,
  });

  if (isLoading) return <p className="p-6">Loading...</p>;

  return (
     <div className="p-8">
      <h1 className="text-3xl font-bold text-brandGreen mb-6">Clients Overview</h1>
      <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-md">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Balance</th>
              <th className="p-3 border-b">Transactions</th>
            </tr>
          </thead>
          <tbody>
            {clients?.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{client.name}</td>
                <td className="p-3 border-b">{client.email}</td>
                <td className="p-3 border-b">{client.balance}</td>
                <td className="p-3 border-b">{client.transactions.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
