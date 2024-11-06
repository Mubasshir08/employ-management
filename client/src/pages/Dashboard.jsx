// src/pages/Dashboard.jsx
import React from "react";
import Graph from "./Graph";

function Dashboard() {
  return (
    <section>
      <h2 className="text-center text-lg mt-3">Dashboard</h2>
      {/* current-month */}
      <div className="mt-5 mx-auto px-3 py-2 rounded-lg bg-neutral-100 w-[90vw]">
        <div className="flex justify-between my-1">
          <h3>This Month</h3>
          <h3>November</h3>
        </div>
        <div className="flex justify-between my-1">
          <h3>Leave</h3>
          <h3 className="">2</h3>
        </div>
        <div className="flex justify-between my-1 text-red-600">
          <h3>Deduction</h3>
          <h3 className="">3 (-300 BDT)</h3>
        </div>
        <div className="flex justify-between my-1 text-green-700">
          <h3>Income</h3>
          <h3 className="">40 BDT</h3>
        </div>
      </div>
      {/* current-month */}
      <div>
        <Graph />
        <h2 className="text-center text-lg mt-5">Overall</h2>
        <div className="grid grid-cols-2 px-3 mr-1 pt-2">
          <div className="bg-neutral-100 rounded-2xl py-3 px-3 mt-3 ml-2">
            Active From <span className="text-red-400 ml-16">August</span>
          </div>
          <div className="bg-neutral-100 rounded-2xl py-3 px-2 mt-3 ml-2">
            Total Earning <span className="text-green-800 ml-1">200 BDT</span>
          </div>
          <div className="bg-neutral-100 rounded-2xl py-3 px-3 mt-3 ml-2">
            Total Leave <span className="text-red-400 ml-10">10</span>
          </div>
          <div className="bg-neutral-100 rounded-2xl py-3 px-3 mt-3 ml-2">
            Total Deduction <span className="text-red-400 ml-3">4</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
