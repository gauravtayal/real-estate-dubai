import React from "react";
import Propeties from "../../data/property.json";
import AdvanceSearch from "../shared/AdvanceSearch";
import Table from "../shared/Table";
import { DataTable } from "@/pages/search/data-table";
import { columns } from "@/pages/search/columns";
type SearchContentProps = {};

const SearchContent: React.FC<SearchContentProps> = () => {
  interface property {
    _id: string;
    feature: string;
    img: string;
    title: string;
    description: string;
    address: string;
    City: string;
    State: string;
    ZipPostalCode: string;
    Area: string;
    County: string;
    Apartment: string;
    Bedrooms: number;
    Bathrooms: number;
    Garage: number;
    YearBuilt: number;
    squareFt: string;
    GarageSize: string;
    price: number;
    PropertySize: string;
    PropertyType: string;
    PropertyStatus: string;
  }
  [];

  return (
    <>
      <section className="py-[70px]">
        <div className="max-w-[1280px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="pb-[100px] mx-auto">
            <h2 className="font-normal text-center text-[35px] leading-[42px] text-[#000]">
              Search the Properties in Dubai
            </h2>
          </div>
        </div>
      </section>
      <AdvanceSearch />
      <Table />
    </>
  );
};
export default SearchContent;
