import { ReactNode } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Icon } from "next/dist/lib/metadata/types/metadata-types";

// interface TableProps<T, U> {
//   colsData: T[];
//   rowsData: U[];
// }

// export default function Table<T, U>({
//   colsData,
//   rowsData,
// }: TableProps<
//   T & { value: string },
//   U & {
//     [prop: string]: string | number | Date;
//     // name: string;
//     // numOfBanners: number;
//     // creator: string;
//     // lastEdit: Date;
//     // status: string;
//   }
// >) {
//   return (
//     <Table>
//       <TableHeader>
//         <TableRow>
//           {colsData?.map((item, index) => (
//             <TableHead key={index}>
//               <span>{item.value}</span>
//             </TableHead>
//           ))}
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {rowsData?.map((item, index) => (
//           <TableRow key={index}>
//             {Object.entries(item).map((prop, value) => (
//               <TableCell key={prop}>{value}</TableCell>
//             ))}
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// }
