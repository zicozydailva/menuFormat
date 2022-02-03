import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import menu from "./data";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filteredItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItem = menu.filter((item) => item.category === category);
    setMenuItems(newItem);
  };
  return (
    <>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        <Categories
          filteredItems={filteredItems}
          categories={categories}
          setCategories={setCategories}
        />
        <Menu menuItems={menuItems} />
      </section>
    </>
  );
};

export default App;
