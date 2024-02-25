import React from "react";
import CategoryFilter from "./CategoryFilter";
import PriceRangeFilter from "./PriceRangeFilter";


const Filters: React.FC<{ categoryId: any }> = ({ categoryId }) => {
  return (
    <div>
    <div className="my-4">
      <div className="flex flex-col md:flex-row"> 
        <div className="mb-4 md:mb-0 w-full md:w-auto mr-4"> 
          <CategoryFilter categoryId={categoryId} />
        </div>
        <div className="w-full md:w-auto"> 
          <PriceRangeFilter />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Filters;
