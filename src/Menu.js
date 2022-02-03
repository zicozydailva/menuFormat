import React from "react";

const Menu = ({ menuItems }) => {
  console.log(menuItems);
  return (
    <div className="section-center">
      {menuItems.map((item) => {
        const { title, img, price, desc } = item;
        return (
          <div className="menu-item" key={item.id}>
            <img src={img} className="photo" alt="" />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
