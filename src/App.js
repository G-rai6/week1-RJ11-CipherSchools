import React from "react";
import alluserList from "./components/alluserList";
import test from "./components/test";

const App = () => {
  return(
  <div>
    <test key={1}/>
    <alluserList />
  </div>
  );
};

export default App;