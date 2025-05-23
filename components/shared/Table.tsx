import React from "react";
import DataTable from "@/components/Search/data-table";
import { columns } from "@/components/Search/columns";
import { Propeties } from "../../data/property.json";

type TableProps = {};

const Table: React.FC<TableProps> = ({}) => {
  console.log("properties", Propeties);
  return (
    <section className="">
      <div className="max-w-[1300px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={Propeties} />
        </div>
      </div>
    </section>
  );
};
export default Table;
