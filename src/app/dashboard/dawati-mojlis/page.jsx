"use client";

import DawatiMojlishForm from "@/components/DawatiMojlishForm";
import ReportTable from "@/components/ReportTableMonthly";
import ReportTableYearly from "@/components/ReportTableYearly";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/TabButton";

export default function DawatiMojlis() {
  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <Tabs defaultValue="dataForm" className="w-full p-4">
      <div className="flex justify-between">
        <TabsList>
          <TabsTrigger value="dataForm">তথ্য দিন</TabsTrigger>
          <TabsTrigger value="report">প্রতিবেদন</TabsTrigger>
        </TabsList>
        <div>
          <form className="border px-4 py-1 rounded-lg">
            <input type="date" defaultValue={currentDate}></input>
          </form>
        </div>
      </div>
      <TabsContent value="dataForm">
        <div className=" bg-gray-50 rounded shadow">
          <DawatiMojlishForm />
        </div>
      </TabsContent>
      <TabsContent value="report">
        <div className=" bg-gray-50 rounded shadow">
          <Tabs defaultValue="monthly" className="w-full p-4">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="monthly">মাসিক</TabsTrigger>
                <TabsTrigger value="yearly">বাঁৎসরিক</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly">
              <div>
                <ReportTable />
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div>
                <ReportTableYearly />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </TabsContent>
    </Tabs>
  );
}
