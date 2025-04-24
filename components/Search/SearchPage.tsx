import React from "react";

type SearchPageProps = {};

import SearchTitle from "./SearchTitle";
import SearchContent from "./SearchContent";

const SearchPage: React.FC<SearchPageProps> = () => {
  return (
    <section className="pb-20">
      <div>
        <SearchTitle />
        <SearchContent />
      </div>
    </section>
  );
};
export default SearchPage;
