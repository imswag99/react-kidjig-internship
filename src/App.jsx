import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-[%100] h-[100vh] font-outfit bg-bg text-white overflow-hidden relative">
      <Header />
      <Home />
    </div>
  );
};

export default App;
