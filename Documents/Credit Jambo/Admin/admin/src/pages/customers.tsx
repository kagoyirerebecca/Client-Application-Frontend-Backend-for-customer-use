"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCustomers } from "@/services/admin";
import { Sidebar } from "@/components/Sidebar";
import { Table } from "@/components/Table";
import { useState } from "react";
import { Modal } from "@/components/Modal";

const CustomersPage = () => {
  const { data, isLoading } = useQuery(["customers"], fetchCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  if (isLoading) return <p className="p-6">Loading...</p>;

  return (
    <div className="flex bg-brandGray min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-3xl font-bold text-brandBlack">Customers</h1>

        <Table
          headers={["Name", "Email", "Device ID", "Verified"]}
          data={data.map((c: any) => ({ ...c, verified: c.verified ? "Yes" : "No" }))}
        />

        <Modal
          isOpen={!!selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
        >
          <h2 className="text-xl font-semibold text-brandBlack">Verify Device</h2>
          <p className="mt-2">Customer: {selectedCustomer?.name}</p>
          <button className="mt-4 px-4 py-2 bg-brandGreen text-white rounded hover:bg-green-600 transition">
            Verify Device
          </button>
        </Modal>
      </main>
    </div>
  );
};

export default CustomersPage;
