import React from "react";
import { Route, Routes } from "react-router-dom";
import AllUsers from "./components/NewExpense/AllUsers";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import GetAlbums from "./components/NewExpense/album/GetAlbums";
import GetCommentUser from "./components/NewExpense/GetCommentUser";
import AlbumPhoto from "./components/NewExpense/album/albumPhoto";
import GetTodo from "./components/NewExpense/GetTodo";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AllUsers />} />
      <Route path="/expense-form/:id" element={<ExpenseForm />} />
      <Route path="/users/:userId/albums" element={<GetAlbums />} />
      <Route path="/posts/:id/comments" element={<GetCommentUser />} />
      <Route path="/albums/:albumId/photos" element={<AlbumPhoto />} />
      <Route path="/users/:id/todos" element={<GetTodo/>} />
    </Routes>
  );
};

export default App;
