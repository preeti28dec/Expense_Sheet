import React from "react";
import { Route, Routes } from "react-router-dom";
import AllUsers from "./components/NewExpense/AllUsers";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AllUsers />} />
      <Route path="/expense-form" element={<ExpenseForm />} />
    </Routes>
  );
};

export default App;
