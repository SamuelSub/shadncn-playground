"use client";

import React from "react";

import { Search, Files, Trash2, Plus, SlidersVertical } from "lucide-react";

// import Table from "@/components/table/Table";

// const colsData=[
//   { value: "Name of Rule" },
//   { value: "Num of Banners" },
//   { value: "creator" },
//   { value: "Last Edit" },
//   { value: "Status" },
// ]

// const rowsData=[
//   {ruleName: "Delete", bannersNum: 2, creator: "Nikos Portokaloglou", lastEdit: new Date(), status: "used"}
// ]

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Rankings = () => {
  return (
    <div>
      <div className="bg-zinc-100 flex justify-between items-center py-4 pr-7 pl-10 text-nowrap text-sm">
        <span className="text-gray-400">150 Results</span>
        <div className="flex justify-between items-center gap-10 text-secondary">
          <form action="" className="flex justify-between items-center gap-2">
            <Search className="h-4 w-4 cursor-pointer" />
            <input
              type="text"
              placeholder="Search name of ranking"
              className="bg-transparent placeholder:text-secondary"
            />
          </form>
          <div
            onClick={() => console.log("Copied")}
            className="cursor-pointer flex justify-between items-center gap-2"
          >
            <Files className="h-4 w-4" />
            Clone
          </div>
          <div
            onClick={() => console.log("Deleted")}
            className="cursor-pointer flex justify-between items-center gap-2"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </div>
          <div
            onClick={() => console.log("Rank Created")}
            className="cursor-pointer flex justify-between items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Create Ranking
          </div>
          <div
            onClick={() => console.log("Rank Filtered")}
            className="cursor-pointer flex justify-between items-center gap-2"
          >
            <SlidersVertical className="h-4 w-4" />
            Filter Ranking
          </div>
        </div>
      </div>
      <Table></Table>
    </div>
  );
};

export default Rankings;
