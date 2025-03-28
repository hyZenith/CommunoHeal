import React, { Children } from "react";

const Authlayout = ({ children }) => {
  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center">
        <h2 className=""> Expense Tracker</h2>
        {children}
      </div>
    </div>
  );
};

export default Authlayout;
