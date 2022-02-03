import React from "react";

const Categories = ({ filteredItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return <button onClick={() => filteredItems(category)} className="filter-btn">{category}</button>;
      })}
    </div>
  );
};

export default Categories;
