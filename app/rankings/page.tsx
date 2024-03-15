"use client";

import React from "react";

import {
  Search,
  Files,
  Trash2,
  Plus,
  SlidersVertical,
  ChevronsUpDown,
} from "lucide-react";

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
  TableCell,
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
      <Table>
        <TableHeader>
          <TableRow className="text-black text-center">
            <TableHead>
              <div className="flex justify-between items-center">
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex justify-between items-center gap-1 w-fit">
                Name of Rule
                <ChevronsUpDown className="text-gray-600 w-4 h-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex justify-between items-center gap-1 w-fit">
                Num Of Banners
                <ChevronsUpDown className="text-gray-600 w-4 h-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex justify-between items-center gap-1 w-fit">
                Creator
                <ChevronsUpDown className="text-gray-600 w-4 h-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex justify-between items-center gap-1 w-fit">
                Last Edit
                <ChevronsUpDown className="text-gray-600 w-4 h-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex justify-between items-center gap-1 w-fit">
                Status
                <ChevronsUpDown className="text-gray-600 w-4 h-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex justify-between items-center">
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </TableCell>
            <TableCell>Breakfast</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell>Nikos Portokaloglou</TableCell>
            <TableCell>15/3/2024 11:00</TableCell>
            <TableCell>
              <div className="flex justify-between items-center gap-2 w-fit">
                <div className="bg-primary w-3 h-3 outline-none rounded-lg"></div>
                <span>Used</span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex justify-between items-center">
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </TableCell>
            <TableCell>Breakfast</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell>Nikos Portokaloglou</TableCell>
            <TableCell>15/3/2024 11:00</TableCell>
            <TableCell>
              <div className="flex justify-between items-center gap-2 w-fit">
                <div className="bg-black w-3 h-3 outline-none rounded-lg"></div>
                <span>Unused</span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex justify-between items-center">
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </TableCell>
            <TableCell>Breakfast</TableCell>
            <TableCell className="text-center">10</TableCell>
            <TableCell>Nikos Portokaloglou</TableCell>
            <TableCell>15/3/2024 11:00</TableCell>
            <TableCell>
              <div className="flex justify-between items-center gap-2 w-fit">
                <div className="bg-primary w-3 h-3 outline-none rounded-lg"></div>
                <span>Used</span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex justify-between items-center">
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </TableCell>
            <TableCell>Breakfast</TableCell>
            <TableCell className="text-center">8</TableCell>
            <TableCell>Nikos Portokaloglou</TableCell>
            <TableCell>15/3/2024 11:00</TableCell>
            <TableCell>
              <div className="flex justify-between items-center gap-2 w-fit">
                <div className="bg-primary w-3 h-3 outline-none rounded-lg"></div>
                <span>Used</span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex justify-between items-center">
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </TableCell>
            <TableCell>Breakfast</TableCell>
            <TableCell className="text-center">9</TableCell>
            <TableCell>Nikos Portokaloglou</TableCell>
            <TableCell>15/3/2024 11:00</TableCell>
            <TableCell>
              <div className="flex justify-between items-center gap-2 w-fit">
                <div className="bg-black w-3 h-3 outline-none rounded-lg"></div>
                <span>Unused</span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex justify-between items-center">
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </TableCell>
            <TableCell>Breakfast</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell>Nikos Portokaloglou</TableCell>
            <TableCell>15/3/2024 11:00</TableCell>
            <TableCell>
              <div className="flex justify-between items-center gap-2 w-fit">
                <div className="bg-primary w-3 h-3 outline-none rounded-lg"></div>
                <span>Used</span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex justify-between items-center">
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </TableCell>
            <TableCell>Breakfast</TableCell>
            <TableCell className="text-center">10</TableCell>
            <TableCell>Nikos Portokaloglou</TableCell>
            <TableCell>15/3/2024 11:00</TableCell>
            <TableCell>
              <div className="flex justify-between items-center gap-2 w-fit">
                <div className="bg-black w-3 h-3 outline-none rounded-lg"></div>
                <span>Unused</span>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Rankings;
