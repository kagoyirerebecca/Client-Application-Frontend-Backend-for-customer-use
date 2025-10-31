"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "@/services/admin";
import { Sidebar } from "@/components/Sidebar";
import { Table } from "@/components/Table";

const TransactionsPage = () => {
  const { data, isLoading } = useQuery(["transactions"], fetchTransactions);

  if (isLoading) return <p className="p-6">Loading...</p>;

  return (
    <div className="flex bg-brandGray min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-3xl font-bold text-brandBlack">Transactions</h1>
        <Table
          headers={["Customer", "Type", "Amount", "Date", "Device ID", "Status"]}
          data={data}
        />
      </main>
    </div>
  );
};

export default TransactionsPage;
