"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Property = {
  Developer: string;
  Project: string;
  Location: string;
  City: string;
  UnitType: string;
  ConstructionStatus: string;
  HandoverMonth: string;
  HandoverYear: string;
  PaymentPlan: string;
  Configuration: string;
  StartingSize: number;
  StartingPrice: number;
};

export const columns: ColumnDef<Property>[] = [
  {
    accessorKey: "Developer",
    header: "Developer",
    filterFn: "includesString",
  },
  {
    accessorKey: "Project",
    header: "Project",
    filterFn: "includesString",
  },
  {
    accessorKey: "Location",
    header: "Location",
    filterFn: "includesString",
  },
  {
    accessorKey: "City",
    header: "City",
    filterFn: "includesString",
  },
  {
    accessorKey: "UnitType",
    header: "Unit Type",
    filterFn: "includesString",
  },
  {
    accessorKey: "ConstructionStatus",
    header: "Construction Status",
    filterFn: "includesString",
  },
  {
    accessorKey: "HandoverMonth",
    header: "Handover Month",
    filterFn: "includesString",
  },
  {
    accessorKey: "HandoverYear",
    header: "Handover Year",
    filterFn: "includesString",
  },
  {
    accessorKey: "PaymentPlan",
    header: "Payment Plan",
    filterFn: "includesString",
  },
  {
    accessorKey: "Configuration",
    header: "Configuration",
    filterFn: "includesString",
  },
  {
    accessorKey: "StartingSize",

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Starting Size (Sq. m)
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "StartingPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Starting Price (in AED)
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
