// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Portfolio from "./Portfolio";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
