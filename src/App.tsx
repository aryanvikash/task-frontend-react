import Boards from "src/components/boards";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "src/components/header";
import { fetchBoards } from "./Redux/reducers/boards.reducer";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect dispatch");
    dispatch(fetchBoards());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Boards />
    </>
  );
}

export default App;
