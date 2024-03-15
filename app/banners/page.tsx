import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronsUpDown, Dot } from "lucide-react";
import Image from "next/image";

const images = [
  "https://cdn.e-food.gr/cdn-cgi/image/f=auto,w=315,h=125,dpr=2/shop/33569/cover",
  "https://cdn.e-food.gr/cdn-cgi/image/f=auto,w=315,h=125,dpr=2/shop/834186/cover",
  "https://cdn.e-food.gr/cdn-cgi/image/f=auto,w=315,h=125,dpr=2/shop/6570226/cover",
  "https://cdn.e-food.gr/cdn-cgi/image/f=auto,w=315,h=125,dpr=2/shop/191621/cover",
  "https://cdn.e-food.gr/cdn-cgi/image/f=auto,w=315,h=125,dpr=2/shop/5325688/cover",
  "https://cdn.e-food.gr/cdn-cgi/image/f=auto,w=315,h=125,dpr=2/shop/516506/cover",
  "https://cdn.e-food.gr/cdn-cgi/image/f=auto,w=315,h=125,dpr=2/shop/2056247/cover",
];

const Banners = () => {
  return (
    <div>
      <Table className="table-auto">
        <TableHeader>
          <TableRow className="text-[1rem] font-bold ">
            <TableHead className="pl-[2rem]">
              <Checkbox className="w-[24px] h-[24px] border-black opacity-[0.3]" />
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-[0.5rem]  py-[1.3rem]">
                Banner
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-[0.5rem]">
                Name of the campaign
                <ChevronsUpDown size="15px" />
              </div>
            </TableHead>
            <TableHead className="">
              <div className=" flex items-center gap-[0.5rem]">
                Status
                <ChevronsUpDown size="15px" />
              </div>
            </TableHead>
            <TableHead className="">
              <div className=" flex items-center gap-[0.5rem]">
                Upload Date
                <ChevronsUpDown size="15px" />
              </div>
            </TableHead>
            <TableHead className="w-full">
              <div className=" flex items-center gap-[0.5rem]">
                Creator
                <ChevronsUpDown size="15px" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4, 5, 6, 7].map((row, index) => (
            <TableRow key={row} className="cursor-pointer">
              <TableCell className="pl-[2rem]">
                <Checkbox className="w-[24px] h-[24px]" />
              </TableCell>
              <TableCell className="py-[1.3rem] px-[0rem] pl-[3.8rem]">
                <Image
                  src={images[index]}
                  width={120}
                  height={70}
                  alt="banner image"
                />
              </TableCell>
              <TableCell className="text-[#266dd3]">Some Campaign</TableCell>
              <TableCell>
                <div className="flex items-center gap-[0.5rem]">
                  <div className="w-[15px] h-[15px] rounded-full bg-green-500" />
                  Used
                </div>
              </TableCell>
              <TableCell>23/02/2023 19:00</TableCell>
              <TableCell>Nikos Portokaloglou</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Banners;
