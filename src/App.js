import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Publications } from "./pages/Publications";

import "./styles/general.css";
import "./styles/queries.css";

export function App() {
  const [isHeaderSticky, setHeaderSticky] = useState(false);
  const [isOnPublicationsPage, setOnPublicationsPage] = useState(false);

  return (
    <BrowserRouter>
      <Header
        isHeaderSticky={isHeaderSticky}
        isOnPublicationsPage={isOnPublicationsPage}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isHeaderSticky={isHeaderSticky}
                setHeaderSticky={setHeaderSticky}
              />
            }
          />
          <Route
            path="/publications"
            element={
              <Publications
                setHeaderSticky={setHeaderSticky}
                setOnPublicationsPage={setOnPublicationsPage}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
